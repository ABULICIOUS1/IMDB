import IdDetails from '@/app/components/IdDetails';
import React from 'react'

async function page({params}) {

    async function getMovie(movieId) {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjBlNDBhZDRkZTQ2YzI5ZmFkN2Q4YTg3NjVhNjUwZCIsInN1YiI6IjY0YzUzYTk4Y2FkYjZiMDE0NDBkNTc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GkL_hTKcw_ZpDpwZUch_pBMk4rY07CMJjtJNGKp66wg'
            }
          };
          
         const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
          
         return await res.json()
        
    }

    const movie = await getMovie(params.id)

  return (
    <div>
        <IdDetails movie={movie}/>
    </div>
  )
}

export default page