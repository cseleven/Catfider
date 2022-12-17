import { useEffect, useState } from 'react'
import Loading from "../../../components/loading";
import Catprofile from "../../../components/catprofile";
import Catdetail from "../../../components/catdetail";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CatProfile() {
  const [loading, setLoading] = useState(true);
  const mock = { 
    name:"มะลิ", pic:"https://images.unsplash.com/photo-1615789591457-74a63395c990", vaccine:true, sterile:true,bank:["กสิกร 999-999-9999","กรุงไทย 888-888-888"],
    id: 1210, map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.810927024412!2d100.77565737605752!3d13.729894097798276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664988a1bedf%3A0xcc678f180e221cd0!2sKing%20Mongkut&#39;s%20Institute%20of%20Technology%20Ladkrabang!5e0!3m2!1sen!2sth!4v1671191115547!5m2!1sen!2sth",
    detail:"แมวจรลายสลิดที่ชอบกินขนมแมวเลียเป็นชีวิตจิตใจ มีอาการบาดเจ็บที่ขาข้างซ้าย ชอบทำหน้าแปลกๆ และนอนกลิ้งไปมา", 
    age:4.5, sex:"เพศเมีย", breed:"ไทย", color:"ขาวดำ", disease:"ไม่มี", status: true
  }

  useEffect(() => setLoading(false), [])

  return (
  <div>
    {loading ? (
        <Loading/>
      ):(
      <div class="container min-h-[87vh] h-auto mx-auto max-w-6xl px-5 xl:px-0">
        <nav class="flex my-8" aria-label="Breadcrumb">
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
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">ค้นหาแมว</span>
              </div>
            </li>
          </ol>
        </nav>
        <hr class="border-1 border-gray-200"/>
        <Catprofile
          pic = {mock.pic}
          map = {mock.map}
          vaccine = {mock.vaccine}
          sterile = {mock.sterile}
          bank = {mock.bank}
        />

        {/*section2*/}
        <div class="flex flex-col max-w-md md:max-w-full mx-auto md:mx-0 md:flex-row justify-between text-gray-600">
          <Catdetail
            name = {mock.name}
            id = {mock.id}
            detail = {mock.detail} 
            age = {mock.age}
            sex = {mock.sex}
            breed = {mock.breed}
            color = {mock.color}
            disease = {mock.disease}
          />
          <div class="md:basis-2/5 lg:border-l-2 lg:px-6">
            <div div class="grid mb-8 md:place-content-end md:mr-20">
              <div class="flex">
                <p class="text-2xl pr-3 pt-2">สถานะ : </p>
                {mock.status ? (
                  <p class="text-true text-[30px]">ว่าง</p>
                ):(
                  <p class="text-error text-[30px]">มีบ้าน</p>
                )}
              </div>
              <select class="h-10 block max-w-md mt-1 rounded-md border-gray-300 shadow-sm text-[14px] font-light
                          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="status" name="status">
                <option value="" selected disabled hidden>เปลี่ยนสถานะ</option>
                <option value={true}>ว่าง</option>
                <option value={false}>มีบ้าน</option>
            </select>
            </div>
          </div>
        </div>

        {/*section 3*/}
        <div class="my-8 mx-auto md:mx-0 max-w-md md:max-w-full">
          <p class="text-iris text-2xl">ประวัติการจองคิว</p>
          <div class="overflow-x-auto relative border shadow-md sm:rounded-lg mx-auto md:ml-0 md:max-w-4xl my-8">
            <table class="w-full text-sm text-left text-gray-500 ">
              <thead class="text-gray-700 uppercase bg-gray-50 ">
                <tr class="text-gray-600 border-b ">
                  <th scope="col" class="py-3 px-6 font-normal">อีเมล</th>
                  <th scope="col" class="py-3 px-6 font-normal">วัน</th>
                  <th scope="col" class="py-3 px-6 font-normal">เวลา</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b  hover:bg-gray-50">
                  <td class="px-3 py-2">jack.cooper@example.com</td>
                  <td class="px-3 py-2">22/12/2022</td>
                  <td class="px-3 py-2">10.00-11.00 น.</td>
                </tr>
                <tr class="bg-white border-b  hover:bg-gray-50">
                  <td class="px-3 py-2">user.person@example.com</td>
                  <td class="px-3 py-2">15/12/2022</td>
                  <td class="px-3 py-2 text-error">ยกเลิก</td>
                </tr >
                <tr class="bg-white border-b  hover:bg-gray-50">
                  <td class="px-3 py-2">iris.sri@example.com</td>
                  <td class="px-3 py-2">8/12/2022</td>
                  <td class="px-3 py-2">10.00-11.00 น.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}