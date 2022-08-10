import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";


export default function search() {
  return (
    <div>
      <Head>
        <title>
          Search Page
        </title>
      </Head>
      {/* Search header */}
      <SearchHeader/>

      {/* Search Results */}
      <SearchResults/>
      
    </div>
  )
}
