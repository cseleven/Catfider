import Head from 'next/head'
import Image from 'next/image'
import vectorprinter from '../public/form-adopt/vector-printer.png'

export default function FormAdopt() {
    return (
        <div class="container">
            <Head>
                <title>Cat Finder</title>
                <meta name="description" content="create by eleven" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            {/*form*/}
            <form action="#" method="POST">

                {/*section 1*/}
                <div class="w-screen h-[22rem]">
                    <p class="text-black text-[48px] font-normal text-center pt-[97px]">แบบฟอร์มขอรับอุปการะแมว</p>
                    <p class="text-salmon text-[24px] font-normal text-center pt-[29px]">กรุณากด print เอกสารเพื่อไปยื่นกับทางเจ้าหน้าที่มูลนิธิ</p>
                    <div class="flex justify-end">
                        <label class="block mr-64">
                            <span class="flex text-black/[0.7] text-[12px] font-normal ">รหัสแมวที่ต้องการอุปการะ
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
                                            text-gray-900 font-light
                                        "
                            >
                                <option>โปรดระบุ</option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Maybe</option>
                            </select>

                        </label>
                    </div>
                </div>

                {/*section 2*/}
                <div class="w-screen h-[180rem] bg-light-salmon">
                    <div class="py-12  mx-auto max-w-7xl">
                        <p class="text-[24px] font-normal text-transparent bg-clip-text bg-gradient-to-b from-bright-salmon to-salmon">ตอนที่ 1 ข้อมูลผู้รับอุปการะ</p>
                        <p class="text-black text-[24px] font-normal">1.1 ข้อมูลส่วนตัว</p>
                        <div class="mt-8 ">
                            <div class="grid grid-cols-1 gap-6">
                                <div class="flex space-x-7">
                                    <label class="block">
                                        <span class="text-black/[0.7] font-normal">คำนำหน้า</span>
                                        <select
                                            class="
                                            block
                                            w-full
                                            mt-1
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            text-gray-900 font-light
                                        "
                                        >
                                            <option>นาย</option>
                                            <option>นาง</option>
                                            <option>นางสาว</option>
                                        </select>
                                    </label>
                                    <label class="block basis-1/4">
                                        <span class=" flex text-gray-700 ">ชื่อจริง
                                            <span class="text-error font-light">*</span>
                                        </span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                            placeholder="ชื่อจริง"
                                        />
                                    </label>
                                    <label class="block basis-1/4">
                                        <span class=" flex text-gray-700 ">นามสกุล
                                            <span class="text-error font-light">*</span>
                                        </span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                            placeholder="นามสกุล"
                                        />
                                    </label>
                                    <label class="block basis-1/6">
                                        <span class=" flex text-gray-700 ">ชื่อเล่น</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                            placeholder="ชื่อเล่น"
                                        />
                                    </label>
                                    <label class="block basis-1/12">
                                        <span class=" flex text-gray-700 ">อายุ</span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                            placeholder="อายุ"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-14">
                                    <label class="block basis-2/6">
                                        <span class=" flex text-gray-700">เลขที่ตามบัตรประจำตัวประชาชน
                                            <span class="text-error font-light">*</span>
                                        </span>
                                        <input
                                            type="text"
                                            class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                            placeholder="เลขบัตรประชาชน 13 หลัก"
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="text-black/[0.7] font-normal">เพศ</span>
                                        <select
                                            class="
                                            block
                                            w-full
                                            mt-1
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            text-gray-900 font-light
                                        "
                                        >
                                            <option>ชาย</option>
                                            <option>หญิง</option>
                                            <option>ไม่ระบุ</option>
                                        </select>
                                    </label>
                                </div>
                                <div class="flex space-x-7">
                                    <span class=" flex text-gray-700 pt-2">ที่อยู่อาศัยปัจจุบัน
                                        <span class="text-error font-light">*</span>
                                    </span>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">บ้านส่วนตัว</span>
                                        </label>
                                    </div>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">บ้านเช่า</span>
                                        </label>
                                    </div>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">อพาร์ทเมนท์</span>
                                        </label>
                                    </div>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">คอนโด</span>
                                        </label>
                                    </div>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">อื่นๆ</span>
                                        </label>
                                    </div>
                                    <label class="block basis-1/4">
                                        <input
                                            type="text"
                                            class="
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 
                                            focus:ring 
                                            focus:ring-indigo-200 
                                            focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                            placeholder="อื่นๆ"
                                        />
                                    </label>
                                </div>
                                <span class=" flex text-gray-700">อาศัยอยู่กับ
                                    <span class="text-error font-light">*</span>
                                </span>
                                <div class="block ml-36 font-light">
                                    <label class="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                            checked
                                        />
                                        <span class="ml-2">คนเดียว</span>
                                    </label>
                                </div>
                                <div class="block ml-36 font-light">
                                    <label class="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                            checked
                                        />
                                        <span class="ml-2">ครอบครัว</span>
                                    </label>
                                </div>
                                <div class="flex space-x-7 ml-60">
                                    <label class="block basis-1/4">
                                        <span class=" flex text-gray-700">จำนวนสมาชิก (รวมตัวเอง)
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
                                            placeholder="จำนวนสมาชิก"
                                        />
                                    </label>
                                    <label class="block basis-2/4">
                                        <span class=" flex text-gray-700">สมาชิกในครอบครัว
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
                                            placeholder="บิดา มารดา พี่ น้อง"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-11">
                                    <div class="block ml-36 font-light">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">อื่นๆ</span>
                                        </label>
                                    </div>
                                    <label class="block basis-1/4">
                                        <input
                                            type="text"
                                            class="
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 
                                            focus:ring 
                                            focus:ring-indigo-200 
                                            focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                            placeholder="อื่นๆ"
                                        />
                                    </label>
                                </div>

                                <div class="flex space-x-7 ml-60">
                                    <label class="block basis-1/4">
                                        <span class=" flex text-gray-700">จำนวนสมาชิก (รวมตัวเอง)
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
                                            placeholder="จำนวนสมาชิก"
                                        />
                                    </label>
                                    <label class="block basis-2/4">
                                        <span class=" flex text-gray-700">ความสัมพันธ์ที่เกี่ยวข้อง
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
                                            placeholder="บิดา มารดา พี่ น้อง"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-4">
                                    <span class="text-black/[0.7] font-normal">รายละเอียดที่อยู่</span>
                                    <label class="block basis-2/12 pl-7">
                                        <span class=" flex text-gray-700">บ้านเลขที่
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
                                            placeholder="บ้านเลขที่"
                                        />
                                    </label>
                                    <label class="block basis-1/12">
                                        <span class=" flex text-gray-700">หมู่
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
                                            placeholder="หมู่"
                                        />
                                    </label>
                                    <label class="block basis-4/12">
                                        <span class=" flex text-gray-700">หมู่บ้าน/อาคาร
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
                                            placeholder="หมู่บ้าน/อาคาร*"
                                        />
                                    </label>
                                    <label class="block basis-1/12">
                                        <span class=" flex text-gray-700">ชั้น
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
                                            placeholder="ชั้น"
                                        />
                                    </label>
                                    <label class="block basis-1/12">
                                        <span class="text-gray-700">เลขที่ห้อง
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
                                            placeholder="เลขที่ห้อง"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-4">
                                    <label class="block basis-1/3 pl-36">
                                        <span class=" flex text-gray-700">ซอย
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
                                            placeholder="ซอย"
                                        />
                                    </label>
                                    <label class="block basis-1/3">
                                        <span class=" flex text-gray-700">ถนน
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
                                            placeholder="ถนน"
                                        />
                                    </label>
                                    <label class="block basis-1/3 pr-32">
                                        <span class=" flex text-gray-700">แขวง/ตำบล
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
                                            placeholder="แขวง/ตำบล"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-4">
                                    <label class="block basis-1/3 pl-36">
                                        <span class=" flex text-gray-700">เขต/อำเภอ
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
                                            placeholder="เขต/อำเภอ"
                                        />
                                    </label>
                                    <label class="block basis-1/3">
                                        <span class=" flex text-gray-700">จังหวัด
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
                                            placeholder="จังหวัด"
                                        />
                                    </label>
                                    <label class="block basis-1/3 pr-32">
                                        <span class=" flex text-gray-700">รหัสไปรษณีย์
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
                                            placeholder="รหัสไปรษณีย์"
                                        />
                                    </label>
                                </div>
                                <p class="text-black text-[24px] font-normal pt-7">1.2 ข้อมูลที่อยู่ที่จะนำแมวไปเลี้ยง</p>
                                <div class="flex">
                                    <div class="block ml-36 font-light">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2">ที่อยู่อาศัยเดียวกันกับหัวข้อ 1.1</span>
                                        </label>
                                    </div>
                                    <div class="block ml-36 font-light">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2">ไม่ใช่ที่อยู่อาศัยเดียวกันกับหัวข้อ 1.1</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="flex space-x-4">
                                    <span class="text-black/[0.7] font-normal">รายละเอียดที่อยู่</span>
                                    <label class="block basis-2/12 pl-7">
                                        <span class=" flex text-gray-700">บ้านเลขที่
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
                                            placeholder="บ้านเลขที่"
                                        />
                                    </label>
                                    <label class="block basis-1/12">
                                        <span class=" flex text-gray-700">หมู่
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
                                            placeholder="หมู่"
                                        />
                                    </label>
                                    <label class="block basis-4/12">
                                        <span class=" flex text-gray-700">หมู่บ้าน/อาคาร
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
                                            placeholder="หมู่บ้าน/อาคาร*"
                                        />
                                    </label>
                                    <label class="block basis-1/12">
                                        <span class=" flex text-gray-700">ชั้น
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
                                            placeholder="ชั้น"
                                        />
                                    </label>
                                    <label class="block basis-1/12">
                                        <span class="text-gray-700">เลขที่ห้อง
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
                                            placeholder="เลขที่ห้อง"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-4">
                                    <label class="block basis-1/3 pl-36">
                                        <span class=" flex text-gray-700">ซอย
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
                                            placeholder="ซอย"
                                        />
                                    </label>
                                    <label class="block basis-1/3">
                                        <span class=" flex text-gray-700">ถนน
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
                                            placeholder="ถนน"
                                        />
                                    </label>
                                    <label class="block basis-1/3 pr-32">
                                        <span class=" flex text-gray-700">แขวง/ตำบล
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
                                            placeholder="แขวง/ตำบล"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-4">
                                    <label class="block basis-1/3 pl-36">
                                        <span class=" flex text-gray-700">เขต/อำเภอ
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
                                            placeholder="เขต/อำเภอ"
                                        />
                                    </label>
                                    <label class="block basis-1/3">
                                        <span class=" flex text-gray-700">จังหวัด
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
                                            placeholder="จังหวัด"
                                        />
                                    </label>
                                    <label class="block basis-1/3 pr-32">
                                        <span class=" flex text-gray-700">รหัสไปรษณีย์
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
                                            placeholder="รหัสไปรษณีย์"
                                        />
                                    </label>
                                </div>
                                <p class="text-black text-[24px] font-normal pt-7">1.3 ข้อมูลติดต่อ</p>
                                <div class="flex space-x-4">
                                    <span class="text-black/[0.7] font-normal pt-8">โทรศัพท์ที่ติดต่อได้</span>
                                    <label class="block basis-1/4 pl-2">
                                        <span class=" flex text-gray-700">เบอร์มือถือ
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
                                            placeholder="เบอร์มือถือ"
                                        />
                                    </label>
                                    <label class="block basis-1/4">
                                        <span class=" flex text-gray-700">เบอร์ที่บ้าน
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
                                            placeholder="เบอร์ที่บ้าน"
                                        />
                                    </label>
                                    <label class="block basis-1/4">
                                        <span class=" flex text-gray-700">เบอร์ที่ทำงาน
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
                                            placeholder="เบอร์ที่ทำงาน"
                                        />
                                    </label>
                                </div>

                                <div class="flex space-x-4">
                                    <span class="text-black/[0.7] font-normal pt-8">ช่องทางติดต่ออื่น</span>
                                    <label class="block basis-2/4 pl-2">
                                        <span class=" flex text-gray-700">Facebook user
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
                                            placeholder="Facebook user"
                                        />
                                    </label>
                                    <label class="block basis-1/4">
                                        <span class=" flex text-gray-700">LIne ID
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
                                            placeholder="LIne ID"
                                        />
                                    </label>
                                </div>

                                <div class="flex space-x-4">
                                    <span class="text-black/[0.7] font-normal pt-8">บุคคลอื่นที่สามารถติดต่อได้</span>
                                    <label class="block basis-4/12 pl-2">
                                        <span class=" flex text-gray-700">ชื่อและนามสกุล
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
                                            placeholder="ชื่อและนามสกุล"
                                        />
                                    </label>
                                    <label class="block basis-2/12">
                                        <span class=" flex text-gray-700">เกี่ยวข้องเป็น
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
                                            placeholder="เกี่ยวข้องเป็น"
                                        />
                                    </label>
                                    <label class="block basis-3/12">
                                        <span class=" flex text-gray-700">เบอร์มือถือ
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
                                            placeholder="เบอร์มือถือ"
                                        />
                                    </label>
                                </div>

                                <p class="text-black text-[24px] font-normal pt-7">1.4 ข้อมูลการทำงาน</p>
                                <div class="flex space-x-7">
                                    <span class=" flex text-gray-700 pt-2">อาชีพปัจจุบัน
                                        <span class="text-error font-light">*</span>
                                    </span>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">ข้าราชการ</span>
                                        </label>
                                    </div>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">เอกชน/รัฐวิสาหกิจ</span>
                                        </label>
                                    </div>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">ธุรกิจส่วนตัว</span>
                                        </label>
                                    </div>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">ลูกจ้าง</span>
                                        </label>
                                    </div>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">อื่นๆ</span>
                                        </label>
                                    </div>
                                    <label class="block basis-1/4">
                                        <input
                                            type="text"
                                            class="
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 
                                            focus:ring 
                                            focus:ring-indigo-200 
                                            focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                            placeholder="อื่นๆ"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-4">
                                    <span class="text-black/[0.7] font-normal">ข้อมูลบริษัทเบื้องต้น</span>
                                    <label class="block basis-2/6 pl-14">
                                        <span class=" flex text-gray-700">ชื่อบริษัท
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
                                            placeholder="ชื่อบริษัท"
                                        />
                                    </label>
                                    <label class="block basis-2/6">
                                        <span class=" flex text-gray-700">ธุรกิจเกี่ยวข้องกับ
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
                                            placeholder="ธุรกิจเกี่ยวข้องกับ"
                                        />
                                    </label>
                                </div>

                                <div class="flex space-x-4 px-52">
                                    <label class="block basis-5/12">
                                        <span class=" flex text-gray-700">ตำแหน่ง
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
                                            placeholder="ตำแหน่ง"
                                        />
                                    </label>
                                    <label class="block basis-6/12">
                                        <span class=" flex text-gray-700">เงินเดือนประจำ(บาท)
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
                                            placeholder="เงินเดือนประจำ"
                                        />
                                    </label>
                                </div>

                                {/*section 3*/}
                                <p class="text-[24px] font-normal text-transparent bg-clip-text bg-gradient-to-b from-bright-salmon to-salmon pt-8">ตอนที่ 2 ข้อมูลการเลี้ยงแมว</p>
                                <div class="flex space-x-10">
                                    <span class=" flex text-gray-700">ประวัติการเลี้ยงแมว
                                        <span class="text-error font-light">*</span>
                                    </span>
                                    <div class="block pl-8">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">เคยเลี้ยง</span>
                                        </label>
                                    </div>
                                    <div class="block">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">ไม่เคยเลี้ยง</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="flex space-x-4 px-52">
                                    <label class="block basis-2/12">
                                        <span class="text-gray-700">จำนวนแมว</span>
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
                                            placeholder="จำนวนแมว"
                                        />
                                    </label>
                                    <label class="block basis-5/12">
                                        <span class=" flex text-gray-700">สายพันธุ์</span>
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
                                            placeholder="สายพันธุ์"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-20">
                                    <span class=" flex text-gray-700">มีสัตว์เลี้ยงชนิดอื่น
                                        <span class="text-error font-light">*</span>
                                    </span>
                                    <div class="block">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">มี</span>
                                        </label>
                                    </div>
                                    <div class="block">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">ไม่มี</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="flex space-x-4 px-52">
                                    <label class="block basis-2/12">
                                        <span class="text-gray-700">จำนวน</span>
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
                                            placeholder="จำนวน"
                                        />
                                    </label>
                                    <label class="block basis-5/12">
                                        <span class=" flex text-gray-700">ชนิดสัตว์</span>
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
                                            placeholder="สายพันธุ์สุนัข นก ปลา"
                                        />
                                    </label>
                                </div>
                                <div class="flex space-x-10">
                                    <span class=" flex text-gray-700 pt-2">การเลี้ยงแมวปัจจุบัน
                                        <span class="text-error font-light pt-2">*</span>
                                    </span>
                                    <div class="block pl-8 pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">เลี้ยงอยู่</span>
                                        </label>
                                    </div>
                                    <div class="block pt-2">
                                        <label class="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                class="
                                                        rounded-full
                                                        border-gray-300
                                                        shadow-sm
                                                        accent-salmon
                                                        focus:border-indigo-300
                                                        focus:ring
                                                        focus:ring-offset-0
                                                        focus:ring-indigo-200
                                                        focus:ring-opacity-50
                                                        "
                                                checked
                                            />
                                            <span class="ml-2 font-light">ไม่ได้เลี้ยง</span>
                                        </label>
                                    </div>
                                    <label class="block basis-4/12">
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
                                            placeholder="สาเหตุ"
                                        />
                                    </label>
                                </div>
                                {/*section 4*/}
                                <p class="text-[24px] font-normal text-transparent bg-clip-text bg-gradient-to-b from-bright-salmon to-salmon pt-8">ตอนที่ 3 รับอุปการะ และส่งมอบ</p>
                                <label class="block pl-24 flex-initial w-[400px]">
                                    <span class=" flex text-gray-700 ">ชื่อใหม่
                                        <span class="text-error font-light">*</span>
                                    </span>
                                    <input
                                        type="text"
                                        class="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                            font-normal
                                            placeholder-gray-300
                                        "
                                        placeholder="ชื่อใหม่"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/*section 5*/}
            <div class="w-screen h-[30rem]">
                <button type="button"
                    class="flex rounded-lg bg-salmon text-white rounded text-lg mx-auto my-12 px-7 py-2 gap-3"
                    onClick={() => supabase.auth.signOut()}>
                    <Image src={vectorprinter} placeholder="blur" />
                    พิมพ์เอกสาร
                </button>
            </div>
        </div >
    )
}
