import Coins from '../Components/Coins';
import SearchBar from "../Components/SearchBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MictlanExplorer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <SearchBar type="text" placeholder="Search" />
      <Coins />
    </div>
  );
};
