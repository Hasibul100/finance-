"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Details() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/count")
                setData(res.data.data)
            } catch (error) {
                console.error("❌ Error fetching data:", error)
            }
        }

        fetchData()
    }, [])

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">আয় ও ব্যয় Details</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">✅ আয় তালিকা</h2>
                {data.filter(item => item.method === "income").map((item, i) => (
                    <div key={i} className="p-2 border-b">
                        <p>উৎস: {item.source}</p>
                        <p>পরিমাণ: {item.amount}</p>
                        <p>ফান্ড: {item.fund}</p>
                        <p>তারিখ: {new Date(item.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">❌ ব্যয় তালিকা</h2>
                {data.filter(item => item.method === "expense").map((item, i) => (
                    <div key={i} className="p-2 border-b">
                        <p>উৎস: {item.source}</p>
                        <p>পরিমাণ: {item.amount}</p>
                        <p>ফান্ড: {item.fund}</p>
                        <p>তারিখ: {new Date(item.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
            <Link href={"/count"}><button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Go back
            </button> </Link>

        </div>
    )
}
