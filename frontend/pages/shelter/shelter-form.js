import Signin from '../../components/sigin'

export default function ShelterForm() {
    return (
        <div class="h-[87vh]">
            <div class="w-screen h-[20rem]">
                <p class="text-[48px] font-normal text-center pt-[7rem]">สมัครสมาชิก</p>
                <p class="text-[20px] font-normal text-center pt-2">สำหรับมูลนิธิ</p>
            </div>

            <form action="#" method="POST">
                <div class="bg-gray-200">
                    <div class="container mx-auto flex justify-around">

                        <div class="w-1/3 pt-9">
                            <h4 class="font-inter font-medium">ข้อมูลมูลนิธิ</h4>
                            <h6 class="font-light pt-2">ข้อมูลเบื้องต้นของมูลนิธิเพื่อให้ทางทีมงาน Cat Finder และ ผู้ใช้งานทั่วไปสามารถอ่านข้อมูล</h6>
                        </div>

                        <div class="w-3/5 my-8 bg-white shadow rounded-t-md">
                            <div class="p-7 max-w-lg">
                                <div class="grid grid-cols-1 gap-6 pb-5">
                                    <label for="shelter-website" class="block">
                                        <span class="font-inter text-gray-700">ชื่อมูลนิธิ</span>

                                        <div class="flex">
                                            <span class="inline-flex items-center px-3 mt-1 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 ">
                                                มูลนิธิ
                                            </span>
                                            <input
                                                type="text"
                                                class="
                                                mt-1
                                                block
                                                w-full
                                                rounded-none
                                                rounded-r-md
                                                border-gray-300
                                                shadow-sm
                                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                                placeholder=""
                                            />
                                        </div>
                                    </label>
                                    <label for="shelter-website" class="block">
                                        <span class="font-inter text-gray-700">เว็บไซต์</span>

                                        <div class="flex">
                                            <span class="inline-flex items-center px-3 mt-1 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 ">
                                                http://
                                            </span>
                                            <input
                                                type="text"
                                                class="
                                                mt-1
                                                block
                                                w-full
                                                rounded-none
                                                rounded-r-md
                                                border-gray-300
                                                shadow-sm
                                                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        "
                                                placeholder=""
                                            />
                                        </div>
                                    </label>

                                    <span class="font-inter text-gray-700">ช่องทางการรับบริจาค</span>
                                    <div class="grid md:grid-cols-2 md:gap-6">
                                        <div class="relative z-0 mb-6 w-full group">
                                            <label for="firstname" class="text-sm col-span-6 sm:col-span-3">ชื่อธนาคาร (1)
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
                                        "
                                                    placeholder=""
                                                />
                                            </label>
                                        </div>
                                        <div class="relative z-0 mb-6 w-full group">
                                            <label for="firstname" class="text-sm col-span-6 sm:col-span-3">หมายเลขบัญชี (1)
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
                                        "
                                                    placeholder=""
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div class="grid md:grid-cols-2 md:gap-6 ">
                                        <div class="relative z-0 mb-6 w-full group">
                                            <label for="firstname" class="text-sm col-span-6 sm:col-span-3">ชื่อธนาคาร (2)
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
                                        "
                                                    placeholder=""
                                                />
                                            </label>
                                        </div>
                                        <div class="relative z-0 mb-6 w-full group">
                                            <label for="firstname" class="text-sm col-span-6 sm:col-span-3">หมายเลขบัญชี (2)
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
                                        "
                                                    placeholder=""
                                                />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>

            <form action="#" method="POST">
                <div class="bg-gray-200">
                    <div class="container mx-auto flex justify-around">

                        <div class="w-1/3 pt-9">
                            <h4 class="font-inter font-medium">ข้อมูลสำหรับติดต่อ</h4>
                            <h6 class="font-light pt-2">ข้อมูลสำหรับให้ทางทีมงาน cat Finder ติดต่อกับทางมูลนิธิ</h6>
                        </div>

                        <div class="w-3/5 my-8 bg-white shadow rounded-t-md">
                            <div class="p-7 max-w-lg">
                                <div class="grid grid-cols-1 gap-6 pb-5">

                                    <div class="grid md:grid-cols-2 md:gap-6 ">
                                        <div class="relative z-0 mb-6 w-full group">
                                            <label for="firstname" class="text-sm col-span-6 sm:col-span-3">ชื่อ
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
                                        "
                                                    placeholder=""
                                                />
                                            </label>
                                        </div>
                                        <div class="relative z-0 mb-6 w-full group">
                                            <label for="firstname" class="text-sm col-span-6 sm:col-span-3">นามสกุล
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
                                        "
                                                    placeholder=""
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">Email address</span>
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
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">เบอร์ติดต่อ</span>
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
                                        "
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">ที่อยู่มูลนิธิ</span>
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
                                        "
                                            placeholder=""
                                        />
                                    </label>

                                    <div class="grid md:grid-cols-3 md:gap-6 ">
                                        <div class="relative z-0 mb-6 w-full group">
                                            <label for="firstname" class="text-sm col-span-6 sm:col-span-3">อำเภอ
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
                                        "
                                                    placeholder=""
                                                />
                                            </label>
                                        </div>
                                        <div class="relative z-0 mb-6 w-full group">
                                            <label for="firstname" class="text-sm col-span-6 sm:col-span-3">จังหวัด
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
                                        "
                                                    placeholder=""
                                                />
                                            </label>
                                        </div>
                                        <div class="relative z-0 mb-6 w-full group">
                                            <label for="firstname" class="text-sm col-span-6 sm:col-span-3">รหัสไปรษณีย์
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
                                        "
                                                    placeholder=""
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <label class="block">
                                        <span class="font-inter text-gray-700">ลิงก์ google map (https://)</span>
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
                    <button class="rounded-[4px] bg-iris text-[18px] text-white font-normal text-center py-2.5 px-5 mt-8 mr-7">ถัดไป</button>
                </div>

            </form>
        </div>
    )
}