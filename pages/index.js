import Head from 'next/head'
import {DogCard} from '../components/user/DogCard'
export default function Home() {
  const dogs = [
    {
      name: 'Bean',
      images: ['/avatars/bean.png', '/avatars/bean@2x.png']
    },
    {
      name: 'Bug',
      images: ['/avatars/bug.png', '/avatars/bug@2x.png']
    },
    {
      name: 'Cheddar',
      images: ['/avatars/cheddar.png', '/avatars/cheddar@2x.png']
    },
    {
      name: 'Clover',
      images: ['/avatars/clover.png', '/avatars/clover@2x.png']
    },
    {
      name: 'Goose',
      images: ['/avatars/goose.png', '/avatars/goose@2x.png']
    },
    {
      name: 'Wiggles',
      images: ['/avatars/wiggles.png', '/avatars/wiggles@2x.png']
    },
    {
      name: 'Yogi',
      images: ['/avatars/yogi.png', '/avatars/yogi@2x.png']
    },
  ]
  return (
    <>
    <Head>
      <title>Dog Debugger | By James Todd</title>
      {/* <link rel="favicon" href="/icons/favicon.ico"/> */}
      <link rel="shortcut icon" type="image/jpg" href="/icons/favicon.png"/>
    </Head>
    <div className="page-container bg-yellow home-container">
      <header className="home-header">
        <h1 className="light">DOG DEBUGGER</h1>
        <a href="https://jamestodd.dev" target="_blank">
          <span className="subheading">By James Todd</span>
        </a>
      </header>
      <nav className="contacts">
        <header className="menu-header">
          <h2>Start A Conversation</h2>
          <span className="subheading-2">Select a dog to start a conversation</span>
        </header>
        <ul className="contact-list">
          {dogs.map(dog=> <li key={dog.name} className="list-item"><DogCard dog={dog}/></li>)}
        </ul>
      </nav>
    </div>
    </>
  )
}
