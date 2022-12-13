import { useSession, useUser } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Test() {
  const user = useUser()
  const session = useSession()
  const [loading, setLoading] = useState(true)
  const [cat, setCat] = useState(null)
  const [id, setId] = useState(0)

  useEffect(() => {
    console.log("user : " + JSON.stringify(user));
    fetchCat("x", function() {
          console.log("cat : " + cat);
        });
    if(user){
      console.log("role : " + user.user_metadata.role);
      setId(user.user_metadata.role);
      if(id==1){
        console.log("role user");
      }else if(id==2){
        console.log("role shelter");
      }
    }
  }, [session])

  const fetchCat = async (param, callback) => {
    let data = [{ 'cat_id': 0 ,'cat_name': 'loading' }];
    try {
      setLoading(true)
      let response = await fetch("/api/getCatProfile").then(console.log("hello"));
      data = await response.json();
      console.log("response : " + JSON.stringify(data));
      setCat(data);
    } finally {
      setLoading(false)
      console.log("cat : " + id);
      callback();
    }
  };
 
  return (
    <div className={styles.container}>
      {!session ? (
        <h1 className={styles.title}>
          Pleace login
        </h1>
      ) : ( 
        <div>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">Next.js! </a> {loading ? 'Loading ...' : cat[0].cat_name}
            </h1>

            {id==1 ?(<p className={styles.description}>
              Get started by user{' '}
              <code className={styles.code}>pages/index.js</code>
            </p>):(
            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.js</code>
            </p>)
            }

            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Learn &rarr;</h2>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={styles.card}
              >
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <h2>Deploy &rarr;</h2>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div>
          </main>

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
      )}
    </div>
  )
}
