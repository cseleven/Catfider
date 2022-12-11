import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/account'

const LogIn = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  //น่าจะทำใหม่แบบเขียนเอง
  return (
    <div class="grid h-screen place-items-center">
      {!session ? (
        <div class="h-64 w-80 -mt-24">
          <Auth supabaseClient={supabase} appearance={{
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
  )
}

export default LogIn