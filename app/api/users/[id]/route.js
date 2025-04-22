import { NextResponse } from "next/server"
import User from "../schema"

export async function PUT(req, { params }) {
    console.log(req.url)
    const body = await req.json()
    const { email } = params
    await User.findOneAndUpdate(email, body)

    console.log(body)

    return new NextResponse(JSON.stringify({ message: "Hello word to next api" }), {
        status: 200,
        headers: { "content-type": "application/json" }
    })
} 