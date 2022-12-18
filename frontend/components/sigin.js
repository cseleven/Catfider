import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Signin({ role }) {
    const supabase = useSupabaseClient()

    const createProfile = async () => {
        const user = useUser()
        var raw = JSON.stringify({ "login_id": user.id });

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
            let response = await fetch("/api/shelter/createShelter", requestOptions);
            let data = await response.json();
            console.log("response : " + JSON.stringify(data));
        } finally {
            setLoading(false);
        }
    };

    //func call Auth Signin Supabase
    const signup = async (e) => {
        console.log(e.target.email.value + e.target.password.value + role)
        const { data, error } = supabase.auth.updateUser({
            email: e.target.email.value,
            password: e.target.password.value,
            data: { role: role }
        }).then(console.log(e.target.email.value)).finally(() => createProfile())
    }

    return (
        <div class="h-auto">
            <form onSubmit={signup}>
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
                                            id="email"
                                            name="email"
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
                                            id="password"
                                            name="password"
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
                                            id="confirmPassword"
                                            name="confirmPassword"
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
                    <button type="submit" class="rounded-[4px] bg-iris text-[18px] text-white font-normal text-center py-2.5 px-5 mt-8 mr-7">ถัดไป</button>
                </div>
            </form>
        </div>
    );
}