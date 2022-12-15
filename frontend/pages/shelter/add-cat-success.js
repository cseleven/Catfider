import Head from 'next/head'
import Image from 'next/image'
import vectorHome from '../../public/add-cat/vector-home.png'
import vectorInto from '../../public/add-cat/vector-into.png'
import iconCheck from '../../public/add-cat/icon-check.png'


export default function AddCatSuccess() {
    return (
        <div class="container">
            <Head>
                <title>Cat Finder</title>
                <meta name="description" content="create by eleven" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/*section 1*/}
            <div class="w-screen h-[171px] mx-28">
                <div class="flex my-8">
                    <Image class="pb-1" src={vectorHome} placeholder="blur" />
                    <p class="mx-2 text-sm font-normal text-gray-500">หน้าแรก</p>
                    <Image class="mx-4 pb-1" src={vectorInto} placeholder="blur" />
                    <p class="mx-2 text-sm font-normal text-gray-500">ค้นหาแมว</p>
                    <Image class="mx-4 pb-1" src={vectorInto} placeholder="blur" />
                    <p class="mx-2 text-sm font-normal text-gray-500">ลงทะเบียนแมว</p>
                </div>
                <p class="text-4xl text-black font-normal mt-8">ลงทะเบียนแมว</p>
                <div class="w-10/12 h-0.5 bg-gray-200 mt-8" />
            </div>

            {/*section 2 */}
            <div class="w-screen h-[40rem] bg-light-salmon">
                <Image class="mx-auto pt-32" src={iconCheck} placeholder="blur" />
                <p class="text-gray-500 text-normal text-lg text-center pt-9">ทีมงาน Cat Finder ได้รับคำขอลงทะเบียนแมวของคุณเรียบร้อยแล้ว</p>
                <div class="flex text-normal text-lg ml-[570px]">
                    <p class="text-gray-500">ทางทีมงานจะทำการตอบกลับภายใน</p>
                    <p class="text-salmon px-2">24 ชม.</p>
                    <p class="text-gray-500">ในอีเมลค่ะ</p>
                </div>
                <div class="flex text-normal text-lg mt-10 ml-[600px]">
                    <button type="button"
                        class="flex rounded-lg bg-white border-salmon border-2 text-salmon rounded-full text-lg mx-3 px-5 py-2"
                        onClick={() => supabase.auth.signOut()}>
                        + เพิ่มตัวต่อไป
                    </button>
                    <button type="button"
                        class="flex rounded-lg bg-salmon text-white rounded-full text-lg px-5 py-2"
                        onClick={() => supabase.auth.signOut()}>
                        ออกจากหน้านี้
                    </button>
                </div>
            </div>
            <div class="w-screen h-[15rem]"></div>
        </div>
    )
}