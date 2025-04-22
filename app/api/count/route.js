import { NextResponse } from "next/server";
import Count from "./schema";
import mongoConnect from "@/lib/countdb";

export async function GET(req) {
  mongoConnect()
  const data = await Count.find()

  return new NextResponse(JSON.stringify({
    message: "stutas true",
    data: data
  }), {
    status: 200,
    headers: { "content-type": "application/json" }
  })

}


export async function POST(req) {
  try {
    await mongoConnect();

    const data = await req.json();
    console.log("📦 Received:", data);

    const newEntry = new Count(data);
    const result = await newEntry.save();

    return NextResponse.json({ message: "✅ Saved successfully", result }, { status: 200 });
  } catch (err) {
    console.error("❌ Error saving to DB:", err);
    return NextResponse.json({ error: "Server Error", details: err.message }, { status: 500 });
  }
}