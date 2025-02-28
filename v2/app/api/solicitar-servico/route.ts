import { NextResponse } from "next/server"
import {prisma} from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { companyName, contactName, email, phone, serviceType, message } = body

    const serviceRequest = await prisma.serviceRequest.create({
      data: {
        companyName,
        contactName,
        email,
        phone,
        serviceType,
        message,
      },
    })

    return NextResponse.json({ success: true, serviceRequest })
  } catch (error) {
    console.error("Error creating service request:", error)
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 })
  }
}

