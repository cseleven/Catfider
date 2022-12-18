import { useSession, useUser } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import Loading from '../../components/loading'
import catProfile1 from '../../public/index/cat-profile-adopt1.png'

export default  function MyCat() {
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
      <div>
        {!loading? (<Loading/>):(
          <div>
            {cat.map((item)=>(
              <HomecardCatprofile imgcat={catProfile1} statuscat="ว่าง" namecat="มะลิ (#1210)" detail="แม่มะลิ แมวจรพันธุ์ไทย สีขาวดำ นิสัยเป็นมิตร ใจดีกับแมวเด็ก..." tagbreed="พันธุ์ไทย" tagcolor="ขาวดำ" tagsex="เพศเมีย" fund="มูลนิธิบ้านรักแมว" />
            ))}
          </div>
        )}
      </div>
    )
}
  
