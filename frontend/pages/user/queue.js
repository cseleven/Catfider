import Head from 'next/head'
import Image from 'next/image'
import vectorHome from '../public/queue/vector-home.png'


export default function Queue() {
  return (
    <div class="container">
      <Head>
        <title>Cat Finder</title>
        <meta name="description" content="create by eleven" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*section 1*/}
      <div class="w-screen h-32">
        <div class="flex">
          <Image class="" src={vectorHome} placeholder="blur"/>

          <p class=""></p>
        </div>

      </div>


    </div>

  )
}

