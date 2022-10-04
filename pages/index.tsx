import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-900">
      <Head>
        <title>Katana-Blockchain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-slate-900">
        <h1 className="text-6xl font-bold text-white">
          Welcome to{' '}
          <a className="text-red-600 " href="https://nextjs.org">
            Katana
          </a>
        </h1>

        <p className="mt-3 text-2xl text-red-600">
          The best crypto{' '}
          <code className="rounded-md bg-red-600 p-3 text-slate-900 font-mono text-lg">
            WebApp 3.0
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://youtu.be/N2H8MRdGqzs"
            className="mt-6 w-96 rounded-xl border border-red-600 text-red-600 p-6 text-left hover:text-white focus:text-white"
          >
            <h3 className="text-2xl font-bold ">niko &rarr;</h3>
            <p className="mt-4 text-xl text-white">
            Qual a maior causa de emigração na etiópia? 
            O vento.
            </p>
          </a>

          <a
            href="https://youtu.be/G-Wn48geCJ8"
            className="mt-6 w-96 rounded-xl border border-red-600 text-red-600 p-6 text-left hover:text-white focus:text-white"
          >
            <h3 className="text-2xl font-bold">Elkidz &rarr;</h3>
            <p className="mt-4 text-xl text-white">
            O que faz um leproso no banho?
            Nestum.
            </p>
          </a>

          <a
            href="https://youtu.be/UrbD0F91yVk"
            className="mt-6 w-96 rounded-xl border border-red-600 p-6 text-red-600 text-left hover:text-white focus:text-white"
          >
            <h3 className="text-2xl font-bold ">BoneZlel &rarr;</h3>
            <p className="mt-4 text-xl text-white">
              BRAZILLLLLLLL
            </p>
          </a>

          <a
            href="https://youtu.be/CSwNHs-mgCc"
            className="mt-6 w-96 rounded-xl border border-red-600 p-6 text-red-600 text-left hover:text-white focus:text-white"
          >
            <h3 className="text-2xl font-bold ">Katotas &rarr;</h3>
            <p className="mt-4 text-xl text-white">
              Bruhh
            </p>
          </a>
        </div>
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t bg-slate-900">
        <a
          className="flex items-center justify-center gap-2 text-red-600"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          feito por{' '}
          <Image src="/unknown.svg" alt="Katana logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
