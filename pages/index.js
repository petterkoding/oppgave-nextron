import Head from 'next/head'
import Cards from '../components/cards/Cards'
import { ChevronRightIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextron | IT hardware and servers</title>
        <meta name="description" content="Generated by create next app" />
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
