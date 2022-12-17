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

    const catExample = async () => {
      var raw = JSON.stringify({
        "user_id": 2

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
        let response = await fetch("/api/cat/userview/showmyCat", requestOptions);
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