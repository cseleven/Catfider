import Image from 'next/image'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useUser } from '@supabase/auth-helpers-react'

export default function Queue() {
    //setup
    const user = useUser()
    const session = useSession()
    const [loading, setLoading] = useState(true)
    const [cat, setCat] = useState(null)
    const [input, setInput] = useState(null)


    useEffect(() => {

    }, [session])

    //fetch data
    const fetchCat = async (e) => {

        var raw = JSON.stringify({

            "cat_id": e.target.cat_id.value,
            "user_id": user.id,
            "queue_date": e.target.queue_date.value,
            "queue_time": e.target.queue_time.value
        });

        var myheader = {
            'Content-Type': 'application/json'
        };


        var requestOptions = {
            method: 'POST',
            headers: myheader,
            body: raw,
            redirect: 'follow'
        };

        try {
            setLoading(true);
            let response = await fetch("/api/queue/createQueue", requestOptions);
            let data = await response.json();
            console.log("response : " + JSON.stringify(data));
        } finally {
            setLoading(false);
        }

    };

    const updateInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div class="container">
            <Head>
                <title>Cat Finder</title>
                <meta name="description" content="create by eleven" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*section 1*/}
            <div class="w-screen h-[171px]">
                <div class="flex my-8">
                    <nav class="flex mx-28" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                                <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    หน้าแรก
                                </a>
                            </li>
                            <li aria-label="Breadcrumb">
                                <div class="flex items-center">
                                    <a href="/all-cat" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        ค้นหาแมว
                                    </a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">จองคิวแมว</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <p class="text-4xl text-black font-normal mt-8 mx-28">จองคิวแมว</p>
                <div class="w-10/12 h-0.5 bg-gray-200 mt-8 mx-28" />
            </div>

            {/*section 2*/}
            <div class="w-screen h-[560px] bg-light-salmon py-6">
                <div class="flex">
                    <div class="ml-28">
                        <div class="text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-bright-salmon to-salmon">จองคิวแมว</div>
                        <div class="text-sm font-light text-gray-600 pt-1.5">เลือกช่วงเวลาเพื่อไปนัดดูแมวกับทาง</div>
                        <div class="text-sm font-light text-gray-600">มูลนิธิหรือสถานสงเคราะห์</div>

                    </div>
                    <form onSubmit={fetchCat}>
                        <div class="w-[803px] h-[407px] bg-white rounded-t shadow-md px-7 py-6 space-y-2.5 ml-28">
                            <label class="block w-1/3">
                                <span class=" flex text-gray-700">รหัสแมว
                                    <span class="text-error font-light">*</span>
                                </span>
                                <input
                                    id="cat_id"
                                    name="cat_id"
                                    type="text"
                                    class="text-gray-500 text-base font-normal
                                        block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            bg-gray-200
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value="1210"
                                    disabled readonly
                                />
                            </label>
                            <label class="block w-2/3">
                                <span class=" flex text-gray-700">ชื่อน้องแมว
                                    <span class="text-error font-light">*</span>
                                </span>
                                <input
                                    type="text"
                                    class="text-gray-500 text-base font-normal
                                        w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            bg-gray-200
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value="มะลิ"
                                    disabled readonly
                                />
                            </label>
                            <label class="block w-2/3">
                                <span class=" flex text-gray-700">ชื่อมูลนิธิ
                                    <span class="text-error font-light">*</span>
                                </span>
                                <input
                                    type="text"
                                    class="text-gray-500 text-base font-normal
                                        w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            bg-gray-200
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value="ชิ่อมูลนิธิ"
                                    disabled readonly
                                />
                            </label>

                            <label class="block">
                                <span class=" flex text-gray-700">เลือกวัน
                                    <span class="text-error font-light">*</span>
                                </span>
                                <input
                                    id="queue_date"
                                    name="queue_date"
                                    type="date"
                                    class="
                                        block
                                        w-full
                                        rounded-md
                                        border-gray-300
                                        shadow-sm
                                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        font-normal
                                        placeholder-gray-500
                                        "
                                    placeholder="เลือกวัน"
                                />
                            </label>
                            <label class="block mr-64">
                                <span class=" flex text-gray-700">เลือกเวลา
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
                                    id="queue_time"
                                    name="queue_time"
                                    class="
                                            block
                                            w-full
                                            mt-1
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            text-gray-500 
                                            font-normal
                                        "
                                >
                                    <option>เลือกช่วงเวลา</option>
                                    <option value="9.00-10.00">9.00-10.00 น.</option>
                                    <option value="10.00-11.00">10.00-11.00 น.</option>
                                    <option value="11.00-12.00">11.00-12.00 น.</option>
                                    <option value="14.00-15.00">14.00-15.00 น.</option>
                                </select>
                            </label>
                        </div>
                        <div class="w-[803px] h-[56px] bg-gray-50 rounded-b shadow-md ml-28">
                            <div class="w-screen h-[30rem] py-3">
                                <button type="submit"
                                    class="flex bg-salmon text-white rounded text-xs font-normal px-6 py-2.5 ml-[700px]"
                                >
                                    ยืนยัน
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
                <div class="w-10/12 h-0.5 bg-gray-200 mt-7 ml-28" />
            </div>
            <div class="w-screen h-[15rem]" />
        </div >
    )
}
