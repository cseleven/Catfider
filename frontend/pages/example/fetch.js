import { useEffect, useState } from 'react'
import Loading from '../../components/loading';

export default function Fetch(){

    const [loading,setLoading]=useState(true);
    const [topic,setTopic]=useState(null);

    useEffect(() => {
       fetchExample()
    }, [])

    const fetchExample = async () => {
        try {
            setLoading(true)
            let response = await fetch("/api/getexample");
            let data = await response.json();
            console.log("response : " + JSON.stringify(data));
            setTopic(data);
        } finally {
            setLoading(false);
        }
    };

    const postExample = async () => {
        var raw = JSON.stringify({
            "username": "555",
            "password": "666"
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
            let response = await fetch("/api/postexample",requestOptions);
            data = await response.json();
            console.log("response : " + JSON.stringify(data));
        } finally {
            setLoading(false);
        }
    };

    return(
        <div class="h-[87vh]">
        {loading ? (
            <Loading/>
        ):(
        <div>
        <div class="w-screen h-[20rem]">
            <p class="text-[48px] font-normal text-center pt-[7rem]">ตัวอย่างฟอร์ม</p>
            <p class="text-[20px] text-iris font-normal text-center pt-2">สำหรับผู้รับอุปการะ</p>
        </div>
            <div class="bg-gray-200">
                <div class="container mx-auto flex justify-around">
                    <div class="w-1/3 pt-9">
                        <h4 class="font-inter font-medium">User and Password</h4>
                        <h6 class="font-light pt-2">email และ password สำหรับเข้าสู่ระบบ</h6>
                    </div>
                    <div class="w-3/5 my-8 bg-white shadow rounded-t-md">
                        <div class="p-7 max-w-lg">
                            <div class="grid grid-cols-1 gap-6 pb-5">
                                <label class="block">
                                    <span class="font-inter text-gray-700">{topic.topic1}</span>
                                    <input
                                        name="email"
                                        id="email"
                                        type="text"
                                        class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                        placeholder=""
                                    />
                                </label>
                                <label class="block">
                                    <span class="font-inter text-gray-700">{topic.topic2}</span>
                                    <input
                                        name="password"
                                        id="password"
                                        type="password"
                                        class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                        placeholder=""
                                    />
                                </label>
                                <label class="block">
                                    <span class="font-inter text-gray-700">{topic.topic3}</span>
                                    <input
                                        name="confirm_password"
                                        id="confirm_password"
                                        type="password"
                                        class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                        placeholder=""
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto flex justify-end">
                <button type="button" onClick={()=>postExample()} class="rounded-[4px] bg-iris text-[18px] text-white font-normal text-center py-2.5 px-5 mt-8 mr-7">ถัดไป</button>
            </div>
        </div>
      )}
    </div>
    )
}