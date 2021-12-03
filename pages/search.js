import Head from "next/head";
import Header from "../components/Header"
function Search({ results}) {
    // console.log(results)
    return (        
        <div>
            <Head>
                <title>Search Results</title>
            </Head>
            <Header />

        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`).then(res => res.json());

    //After server rendered, results to client 
    return {
        props:{
            results: data
        }
    }
}
