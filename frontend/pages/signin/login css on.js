import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { IconMail, Input } from "@supabase/ui";
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../../components/account'

const LogIn = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  //น่าจะทำใหม่แบบเขียนเอง
  return (
    <div class="grid h-[87vh] place-items-center">
      <div className="w-full max-w-md space-y-8">

        <img
          className="mx-auto h-12 w-auto"
          src="https://cdn-icons-png.flaticon.com/512/763/763704.png"
          alt="Cat Finder"
        />

        <h2 className="text-center text-3xl font-bold text-gray-900">
          เข้าสู่ระบบ
        </h2>


        {!session ? (
          <div class="h-64 w-80 -mt-24">


            <Auth supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,

                variables: {
                  default: {
                    colors: {
                      brand: '#FA8072',
                      brandAccent: '#FA8072',
                    }
                  },
                },
              }} />
          </div>
        ) : (
          <h1>เข้าสู่ระบบแล้ว</h1>
        )}


      </div>
    </div>
  )
}

export default LogIn