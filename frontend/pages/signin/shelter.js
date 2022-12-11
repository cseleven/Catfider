import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react' 
import Signin from '../../components/sigin'

export default function SignInShelter() {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div class="h-screen">
        <div>
            <div class="w-screen h-[20rem]">
                <p class="text-[48px] font-normal text-center pt-[7rem]">สมัครสมาชิก</p>
                <p class="text-iris text-[20px] font-normal text-center pt-2">สำหรับมูลนิธิ</p>
            </div>
            <Signin role={2}/>
        </div>
    </div>
  )
}