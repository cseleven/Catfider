import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react';
import Router from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Signin({ role }) {
    const supabase = useSupabaseClient()
    const [input,setInput] = useState({email:"",password:0,confirmPassword:1});


    const updateInput = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    //func call Auth Signin Supabase
    const signup = async (e) => {
        console.log(e.target.email.value + e.target.password.value + role)
        if(role==1){
            let { data, error } = supabase.auth.updateUser({
                email: e.target.email.value,
                password: e.target.password.value,
                data:{
                    role: role
                }
            }).then(console)
        } 
        
        if(role==1) {
            let { data, error } = supabase.auth.signUp({
                email: e.target.email.value,
                password: e.target.password.value
            }).then(()=>Router.push({
              pathname: '/shelter/shelter-form'
            }))
        }
    }

    return (
        <div class="h-auto">
            <form onSubmit={signup} method="POST">
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
                                            onChange={updateInput}
                                            class={classNames(
                                                (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(input.email)))
                                                    ? "border-error"
                                                    : "border-gray-300",
                                                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            )}
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">Password</span>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={updateInput}
                                            class={classNames(
                                                (input.password!=""&&input.password!=input.confirmPassword)
                                                    ? "border-error"
                                                    : "border-gray-300",
                                                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            )}
                                            placeholder=""
                                        />
                                    </label>
                                    <label class="block">
                                        <span class="font-inter text-gray-700">Confirm Password</span>
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            onChange={updateInput}
                                            class={classNames(
                                                (input.password!=""&&input.password!=input.confirmPassword)
                                                    ? "border-error"
                                                    : "border-gray-300",
                                                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            )}
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