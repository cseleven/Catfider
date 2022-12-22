import { useSession, useUser } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Loading from '../components/loading'
import HomecardCatprofile from '../components/homecardcatprofile.js'
import catProfile1 from '../public/index/cat-profile1.png'
import Homecat from '../components/homecat'
import Router from 'next/router';

export default function AllCat() {
  const user = useUser()
  const session = useSession()
  const [loading, setLoading] = useState(true)
  const [cat, setCat] = useState(null)
  const [id, setId] = useState(0)



  useEffect(() => {
    fetchCat()
  }, [])


  // useEffect(() => {
  //   console.log("user : " + JSON.stringify(user));
  //   fetchCat("x", function() {
  //         console.log("cat : " + cat);
  //       });
  //   if(user){
  //     console.log("role : " + user.user_metadata.role);
  //     setId(user.user_metadata.role);
  //     if(id==1){
  //       console.log("role user");
  //     }else if(id==2){
  //       console.log("role shelter");
  //     }
  //   }
  // }, [session])

  const fetchCat = async (param, callback) => {
    var raw = JSON.stringify({
      "page_number": "",
      "cat_id": 1,
      "sex": "",
      "breed": "",
      "color": "",
      "status": ""


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
      let response = await fetch("/api/cat/searchCat", requestOptions);
      let data = await response.json();
      console.log("response : " + JSON.stringify(data));
    } finally {
      setLoading(false);
    }
  };


  return (
    <div class="container mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <nav class="flex mx-28 mt-9" aria-label="Breadcrumb">
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
          <p class="text-4xl text-black font-normal mx-28 mt-8">ค้นหาแมว</p>
          <div class="w-10/12 h-0.5 bg-gray-200 mt-3 mx-28" />

          <form>
            <div class="flex mt-9">
              <label class="block ml-44">
                <select
                  type="search"
                  id="search-dropdown"
                  class="
                    block
                    rounded-l-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    text-gray-500 
                    font-normal
                "
                >
                  <option>ประเภท</option>
                  <option value="สถานะ">สถานะ</option>
                  <option value="สายพันธุ์">สายพันธุ์</option>
                  <option value="สี หรือ ลาย"> สี หรือ ลาย</option>
                  <option value="รหัสแมว">รหัสแมว</option>
                </select>
              </label>
              <div class="relative w-full mr-28">
                <input
                  type="search"
                  id="search-dropdown"
                  class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="พิมพ์ค้นหาที่นี่"
                  required
                />
                <button type="submit"
                  class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-salmon rounded-r-lg border 
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                  </path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <div className="grid grid-cols-3 justify-items-center gap-6 ml-24 mr-7 mt-9">
          {cat?.map((item)=>(
                <HomecardCatprofile item={item} />
          ))}
        </div>
          {/* <div className="grid grid-cols-3 justify-items-center gap-6 my-5 ">
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
          </div>*/}
          <div className="grid grid-cols-3 justify-items-center gap-6 my-5 ">
            <Homecat imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <Homecat imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <Homecat imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <Homecat imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <Homecat imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <Homecat imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <Homecat imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <Homecat imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <Homecat imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
          </div>
        </div>
      )}
    </div>
  )
}