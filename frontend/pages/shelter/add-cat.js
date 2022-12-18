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



    const catExample = async (e) => {
        var raw = JSON.stringify({
            //"cat_id": 5,
            "login_id": user.id,
            "cat_name": e.target.cat_name.value,
            "sex": e.target.sex.value,
            "breed": e.target.breed.value,
            "color": e.target.color.value,
            "sterile": e.target.sterile.value,
            "vaccine": e.target.vaccine.value,
            "detail": e.target.detail.value,
            "cat_picture": "www.google.com",
            "status": e.target.status.value,
            "age": e.target.age.value,
            "age_unit": e.target.age_unit.value,
            "congenital_disease": e.target.congenital_disease.value
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

                    <form onSubmit={catExample}>
                        <div class="w-[803px] h-[1200px] bg-white rounded-t shadow-md px-7 py-6 space-y-3 ml-28">
                            <label class="block w-2/3">
                                <span class=" flex text-gray-700">ชื่อน้องแมว
                                    <span class="text-error font-light">*</span>
                                </span>
                                <input
                                    id="cat_name"
                                    name="cat_name"
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
                                        id="age"
                                        name="age"
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
                                        id="age_unit"
                                        name="age_unit"
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
                                        <option value="ปี">ปี</option>
                                        <option value="เดือน">เดือน</option>
                                    </select>
                                </label>
                            </div>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">เพศ
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
                                    id="sex"
                                    name="sex"
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
                                    <option value="" selected disabled hidden>เลือกเพศ</option>
                                    <option value="female">เพศผู้</option>
                                    <option value="male">เพศเมีย</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">สายพันธุ์
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
                                    id="breed"
                                    name="breed"
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
                                    <option value="" selected disabled hidden>เลือกสายพันธุ์</option>
                                    <option value="ไทย">ไทย</option>
                                    <option value="ผสม">ผสม</option>
                                    <option value="สีสวาด">สีสวาด</option>
                                    <option value="ขาวมณี">ขาวมณี</option>
                                    <option value="วิเชียรมาศ">วิเชียรมาศ</option>
                                    <option value="สก็อตติช โฟลด์">สก็อตติช โฟลด์</option>
                                    <option value="อเมริกัน ชอร์ตแฮร์">อเมริกัน ชอร์ตแฮร์</option>
                                    <option value="บริติช ชอร์ตแฮร์">บริติช ชอร์ตแฮร์</option>
                                    <option value="เอ็กโซติก ชอร์ตแฮร์">เอ็กโซติก ชอร์ตแฮร์</option>
                                    <option value="เปอร์เซีย">เปอร์เซีย</option>
                                    <option value="แร็กดอลล์">แร็กดอลล์</option>
                                    <option value="สฟิงซ์">สฟิงซ์</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">สี หรือ ลาย
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
                                    id="color"
                                    name="color"
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
                                    <option value="" selected disabled hidden>เลือกสี หรือ ลาย</option>
                                    <option value="ดำ">ดำ</option>
                                    <option value="ส้ม">ส้ม</option>
                                    <option value="ขาว">ขาว</option>
                                    <option value="ครีม">ครีม</option>
                                    <option value="เทา">เทา</option>
                                    <option value="น้ำตาล">น้ำตาล</option>
                                    <option value="ทองแดง">ทองแดง</option>
                                    <option value="ขาวดำ">ขาวดำ</option>
                                    <option value="ขาวส้ม">ขาวส้ม</option>
                                    <option value="ขาวเทา">ขาวเทา</option>
                                    <option value="ขาวครีม">ขาวครีม</option>
                                    <option value="สองสี">สองสี</option>
                                    <option value="สลิด">สลิด</option>
                                    <option value="สามสี">สามสี</option>
                                    <option value="เปรอะ">เปรอะ</option>
                                    <option value="แต้ม">แต้ม</option>
                                    <option value="แต้มเปรอะ">แต้มเปรอะ</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">การฉีดวัคซีน
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
                                    id="vaccine"
                                    name="vaccine"
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
                                    <option value="" selected disabled hidden>เลือกประวัติ</option>
                                    <option value={true}>ซีดวัคซีนแล้ว</option>
                                    <option value={false}>ยังไม่ซีดวัคซีน</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">ประวัติการทำหมัน
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
                                    id="sterile"
                                    name="sterile"
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
                                    <option value="" selected disabled hidden>เลือกประวัติ</option>
                                    <option value={true}>ทำหมันแล้ว</option>
                                    <option value={false}>ยังไม่ทำหมัน</option>
                                </select>
                            </label>
                            <label class="block w-3/6">
                                <span class=" flex text-gray-700">โรคประจำตัว
                                    <span class="text-error font-light">*</span>
                                </span>
                                <select
                                    id="congenital_disease"
                                    name="congenital_disease"
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
                                    <option value="" selected disabled hidden>เลือกโรคประจำตัว</option>
                                    <option value="ไม่มี">ไม่มี</option>
                                    <option value="โรคติดเชื้อไวรัส(หวัดแมว)">โรคติดเชื้อไวรัส(หวัดแมว)</option>
                                    <option value="โรคไข้หัดแมว">โรคไข้หัดแมว</option>
                                    <option value="โรคมะเร็งเม็ดโลหิตขาว(FeLV)">โรคมะเร็งเม็ดโลหิตขาว(FeLV)</option>
                                    <option value="โรคเอดส์แมว(FIV)">โรคเอดส์แมว(FIV)</option>
                                    <option value="โรคเยื่อบุช่องท้องอักเสบ(FIP)">โรคเยื่อบุช่องท้องอักเสบ(FIP)</option>
                                    <option value="โรคปอดบวม">โรคปอดบวม</option>
                                    <option value="โรคผิวหนัง">โรคผิวหนัง</option>
                                    <option value="อื่นๆ (ระบุในประวัติ)">อื่นๆ (กรุณาระบุในประวัติ)</option>
                                </select>
                            </label>

                            <label class="block w-full">
                                <span class="text-gray-700">ประวัติโดยย่อ</span>
                                <input
                                    id="detail"
                                    name="detail"
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
                                    <input id="cat_picture" name="cat_picture" type="file" class="hidden" />
                                </label>
                            </div>
                            <div class="flex items-center justify-center w-full">
                                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <Image class="mx-auto pt-5" src={addProfile} placeholder="blur" />
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="text-indigo-600">Upload a file</span> or drag and drop</p>
                                        <span class="text-gray-500 text-xs font-light">PNG, JPG, GIF up to 10MB</span>
                                    </div>
                                    <input id="cat_picture" name="cat_picture" type="file" class="hidden" />
                                </label>
                            </div>
                        </div>
                        <div class="w-[803px] h-[56px] bg-gray-50 rounded-b shadow-md ml-28">
                            <div class="w-screen h-[30rem] py-3">
                                <button type="submit"
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

