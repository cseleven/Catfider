
import Head from 'next/head'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
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
            <div class="w-screen h-[171px] mx-28">
                <div class="flex my-8">
                    <Image class="pb-1" src={vectorHome} placeholder="blur" />
                    <p class="mx-2 text-sm font-normal text-gray-500">หน้าแรก</p>
                    <Image class="mx-4 pb-1" src={vectorInto} placeholder="blur" />
                    <p class="mx-2 text-sm font-normal text-gray-500">ค้นหาแมว</p>
                    <Image class="mx-4 pb-1" src={vectorInto} placeholder="blur" />
                    <p class="mx-2 text-sm font-normal text-gray-500">จองคิวแมว</p>
                </div>
                <p class="text-4xl text-black font-normal mt-8">จองคิวแมว</p>
                <div class="w-10/12 h-0.5 bg-gray-200 mt-8" />
            </div>

            {/*section 2*/}
            <div class="w-screen h-[560px] bg-light-salmon py-6">
                <div class="flex">
                    <div class="flex-none w-[276px] h-[490px] mx-28 ">
                        <div class="flex flex-col">
                            <div class="text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-bright-salmon to-salmon">จองคิวแมว</div>
                            <div class="text-sm font-light text-gray-600 pt-1.5">เลือกช่วงเวลาเพื่อไปนัดดูแมวกับทาง</div>
                            <div class="text-sm font-light text-gray-600">มูลนิธิหรือสถานสงเคราะห์</div>
                        </div>
                    </div>
                    <form onSubmit={fetchCat}>
                        <div class="flex-none w-[1004px] h-[490px] mx-28 ">
                            <div class="w-[803px] h-[407px] bg-white rounded-t shadow-md px-7 py-6 space-y-2.5">
                                <label class="block w-1/3">

                                    <span class=" flex text-gray-700">รหัสแมว
                                        <span class="text-error font-light">*</span>
                                    </span>
                                    <input
                                        id="cat_id"
                                        name="cat_id"
                                        type="text"
                                        class="
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            bg-gray-200
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-500
                                        "
                                        placeholder="1210"
                                    />
                                </label>
                                <label class="block w-2/3">
                                    <span class=" flex text-gray-700">ชื่อน้องแมว
                                        <span class="text-error font-light">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        class="
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            bg-gray-200
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-500
                                        "
                                        placeholder="มะลิ"
                                    />
                                </label>
                                <label class="block w-2/3">
                                    <span class=" flex text-gray-700">ชื่อมูลนิธิ
                                        <span class="text-error font-light">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        class="
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            bg-gray-200
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-500
                                        "
                                        placeholder="ชื่อมูลนิธิ"
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

                            <div class="w-[803px] h-[56px] bg-gray-50 rounded-b shadow-md ">
                                <div class="w-screen h-[30rem] py-3">
                                    <button type="submit"
                                        class="flex rounded-lg bg-salmon text-white text-xs font-normal px-6 py-2.5 ml-[700px]"
                                    >
                                        ยืนยัน
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="w-10/12 h-0.5 bg-gray-200 mx-28" />
            </div>
            <div class="w-screen h-[15rem]" />
        </div >
    )
}

