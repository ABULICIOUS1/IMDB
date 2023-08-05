import Image from 'next/image'

const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {
  const res = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US?api_key='+API_KEY,)
  const data = res.json()
 console.log(data.results);
  return (
    <main>
    

    </main>
  )
}
