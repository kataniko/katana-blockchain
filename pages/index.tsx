import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <motion.div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-900"
     initial={{x : -500,
     opacity : 0,
     scale : 0.5,}}
     animate={{ x : 0 ,
     opacity: 1,
     scale : 1}}
     transition={{duration : 1.5  }}>

    
        <Head>
          <title>Katana-Blockchain</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

     <motion.main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-slate-900" 
     >
        <h1 className="text-6xl font-bold text-white">
          Welcome to{' '}
          <motion.a className="text-red-600 " href="https://youtu.be/dQw4w9WgXcQ"
          initial={{z : -500,opacity : 0, scale : 0.5,}} animate={{ x : 0 ,opacity: 1,scale : 1}} transition={{duration : 2 }}>
            Katana
          </motion.a>
        </h1>

        <motion.p className="mt-3 text-2xl text-red-600"
        initial={{x : -500,opacity : 0, scale : 0.5,}} animate={{ x : 0 ,opacity: 1,scale : 1}} transition={{duration : 2 }}>
          The best crypto{' '}
          <code className="rounded-md bg-red-600 p-3 text-slate-900 font-mono text-lg">
            WebApp 3.0
          </code>
        </motion.p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <motion.a
            href="https://youtu.be/N2H8MRdGqzs"
            className="mt-6 w-96 rounded-xl border border-red-600 text-red-600 p-6 text-left hover:text-white focus:text-white"
            initial={{z : -500,opacity : 0, scale : 0.5,}} animate={{ x : 0 ,opacity: 1,scale : 1}} transition={{duration : 2 }}
          >
            <h3 className="text-2xl font-bold ">niko &rarr;</h3>
            <p className="mt-4 text-xl text-white">
              Java dos Scripts
            </p>
          </motion.a>

          <motion.a
            href="https://youtu.be/G-Wn48geCJ8"
            className="mt-6 w-96 rounded-xl border border-red-600 text-red-600 p-6 text-left hover:text-white focus:text-white"
            initial={{x: +500,opacity : 0, scale : 0.5,}} animate={{ x : 0 ,opacity: 1,scale : 1}} transition={{duration : 2 }}
          >
            <h3 className="text-2xl font-bold">Elkidz &rarr;</h3>
            <p className="mt-4 text-xl text-white">
                Java Master
            </p>
          </motion.a>

          <motion.a
            href="https://youtu.be/UrbD0F91yVk"
            className="mt-6 w-96 rounded-xl border border-red-600 p-6 text-red-600 text-left hover:text-white focus:text-white"
            initial={{x : -500,opacity : 0, scale : 0.5,}} animate={{ x : 0 ,opacity: 1,scale : 1}} transition={{duration : 2 }}
          >
            <h3 className="text-2xl font-bold ">BoneZlel &rarr;</h3>
            <p className="mt-4 text-xl text-white">
              Python sem dentes
            </p>
          </motion.a>

          <motion.a
            href="https://youtu.be/CSwNHs-mgCc"
            className="mt-6 w-96 rounded-xl border border-red-600 p-6 text-red-600 text-left hover:text-white focus:text-white"
            initial={{x : +500,opacity : 0, scale : 0.5,}} animate={{ x : 0 ,opacity: 1,scale : 1}} transition={{duration : 2 }}
          >
            <h3 className="text-2xl font-bold ">Katotas &rarr;</h3>
            <p className="mt-4 text-xl text-white">
              HTML programmer xD
            </p>
          </motion.a>
        </div>
      </motion.main>
    </motion.div>
  )
}

export default Home
