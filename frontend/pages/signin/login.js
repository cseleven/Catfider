// import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { Auth, Typography, Button } from "@supabase/ui";
import { createClient } from '@supabase/supabase-js'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../../components/account'
import { styled } from '@stitches/react';

const customTheme = {
  default: {
    variables: {
      default: {
        colors: {
          brand: '#FA8072',
          brandAccent: '#FA8072',
        }
      },
    }
  }
}

const LogIn = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  //น่าจะทำใหม่แบบเขียนเอง
  return (
    <div class="grid h-[40vh] place-items-center">
      <div className="mx-auto  w-full max-w-md space-y-6">

        <img
          className="mx-auto h-12 w-auto "
          src="https://cdn-icons-png.flaticon.com/512/763/763704.png"
          alt="Cat Finder"
        />

        <h2 className="text-center text-3xl font-bold text-gray-900">
          เข้าสู่ระบบ
        </h2>


        {!session ? (
          <div class="h-64 w-80 -mt-24 mx-auto">
            <Auth supabaseClient={supabase}
              appearance={{
                theme: customTheme
              }}




            />
          </div>
        ) : (
          <h1>เข้าสู่ระบบแล้ว</h1>
        )}


      </div>
    </div >
  )
}

export default LogIn
