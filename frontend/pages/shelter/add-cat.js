import { useSession, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'


function AddCat() {
  //setup 
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
            //"cat_id": 5,
            "shelter_id": 1,
            "cat_name": "ขนมจีน",
            "sex": "female",
            "breed": "ผสม",
            "color": "ขาว",
            "sterile": false,
            "vaccine": true,
            "detail": "น้องเป็นแมวอารมณ์ดี เป็นมิตรกับสิ่งแวดล้อม",
            "cat_picture": "www.google.com",
            "status": false,
            "age": 2


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
            let response = await fetch("/api/cat/shelterview/addCat", requestOptions);
            let data = await response.json();
            console.log("response : " + JSON.stringify(data));
        } finally {
            setLoading(false);
        }
    };

    return (
        <h2>เพิ่มแมวมูลนิธิ</h2>

    )

}


//   //fetch data
//   const fetchCat = async (param, callback) => {
//     try {
//       setLoading(true)
//       //call page/api/queue/apiname
//       const addcat = await fetch("/api/cat/addCat").then(console.log("welcome to add cat"))
//       const data = await addcat.json()
//       console.log("response : " + JSON.stringify(data))
//       setCat(data)
//     } finally {
//       setLoading(false)
//       console.log("cat : " + cat)
//       callback()
//     }
//   }
 
//     return (
//     <div class="h-[87vh]">
//         <div class="container mx-auto h-[20rem]">
//             <p class="text-[48px] font-normal pt-[7rem]">ลงทะเบียนแมว</p>
//         </div>
//         <form action="#" method="POST">
//             <div class="bg-gray-200">
//                 <div class="container mx-auto flex justify-around">
//                     <div class="w-1/3 pt-9">
//                         <h4 class="font-inter font-medium">User and Password</h4>
//                         <h6 class="font-light pt-2">email และ password สำหรับเข้าสู่ระบบ</h6>
//                     </div>
//                     <div class="w-3/5 my-8 bg-white shadow rounded-t-md">
//                         <div class="p-7 max-w-lg">
//                             <div class="grid grid-cols-1 gap-6 pb-5">
//                                 <label class="block">
//                                     <span class="font-inter text-gray-700">Email address</span>
//                                     <input
//                                         type="text"
//                                         class="
//                                             mt-1
//                                             block
//                                             w-full
//                                             rounded-md
//                                             border-gray-300
//                                             shadow-sm
//                                             focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
//                                         "
//                                         placeholder=""
//                                     />
//                                 </label>
//                                 <label class="block">
//                                     <span class="font-inter text-gray-700">Password</span>
//                                     <input
//                                         type="text"
//                                         class="
//                                             mt-1
//                                             block
//                                             w-full
//                                             rounded-md
//                                             border-gray-300
//                                             shadow-sm
//                                             focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
//                                         "
//                                         placeholder=""
//                                     />
//                                 </label>
//                                 <label class="block">
//                                     <span class="font-inter text-gray-700">Confirm Password</span>
//                                     <input
//                                         type="text"
//                                         class="
//                                             mt-1
//                                             block
//                                             w-full
//                                             rounded-md
//                                             border-gray-300
//                                             shadow-sm
//                                             focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
//                                         "
//                                         placeholder=""
//                                     />
//                                 </label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="container mx-auto flex justify-end">
//                 <button class="rounded-[4px] bg-iris text-[18px] text-white font-normal text-center py-2.5 px-5 mt-8 mr-7">ถัดไป</button>
//             </div>
//         </form>
//     </div>
//   )

  
export default AddCat