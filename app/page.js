import Image from 'next/image'
import Item from './components/Item';

const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {



const genre= searchParams.genre || "now_playing";

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${API_KEY}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};



const res = await fetch(`https://api.themoviedb.org/3/movie/${genre}?language=en-US&`, requestOptions)

if (res){
  const resJson = await res.json()

  var allResults = resJson.results
}


  return (
    <main className='max-w-screen'>
      <div className='grid grid-cols-1 gap-2 mt-3 rounded-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
         {allResults.map((currentItem)=> <Item item={currentItem}/>)}
      </div>
      
 
    </main>
  )
}
