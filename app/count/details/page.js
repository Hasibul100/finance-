"use client"
import { HiArchiveBoxXMark, HiMiniListBullet, HiMiniPencil } from "react-icons/hi2";
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Details() {
    const [data, setData] = useState([])
    const [showMenu, setShowMenu] = useState(false);

    const URL = "/api/count"
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            const res = await axios.get(URL)
            setData(res.data.data)
        } catch (error) {
            console.error("❌ Error fetching data:", error)
        }
    }
    const handlDelet = async (id) => {
       await axios.delete(`${URL}/${id}`)
        console.log(id)
        fetchData()
    }
    const handlEdite = (id) => {
        console.log(id)
    }

    return (
        <div onClick={(e) => {
            e.stopPropagation()
            setShowMenu(false)
        }} className="p-5 w-sm text-center">
            <h1 className="text-2xl font-bold mb-4">আয় ও ব্যয় Details</h1>

            <div className=" mb-6">
                <h2 className="text-xl font-semibold mb-2">✅ আয় তালিকা</h2>
                {data.filter(item => item.method === "income").map((item, i) => (

                    <div key={i} className="p-2 flex flex-row gap-3 justify-items-stretch  border-b">
                        <div>
                            <p>উৎস: {item.source}</p>
                            <p>পরিমাণ: {item.amount}</p>
                            {/* <p>ফান্ড: {item.fund}</p>
                            <p>তারিখ: {new Date(item.date).toLocaleDateString()}</p> */}
                        </div>
                        <div className="relative right-0 inline-block">
                            <menu>
                                {/* Toggle Button */}
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    setShowMenu(!showMenu)
                                }}>
                                    <HiMiniListBullet className="text-2xl" />
                                </button>

                                {/* Hidden/Shown Buttons */}
                                {showMenu && (
                                    <div className="absolute right-0 bg-white shadow-lg rounded p-2 z-10">
                                        <button onClick={() => handlDelet(item._id)} className="m-2 text-2xl text-red-600 hover:text-red-800">
                                            <HiArchiveBoxXMark />
                                        </button>
                                        <button onClick={() => handlEdite(item._id)} className="m-2 text-2xl hover:text-blue-600">
                                            <HiMiniPencil />
                                        </button>
                                    </div>
                                )}
                            </menu>
                        </div>

                    </div>
                ))}
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">❌ ব্যয় তালিকা</h2>
                {data.filter(item => item.method === "expense").map((item, i) => (
                    <div key={i} className="p-2 border-b">
                        <p>উৎস: {item.source}</p>
                        <p>পরিমাণ: {item.amount}</p>
                        {/* <p>ফান্ড: {item.fund}</p>
                        <p>তারিখ: {new Date(item.date).toLocaleDateString()}</p> */}
                        <div className="relative right-0 inline-block">
                            <menu>
                                {/* Toggle Button */}
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    setShowMenu(!showMenu)
                                }}>
                                    <HiMiniListBullet className="text-2xl" />
                                </button>

                                {/* Hidden/Shown Buttons */}
                                {showMenu && (
                                    <div className="absolute right-0 bg-white shadow-lg rounded p-2 z-10">
                                        <button onClick={() => handlDelet(item._id)} className="m-2 text-2xl text-red-600 hover:text-red-800">
                                            <HiArchiveBoxXMark />
                                        </button>
                                        <button onClick={() => handlEdite(item._id)} className="m-2 text-2xl hover:text-blue-600">
                                            <HiMiniPencil />
                                        </button>
                                    </div>
                                )}
                            </menu>
                        </div>

                    </div>

                ))}
            </div>
            <Link href={"/count"}><button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Go back
            </button> </Link>

        </div>
    )
}
