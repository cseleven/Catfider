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
      "shelter_id": 2

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
      <h2>แมวของฉัน</h2>
      
     )

}









