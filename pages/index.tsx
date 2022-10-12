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
      
        <section><div className="styles-module--container--NnRM9">
          <a href="/" className="styles-module--brandLink--3YpyT">
            <div className="styles-module--container--1b4Dx styles-module--brand--26gap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="styles-module--logo--CVwTI" height="20" width="20">
                <path d="M465.4 65h-220c-12.2 0-22.1-9.9-22.1-22.1s9.9-22.1 22.1-22.1h220c12.2 0 22.1 9.9 22.1 22.1S477.6 65 465.4 65zM325 166.6H135c-12.2 0-22.1-9.9-22.1-22.1s9.9-22.1 22.1-22.1h190c12.2 0 22.1 9.9 22.1 22.1s-9.9 22.1-22.1 22.1z" className="styles-module--red--1ezO4">
                </path>
                <path d="M260.9 272.3H32.6c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1H261c12.2 0 22.1 9.9 22.1 22.1-.1 12.2-10 22.1-22.2 22.1zM325 374.7H135c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1h190c12.2 0 22.1 9.9 22.1 22.1 0 12.3-9.9 22.1-22.1 22.1zm140.4 103h-220c-12.2 0-22.1-9.9-22.1-22.1s9.9-22.1 22.1-22.1h220c12.2 0 22.1 9.9 22.1 22.1s-9.9 22.1-22.1 22.1z" className="styles-module--green--256nl">
                </path>
              </svg>
              <span className="styles-module--name--1on7F">Cryptowatch</span>
            </div>
          </a>
          <nav className="styles-module--hidden--1NLv8 styles-module--nav--209zA">
            <ul className="styles-module--account--DBMU8">
              <li>
                <a className="styles-module--button--2Ee5O styles-module--account__login--2yDYu" href="/account/login">Sign In</a>
              </li>
              <li className="styles-module--account__signup__wrapper--tF_hJ">
                <a className="styles-module--button--3mj1A styles-module--account__signup--3oZQy" data-test="cta" href="/account/create">Create Dashboard</a>
              </li>
            </ul>
            <ul className="styles-module--links--2ex6S">
              <li>
                <a href="/charts" className="styles-module--link--3wwVU">
                  <span className="styles-module--linkText--1Jl35">Charts</span>
                </a>
              </li>
              <li>
                <a href="/assets" className="styles-module--link--3wwVU">
                  <span className="styles-module--linkText--1Jl35">Assets</span>
                </a>
              </li>
              <li>
                <a href="/nft-prices" className="styles-module--link--3wwVU">
                  <span className="styles-module--linkText--1Jl35">NFTs</span>
                </a>
              </li>
              <li>
                <a href="/exchanges" className="styles-module--link--3wwVU">
                  <span className="styles-module--linkText--1Jl35">Exchanges</span>
                </a>
              </li>
              <li>
                <a href="/desktop" className="styles-module--link--3wwVU">
                  <span className="styles-module--linkText--1Jl35">Desktop</span>
                </a>
              </li>
              <li>
                <a href="/mobile" className="styles-module--link--3wwVU">
                  <span className="styles-module--linkText--1Jl35">Mobile</span>
                </a>
              </li>
            </ul>
            <dl className="styles-module--menu--29x5-">
              <dt>
                <button type="button" className="styles-module--menu__title--egEo3 ">More</button>
              </dt>
              <dd className="m-0 hidden">
                <a className="styles-module--menu__link--2DE23" href="/pricing">Pricing</a>
              </dd>
              <dd className="m-0 hidden">
                <a className="styles-module--menu__link--2DE23" href="/markets">Markets</a>
              </dd>
              <dd className="m-0 hidden">
                <a className="styles-module--menu__link--2DE23" href="/correlations">Correlations</a>
              </dd>
              <dd className="m-0 hidden">
                <a className="styles-module--menu__link--2DE23" href="/products/cryptocurrency-market-data-api">WebSockets API</a>
              </dd>
              <dd className="m-0 hidden">
                <a className="styles-module--menu__link--2DE23" href="/converter">Converter</a>
              </dd>
            </dl>
            <div className="Search-module--container--1vfgW">
              <input type="text" className="Search-module--input--2U4qh" placeholder="Search..." tabindex="0" value="">
            </div>
          </nav>
          <button aria-label="Menu toggle" className="styles-module--toggle--3_Yrd" type="button">
          </button>
        </div>
        </section>
      
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-slate-900">
        <h1 className="text-6xl font-bold text-white">
          Welcome to{' '}
          <a className="text-red-600 " href="https://youtu.be/dQw4w9WgXcQ">
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

            </p>
          </a>

          <a
            href="https://youtu.be/UrbD0F91yVk"
            className="mt-6 w-96 rounded-xl border border-red-600 p-6 text-red-600 text-left hover:text-white focus:text-white"
          >
            <h3 className="text-2xl font-bold ">BoneZlel &rarr;</h3>
            <p className="mt-4 text-xl text-white">
              Sou o marco e sou programador , não gosto de pessoas de cor!
            </p>
          </a>

          <a
            href="https://youtu.be/CSwNHs-mgCc"
            className="mt-6 w-96 rounded-xl border border-red-600 p-6 text-red-600 text-left hover:text-white focus:text-white"
          >
            <h3 className="text-2xl font-bold ">Katotas &rarr;</h3>
            <p className="mt-4 text-xl text-white">
              Broda
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
