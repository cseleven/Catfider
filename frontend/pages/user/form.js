import Head from 'next/head'
import Image from 'next/image'

export default function form() {

    return (
        <div class="container">
            <Head>
                <title>Cat Finder</title>
                <meta name="description" content="create by eleven" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*section 1*/}
            <div class="w-screen h-[22rem]">
                <p class="text-black text-[48px] font-normal text-center pt-[97px]">แบบฟอร์มขอรับอุปการะแมว</p>
                <p class="text-salmon text-[24px] font-normal text-center pt-[29px]">กรุณากด print เอกสารเพื่อไปยื่นกับทางเจ้าหน้าที่มูลนิธิ</p>
                <div class="flex">
                    <p class="text-black/[0.9] text-[12px] font-normal pl-[1150px] pt-[18px]">รหัสแมวที่ต้องการอุปการะ</p>
                    <p class="text-error text-[12px] font-normal pl-[1px] pt-[18px]">*</p>
                </div>
                <select class="text[14px] text-gray-900 font-light w-[161px] h-[39px] bg-white shadow-inner rounded border-[1px] border-gray-300 ml-[1150px] pt-[4px]">
                    <option>โปรดระบุ</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Maybe</option>
                </select>
            </div>

            {/*section 2*/}
            <div class="w-screen h-[22rem] bg-light-salmon">
                <p class="text-black text-[24px] font-normal pl-[98px] pt-[24px]">ตอนที่ 1 ข้อมูลผู้รับอุปการะ</p>
                <p class="text-black text-[24px] font-normal pl-[98px] pt-[17px]">1.1 ข้อมูลส่วนตัว</p>

                <div class="flex">

                    <div class="">
                        <p class="text-black/[0.7] text-[12px] font-normal pl-[98px] pt-[16px]">คำนำหน้า</p>
                        <select class="text[14px] text-gray-900 font-light w-[88px] h-[39px] bg-white shadow-inner rounded border-[1px] border-gray-300 ml-[98px] pl-[10px] pt-[2px]">
                            <option>นาย</option>
                            <option>นาง</option>
                            <option>นางสาว</option>
                        </select>
                    </div>

                    <div class="">
                        <p class="text-black/[0.7] text-[12px] font-normal ml-[64px] pt-[16px]">ชื่อจริง</p>
                        <div class="w-[324px] h-[39px] bg-white showdow-inner rounded border-[1px] border-gray-300 ml-[21px]"></div>
                    </div>

                </div>



            </div>

        </div >

    )
}
