import Head from 'next/head'
import Image from 'next/image'
import vectorHome from '../../public/add-cat/vector-home.png'
import vectorInto from '../../public/add-cat/vector-into.png'
import addProfile from '../../public/add-cat/add-profile.png'
import changeProfile from '../../public/add-cat/change-profile.png'

export default function AddCat() {
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
                    <p class="mx-2 text-sm font-normal text-gray-500">ลงทะเบียนแมว</p>
                </div>
                <p class="text-4xl text-black font-normal mt-8">ลงทะเบียนแมว</p>
                <div class="w-10/12 h-0.5 bg-gray-200 mt-8" />
            </div>

            {/*section 2*/}

            <div class="w-screen h-[1280px] bg-light-salmon py-6">
                <div class="flex">
                    <div class="flex-none w-[200px] h-[490px] mx-28 ">
                        <div class="flex flex-col">
                            <div class="text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-b from-bright-salmon to-salmon">ข้อมูลแมว</div>
                            <div class="text-sm font-light text-gray-600 pt-1.5">ข้อมูลเบื้องต้นของแมว</div>
                            <div class="text-sm font-light text-gray-600">สำหรับแสดงส่วนของโปรไฟล์</div>
                        </div>
                    </div>

                    <div class="flex-none w-[800px] h-[1200px] mx-28 ">
                        <form action="#" method="POST">
                            <div class="w-[803px] h-[1137px] bg-white rounded-t shadow-md px-7 py-6 space-y-3">
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
                                <div class="flex">
                                    <Image class="" src={changeProfile} placeholder="blur" />
                                    <button type="button"
                                        class="flex bg-white font-normal border border-gray-300 text-gray-700 text-center rounded-md h-[36px] text-sm py-2 px-5 mx-6 my-2"
                                        onClick={() => supabase.auth.signOut()}>
                                        Change
                                    </button>
                                </div>


                                <label class="block py-4">
                                    <div
                                        class="
                                            block
                                            w-full
                                            h-36
                                            rounded-md
                                            border-gray-300
                                            border-dashed 
                                            border-2
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                            text-center
                                        "
                                    >
                                        <Image class="mx-auto pt-5" src={addProfile} placeholder="blur" />
                                        <div class="flex font-normal text-sm px-64 pt-2">
                                            <button type="button"
                                                class="text-indigo-600"
                                                onClick={() => supabase.auth.signOut()}>
                                                Upload a file
                                            </button>
                                            <span class="text-gray-600 pl-2">or drag and drop</span>
                                        </div>
                                        <span class="text-gray-500 text-xs font-light">PNG, JPG, GIF up to 10MB</span>
                                    </div>
                                </label>
                            </div>
                        </form>

                        <div class="w-[803px] h-[56px] bg-gray-50 rounded-b shadow-md ">
                            <div class="w-screen h-[30rem] py-3">
                                <button type="button"
                                    class="flex rounded-lg bg-salmon text-white rounded text-xs font-normal px-6 py-2.5 ml-[700px]"
                                    onClick={() => supabase.auth.signOut()}>
                                    ยืนยัน
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-10/12 h-0.5 bg-gray-200 mx-28 my-4" />
            </div>
            <div class="w-screen h-[20rem]" />
        </div >
    )
}

