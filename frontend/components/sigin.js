export default function Signin({ role }){

    //func call Auth Signin Supabase

    return(
        <div>
            <form action="#" method="POST">
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
                                        <span class="font-inter text-gray-700">Password</span>
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
                                        <span class="font-inter text-gray-700">Confirm Password</span>
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
    );
}