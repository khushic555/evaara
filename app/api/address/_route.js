import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      phone,
      address,
      city,
      state,
      pincode,
      country,
    } = body;

    const savedAddress = await prisma.address.create({
      data: {
        fullName,
        phone,
        address,
        city,
        state,
        pincode,
        country,
      },
    });

    return Response.json(savedAddress, { status: 201 });

  } catch (error) {
    console.error("DATABASE ERROR:", error);

    return Response.json(
      {
        error: "Database connection failed",
        details: error.message,
      },
      { status: 500 }
    );
  }
}