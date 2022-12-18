import Head from 'next/head'
import Image from 'next/image'
import addProfile from '../../public/add-cat/add-profile.png'
import changeProfile from '../../public/add-cat/change-profile.png'
import { useSession, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'


export default function AddCat() {
    //setup 
    const user = useUser()
    const session = useSession()
    const [loading, setLoading] = useState(true)
    const [cat, setCat] = useState(null)
    // const [id, setId] = useState(0)

    useEffect(() => {
        catExample()
    }, [])



    const catExample = async () => {
        var raw = JSON.stringify({
            //"cat_id": 5,
            "shelter_id": 1,
            "cat_name": "ขนมจีน",
            "sex": "female",
            "breed": "ผสม",
            "color": "ขาว",
            "sterile": false,
            "vaccine": true,
            "detail": "น้องเป็นแมวอารมณ์ดี เป็นมิตรกับสิ่งแวดล้อม",
            "cat_picture": "www.google.com",
            "status": false,
            "age": 2


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
            let response = await fetch("/api/cat/shelterview/addCat", requestOptions);
            let data = await response.json();
            console.log("response : " + JSON.stringify(data));
        } finally {
            setLoading(false);
        }
    };




    return (
        <div class="container">
            <Head>
                <title>Cat Finder</title>
                <meta name="description" content="create by eleven" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*section 1*/}
            <div class="w-screen h-[171px]">
                <div class="flex my-8 mx-28">
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                                <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    หน้าแรก
                                </a>
                            </li>
                            <li aria-label="Breadcrumb">
                                <div class="flex items-center">
                                    <a href="/shelter/my-cat" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        แมวของฉัน
                                    </a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">ลงทะเบียนแมว</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <p class="text-4xl text-black font-normal mt-8 mx-28">ลงทะเบียนแมว</p>
                <div class="w-10/12 h-0.5 bg-gray-200 mt-8 mx-28" />
            </div>


            {/*section 2*/}

            <div class="w-screen h-[1350px] bg-light-salmon py-6">
                <div class="flex">
                    <div class="ml-28">
                        <div class="text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-bright-salmon to-salmon">ข้อมูลแมว</div>
                        <div class="text-sm font-light text-gray-600 pt-1.5">ข้อมูลเบื้องต้นของแมว</div>
                        <div class="text-sm font-light text-gray-600">สำหรับแสดงส่วนของโปรไฟล์</div>
                    </div>

                    <form action="#" method="POST">
                        <div class="w-[803px] h-[1200px] bg-white rounded-t shadow-md px-7 py-6 space-y-3 ml-28">
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
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                    placeholder="โปรดระบุชื่อ"
                                />
                            </label>
                            <div class="flex">
                                <label class="block w-2/12">
                                    <span class=" flex text-gray-700">อายุ
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
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-500
                                        "
                                    />
                                </label>
                                <label class="block pl-5 pt-5">
                                    <select
                                        class="
                                            block
                                            w-full
                                            mt-1
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            text-gray-900 
                                            font-normal
                                        "
                                    >
                                        <option>ปี</option>
                                        <option>เดือน</option>
                                    </select>
                                </label>
                            </div>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">เพศ
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
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
                                    <option>เลือกเพศ</option>
                                    <option>เพศผู้</option>
                                    <option>เพศเมีย</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">สายพันธุ์
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
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
                                    <option>เลือกสายพันธุ์</option>
                                    <option>ไทย</option>
                                    <option>ผสม</option>
                                    <option>สีสวาด</option>
                                    <option>ขาวมณี</option>
                                    <option>วิเชียรมาศ</option>
                                    <option>สก็อตติช โฟลด์</option>
                                    <option>อเมริกัน ชอร์ตแฮร์</option>
                                    <option>บริติช ชอร์ตแฮร์</option>
                                    <option>เอ็กโซติก ชอร์ตแฮร์</option>
                                    <option>เปอร์เซีย</option>
                                    <option>แร็กดอลล์</option>
                                    <option>สฟิงซ์</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">สี หรือ ลาย
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
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
                                    <option>เลือกสี หรือ ลาย</option>
                                    <option>ดำ</option>
                                    <option>ส้ม</option>
                                    <option>ขาว</option>
                                    <option>ครีม</option>
                                    <option>เทา</option>
                                    <option>น้ำตาล</option>
                                    <option>ทองแดง</option>
                                    <option>ขาวดำ</option>
                                    <option>ขาวส้ม</option>
                                    <option>ขาวเทา</option>
                                    <option>ขาวครีม</option>
                                    <option>สองสี</option>
                                    <option>สลิด</option>
                                    <option>สามสี</option>
                                    <option>เปรอะ</option>
                                    <option>แต้ม</option>
                                    <option>แต้มเปรอะ</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">การฉีดวัคซีน
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
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
                                    <option>เลือกประวัติ</option>
                                    <option>ซีดวัคซีนแล้ว</option>
                                    <option>ยังไม่ซีดวัคซีน</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">ประวัติการทำหมัน
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
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
                                    <option>เลือกประวัติ</option>
                                    <option>ทำหมันแล้ว</option>
                                    <option>ยังไม่ทำหมัน</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">โรคประจำตัว
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
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
                                    <option>เลือกโรคประจำตัว</option>
                                    <option>ไม่มี</option>
                                    <option>โรคติดเชื้อไวรัส(หวัดแมว)</option>
                                    <option>โรคไข้หัดแมว</option>
                                    <option>โรคติดเชื้อไวรัส(หวัดแมว)</option>
                                    <option>โรคมะเร็งเม็ดโลหิตขาว(FeLV)</option>
                                    <option>โรคเอดส์แมว(FIV)</option>
                                    <option>โรคเยื่อบุช่องท้องอักเสบ(FIP)</option>
                                    <option>โรคปอดบวม</option>
                                    <option>โรคผิวหนัง</option>
                                    <option>อื่นๆ (กรุณาระบุในประวัติ)</option>
                                </select>
                            </label>

                            <label class="block w-full">
                                <span class="text-gray-700">ประวัติโดยย่อ</span>
                                <input
                                    type="text"
                                    class="
                                            block
                                            w-full
                                            h-20
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-900
                                        "
                                />
                            </label>
                            <span class="text-sm text-gray-500 font-light">เล่าเกี่ยวกับน้องแมวตัวนี้ เช่น นิสัย ของชอบ อาการบาดเจ็บ ประวัติการถ่ายพยาธิ เป็นต้น</span>
                            <span class="flex text-gray-700 text-sm text-normal pt-3">รูปภาพแมว
                                <span class="text-error pl-2">ขนาด 331 * 390 px</span>
                            </span>
                            <div class="flex w-full">
                                <Image class="pt-1 pb-1" src={changeProfile} placeholder="blur" />
                                <label for="dropzone-file" class="bg-white font-normal border border-gray-300 text-gray-700 text-center rounded-md h-[36px] text-sm py-2 px-5 mx-6 my-2">
                                    <div class="flex flex-col items-center justify-center pb-6">
                                        Change
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>
                            <div class="flex items-center justify-center w-full">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <Image class="mx-auto pt-5" src={addProfile} placeholder="blur" />
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="text-indigo-600">Upload a file</span> or drag and drop</p>
                                        <span class="text-gray-500 text-xs font-light">PNG, JPG, GIF up to 10MB</span>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>
                        </div>
                        <div class="w-[803px] h-[56px] bg-gray-50 rounded-b shadow-md ml-28">
                            <div class="w-screen h-[30rem] py-3">
                                <button type="button"
                                    class="flex rounded-lg bg-salmon text-white rounded text-xs font-normal px-6 py-2.5 ml-[700px]">
                                    ยืนยัน
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="w-10/12 h-0.5 bg-gray-200 mx-28 my-7" />
            </div>
            <div class="w-screen h-[20rem]" />
        </div >
    )
}

