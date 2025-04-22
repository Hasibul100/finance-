"use client"

import axios from "axios";
import Link from "next/link"
import { useState } from "react"
function Page() {
    const initial = {
        method: "income",
        source: "",
        amount: "",
        fund: "cash",
        date: new Date().toISOString().split("T")[0]



    };
    const [income, setIncome] = useState(initial)
    const hndlSumbmit = (e) => {
        e.preventDefault()
        // console.log(income)
        console.log(`${location.origin}/count`)

        axios.post(`${location.origin}/api/count`,income)
        e.target.reset()
        setIncome(initial)

    }


    return (
        <div className=" m-5 flex items-center flex-col  place-content-center">

            <h3 className="text-xl font-semibold mb-3">আয় যোগ করুন</h3>
            <form onSubmit={hndlSumbmit} className="mb-8 w-xl">
                <select
                    value={income.method}
                    className="w-full mb-2 p-2 border rounded"
                    onChange={(e) => setIncome({ ...income, method: e.target.value })}
                    required
                >
                    <option value="income">আয়</option>
                    <option value="expense">ব্যয়</option>
                </select>

                <input
                    type="text"
                    value={income.source}
                    placeholder=" উৎস"
                    className="w-full mb-2 p-2 border rounded"
                    // value={income.source}
                    onChange={(e) => setIncome({ ...income, source: e.target.value })}
                    required
                />
                <input
                    type="number"
                    value={income.amount}
                    placeholder="পরিমাণ"
                    className="w-full mb-2 p-2 border rounded"
                    // value={income.amount}
                    onChange={(e) => setIncome({ ...income, amount: e.target.value })}
                    required
                />
                <input
                    type="date"
                    value={income.date}
                    className="w-full mb-2 p-2 border rounded"
                    // value={income.amount}
                    onChange={(e) => setIncome({ ...income, date: e.target.value })}
                    required
                />
                <select
                    value={income.fund}
                    className="w-full mb-2 p-2 border rounded"
                    // value={income.fund}
                    onChange={(e) => setIncome({ ...income, fund: e.target.value })}
                >

                    <option value="cash">হ্যান্ড ক্যাশ</option>
                    <option value="bkash">বিকাশ</option>
                    <option value="dbbl">ডাচ-বাংলা</option>
                    <option value="islamic">ইসলামী</option>
                </select>
                {income.method === "income" ? <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    আয় যোগ করুন
                </button> : <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
                    ব্যয় যোগ করুন
                </button>}

            </form>
            {/* 
            <h3 className="text-xl font-semibold mb-3">ব্যয় যোগ করুন</h3>
            <form className="w-xl">
                <input
                    type="text"
                    placeholder="ব্যয়ের উদ্দেশ্য"
                    className="w-full mb-2 p-2 border rounded"
                    // value={expense.purpose}
                    onChange={(e) => setExpense({ ...expense, purpose: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="পরিমাণ"
                    className="w-full mb-2 p-2 border rounded"
                    // value={expense.amount}
                    onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
                    required
                />
                <select
                    className="w-full mb-2 p-2 border rounded"
                    // value={expense.fund}
                    onChange={(e) => setExpense({ ...expense, fund: e.target.value })}
                >
                    <option value="cash">হ্যান্ড ক্যাশ</option>
                    <option value="bkash">বিকাশ</option>
                    <option value="dbbl">ডাচ-বাংলা</option>
                    <option value="islamic">ইসলামী</option>
                </select>
                <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
                    ব্যয় যোগ করুন
                </button>
            </form> */}
            <Link href={"count/details"} className="w-sm mt-5 text-center   bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Details of আয় ব্যয়
            </Link>

        </div>
    )
}

export default Page