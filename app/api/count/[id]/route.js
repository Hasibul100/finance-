import { NextResponse } from "next/server";
import Count from "../schema";

export async function DELETE(req, { params}) {
    const {id}= await params
    try {
        const result = await Count.findByIdAndDelete(id)
        console.log('data is deleted successfuly')
        return NextResponse.json({ message: "✅ Saved successfully", result }, { status: 200 });
    } catch (error) {
        console.log(error)
    }
}