import { useSession, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'


// function MyCat() {
//     return (
//       <h2>แมวของฉัน</h2>
      
//     )
// }
  
export default function MyCat () {
  const user = useUser()
  const session = useSession()
  const [loading, setLoading] = useState(true)
  const [cat, setCat] = useState(null)
  // const [id, setId] = useState(0)

  useEffect(() => {
    fetchCat("x", function () {
      console.log("cat : " + cat)
    })
  }, [session])

  //fetch data
  const fetchCat = async (param, callback) => {
    try {
      setLoading(true)
      //call page/api/queue/apiname
      const selectcat = await fetch("/api/cat/selectCat").then(console.log("welcome to add cat"))
      const data = await selectcat.json()
      console.log("response : " + JSON.stringify(data))
      setCat(data)
    } finally {
      setLoading(false)
      console.log("cat : " + cat)
      callback()
    }
  }

  const catExample = async () => {
    var raw = JSON.stringify({
      "page_number": 2,
      //"cat_name": this.cat_name,
      //"password": this.password
    });

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow'
    };

    try {
      setLoading(true);
      let response = await fetch("/api/cat/selectCat");
      data = await response.json();
      console.log("response : " + JSON.stringify(data));
    } finally {
      setLoading(false);
    }
  };

  return (
      <h2>แมวของฉัน</h2>
      
     )

}









