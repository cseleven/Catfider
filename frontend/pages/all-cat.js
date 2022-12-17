import { useSession, useUser } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Loading from '../components/loading'
import HomecardCatprofile from '../components/homecardcatprofile'
import catProfile1 from '../public/index/cat-profile1.png'

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
      "page_number" : "",
      "cat_id": 1,
      "breed" : "",
      "color" : "",
      "status" : ""


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
        <Loading/>
      ):(
        <div>
          <nav class="flex" aria-label="Breadcrumb">
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
          <p class="py-7 text-[36px] text-center text-transparent bg-clip-text bg-gradient-to-b from-bright-salmon to-salmon">น้องแมวหาบ้าน</p>
          <hr/>
          <div className="grid grid-cols-3 gap-6 my-5">
            <div className="col-span-3 sm:col-span-2">
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                  http://
                </span>
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="www.example.com"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-items-center gap-6 my-5 ">
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
          </div>
        </div>
      )}
    </div>
  )
}