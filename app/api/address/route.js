import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { currentUser } from "@clerk/nextjs/server";

// Fallback pool connection allocation to prevent hot-reload memory leaks
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

// 🟢 1. FETCH ADDRESSES (GET)
export async function GET() {
  try {
    const authUser = await currentUser();
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized access token" }, { status: 401 });
    }

    // Attempt database fetch sequence
    const dbUser = await prisma.user.findUnique({
      where: { clerkUserId: authUser.id },
      include: { addresses: true },
    });

    if (!dbUser) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(dbUser.addresses || [], { status: 200 });

  } catch (error) {
    console.error("❌ CRITICAL DATABASE ERROR DURING GET:", error);
    return NextResponse.json(
      { error: "Database transaction failed", details: error.message },
      { status: 500 }
    );
  }
}

// 🟢 2. SAVE AN ADDRESS (POST)
export async function POST(req) {
  try {
    const authUser = await currentUser();
    if (!authUser) {
      return NextResponse.json({ error: "Unauthorized access token" }, { status: 401 });
    }

    const body = await req.json();
    const { fullName, phone, address, city, state, pincode, country } = body;

    // Direct data verification pass
    if (!fullName || !address || !city || !pincode) {
      return NextResponse.json({ error: "Missing required core address parameters" }, { status: 400 });
    }

    let dbUser = await prisma.user.findUnique({
      where: { clerkUserId: authUser.id }
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          clerkUserId: authUser.id,
          email: authUser.emailAddresses[0]?.emailAddress || "no-email@clerk.user"
        }
      });
    }

    const newAddress = await prisma.address.create({
      data: {
        userId: dbUser.id,
        fullName,
        phone: phone || "",
        address,
        city,
        state: state || "",
        pincode,
        country: country || "India"
      }
    });

    return NextResponse.json(newAddress, { status: 200 });

  } catch (error) {
    console.error("❌ CRITICAL DATABASE ERROR DURING POST:", error);
    return NextResponse.json(
      { error: "Failed to record address transaction", details: error.message },
      { status: 500 }
    );
  }
}