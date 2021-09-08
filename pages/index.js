import Head from 'next/head'
import SearchBar from "../Components/SearchBar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>MictlanExplorer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <SearchBar type="text" placeholder="Search" />

    </div>
  )
}
