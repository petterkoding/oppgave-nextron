import Head from 'next/head'
import Cards from '../components/cards/Cards'
import { ChevronRightIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'
import Hero from '../components/hero/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextron | Servers, storage and workstations</title>
        <meta name="description" content="React, CSS modules" />
        <meta name="robots" content="noindex,nofollow"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <div className="container navFlex">
          <div className="logo">Nextron</div>
          <ul>
            <li>systemkonfigurator</li>
            <li>løsninger</li>
            <li>komponenter</li>
            <li>kundeservice</li>
            <li><UserIcon className="icon"/></li>
          </ul>

          <div className="navSearch">
            <input type="text" placeholder="E.g. Supermicro"/>
            <button>
            <MagnifyingGlassIcon className="icon"/>
            </button>
          </div>

          <Bars3Icon className="burgerIcon"/>
        </div>
      </nav>
      <Hero/>

      <main className="container main">
       <h1 className="pageHeader">Servers and racks</h1>
       <div className="breadcrumb">
        Products
        <ChevronRightIcon className="icon"/>
        Servers
        <ChevronRightIcon className="icon"/>
        SuperMicro
        </div>
      <Cards/>
      </main>

    </div>
  )
}
