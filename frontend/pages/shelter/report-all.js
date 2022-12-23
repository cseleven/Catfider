import { useSession, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import catProfileAdopt1 from '../../public/index/cat-profile-adopt1.png'
import catProfileAdopt2 from '../../public/index/cat-profile-adopt2.png'
import catProfileAdopt3 from '../../public/index/cat-profile-adopt3.png'
import catProfileAdopt4 from '../../public/index/cat-profile-adopt4.png'
import catProfileAdopt5 from '../../public/index/cat-profile-adopt5.png'
import catProfileAdopt6 from '../../public/index/cat-profile-adopt6.png'
import previousIcon from '../../public/my-cat/previous-icon.png'
import nextIcon from '../../public/my-cat/next-icon.png'
import vectorprinter from '../../public/my-cat/printer.png'
import line1 from '../../public/my-cat/line.png'
import Router from 'next/router';



export default function MyCat() {
  const user = useUser()
  const session = useSession()
  const [loading, setLoading] = useState(true)
  const [cat, setCat] = useState(null)
  // const [id, setId] = useState(0)

  const formatTimestamp = (timestamp) => {
    const date = timestamp.split("T")[0]
    const time_tz = timestamp.split("T")[1]
    const time = time_tz.split("+")[0]
    return `${date} ${time}`
  }

  useEffect(() => {
    catExample()
  }, [])


  const catExample = async () => {
    var raw = JSON.stringify({
      "login_id": "fadadb65-080e-4be8-a3dc-163df80e0918",
      "page_number": 1

    });

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
      let response = await fetch("/api/cat/shelterview/myCatShelterview", requestOptions);
      let data = await response.json();
      console.log("response : " + JSON.stringify(data));
      setCat(data)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="container rounded md:rounded-lg min-h-[87vh] h-auto mx-auto max-w-6xl px-5 xl:px-0">
      <nav class="flex mx-28 mt-9 breadcrumb" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              หน้าแรก
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">แมวของฉัน</span>
            </div>
          </li>
        </ol>
      </nav>

      <div class="flex mt-8">
        <p class="text-4xl text-black font-normal mx-28 mb-8">รายงานยอดการอุปการะ</p>
        {/* <div>
          <a href="/shelter/add-cat" className="rounded-lg bg-salmon text-white text-lg ml-[890px] mb-7 px-6 py-2 gap-3">
            + เพิ่มแมว</a>
        </div> */}
      </div>

      <div class="w-10/12 h-0.5 bg-gray-200 mt-3 mx-28 mb-10" />



      <div clss="flex">
        <div><p class="flex justify-between text-base text-black font-normal">รายงานยอดการอุปการะแมวผ่านแพลตฟอร์ม Cat finder</p></div>
        <div><p class="flex justify-end text-sm text-black font-normal">ชื่อมูลนิธิ :</p></div>
        <div><p class="flex justify-end text-sm text-black font-normal">วันที่ออกรายงาน :</p></div>
        <div><p class="flex justify-start mb-0 text-3xl text-iris font-normal">ยอดทั้งหมด</p></div>

      </div>






      <div class="overflow-x-hidden w-full mt-8 rounded md:rounded-lg shadow-md  md:w-auto">
        
        <table class=" w-full text-sm text-left font-light text-black ">
          <thead class="text-base text-gray-500 bg-gray-300">
            <tr>
              <th scope="col" class="py-3 px-6">
                ลำดับ
              </th>
              <th scope="col" class="py-3 px-6">
                รหัสแมว
              </th>
              <th scope="col" class="py-3 px-6">
                ชื่อแมว
              </th>
              <th scope="col" class="py-3 px-6">
                สายพันธุ์
              </th>
              <th scope="col" class="py-3 px-6">
                เพศ
              </th>
              <th scope="col" class="py-3 px-6">
                วันเข้าระบบ
              </th>
              <th scope="col" class="py-3 px-6">
                วันที่ออก(ถูกรับเลี้ยง)
              </th>
              <th scope="col" class="py-3 px-6">
                อีเมลผู้อุปการะ
              </th>
            </tr>
          </thead>

          {cat?.map((item, index) => (

            <tbody>
              <tr class="bg-gray-100 border-g border-gray-200">
                <th scope="row" class="py-4 px-6 font-light text-black whitespace-nowrap">
                  {index + 1}
                </th>
                <td class="py-4 px-6">
                  <>#</>{item.cat_id}<></>
                </td>
                <td class="py-4 px-6">
                  {item.cat_name}
                </td>
                <td class="py-4 px-6">
                  {item.breed}
                </td>
                <td class="py-4 px-6">
                  {item.sex}
                </td>
                <td class="py-4 px-6">
                  {formatTimestamp(item.create_date)}
                </td>
                <td class="py-4 px-6">
                  timestamp-out
                </td>
                <td class="py-4 px-6">
                  user@email.com
                </td>
              </tr>
            </tbody>



          ))}


          <tfoot>
            <tr class="font-medium text-base text-gray-900 ">
              <th scope="row" class="py-3 px-6 text-base"> </th>
              <td class="py-4 px-6"> </td>
              <td class="py-4 px-6"> </td>
              <td class="py-4 px-6"> </td>
              <td class="py-4 px-6"> </td>
              <td class="py-4 px-6">จำนวนทั้งหมด</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-6">ตัว</td>
            </tr>
          </tfoot>


        </table>
      </div>




      <div class="h-96"></div>


    </div >

  )

}









