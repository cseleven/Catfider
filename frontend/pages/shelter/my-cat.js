import { useSession, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'


  export default function MyCat () {
  const user = useUser()
  const session = useSession()
  const [loading, setLoading] = useState(true)
  const [cat, setCat] = useState(null)
  // const [id, setId] = useState(0)

  useEffect(() => {
    catExample()
  }, [])


  const catExample = async () => {
    var raw = JSON.stringify({
      "login_id": "fadadb65-080e-4be8-a3dc-163df80e0918",
      "page_number":1

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
    } finally {
      setLoading(false);
    }
  };

  return (
              <div class="w-screen h-[171px]">
                <div class="flex my-8">
                    <nav class="flex mx-28" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                                <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                    หน้าแรก
                                </a>
                            </li>
                            <li aria-label="Breadcrumb">
                                <div class="flex items-center">
                                    <a href="/all-cat" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        ค้นหาแมว
                                    </a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">จองคิวแมว</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <p class="text-4xl text-black font-normal mt-8 mx-28">จองคิวแมว</p>
                <div class="w-10/12 h-0.5 bg-gray-200 mt-8 mx-28" />
            </div>
      
     )

}









