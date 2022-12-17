import { useSession, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
function MyCat() {
    const user = useUser()
    const session = useSession()
    const [loading, setLoading] = useState(true)
    const [cat, setCat] = useState(null)
    
    useEffect(() => {
      catExample()
    }, [])

    //fetch data
    const fetchCat = async () => {
      try {
        setLoading(true)
        //call page/api/queue/apiname
        let response = await fetch("/api/cat/userview/showMyCat").then(console.log("welcome to show my cat"))
        let data = await response.json()
        console.log("response : " + JSON.stringify(data))
        setCat(data)
      } finally {
        setLoading(false)
      }
    }

    const catExample = async () => {
      var raw = JSON.stringify({
        "cat_id": 5

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
  
export default MyCat