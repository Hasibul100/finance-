import { NextResponse } from "next/server";
import User from "./schema";
import mongoConnect from "@/lib/mongodb";

export async function GET(req) {
    console.log(req.url)
const data = await User.find()
    return new NextResponse(JSON.stringify({ message: "Hello word to next api" ,user:data}), {
        status: 200,
        headers: { "content-type": "application/json" }
    })
}

export async function POST(req) {
    await mongoConnect()
    const { name, email } = await req.json()
    const newUser = await User.create({ name, email })
    console.log(req.json)
    // await newUser.save()

    // console.log("user is added", newUser)

    return new NextResponse(JSON.stringify({ message: "Hello word to next api post" }), {
        status: 200,
        headers: { "content-type": "application/json" }
    })
}

