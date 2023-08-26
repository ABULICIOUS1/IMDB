import Image from 'next/image';
import React from 'react'

function IdDetails({movie}) {
    const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";
    const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="mt-6 relative h-96 md:h-72 lg:h-96 xl:h-120">
    {/* Background backdrop image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${BACKDROP_BASE_URL}${movie.backdrop_path})`,
      }}
    ></div>

    {/* Poster image */}
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
      <Image src={POSTER_BASE_URL + movie.poster_path} width={200} height={300} />
    </div>

    {/* Movie description */}
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-1/2 p-4 bg-black bg-opacity-50 text-white">
      <h2 className="text-xl font-semibold">{movie.title}</h2>
      <p className="mt-2">{movie.overview}</p>
    </div>
  </div>
  
    //   <div className="mt-6 relative h-96 md:h-72 lg:h-96 xl:h-120 flex">
  //   {/* Background backdrop image */}
  //   <div
  //     className="flex-1 bg-cover bg-center"
  //     style={{
  //       backgroundImage:` url(${BACKDROP_BASE_URL+movie.backdrop_path})`,
  //     }}
  //   ></div>

  //   {/* Poster image */}
  //   <div className="p-4">
  //     <Image src={POSTER_BASE_URL + movie.poster_path} width={200} height={300} />
  //   </div>

  //   {/* Movie description */}
  //   <div className="p-4 bg-black bg-opacity-50 text-white">
  //     <h2 className="text-xl font-semibold">{movie.title}</h2>
  //     <p className="mt-2">{movie.overview}</p>
  //   </div>
  // </div>
);
}

    // <div className='mt-6'>
    //     <div className='flex justify-center'>
    //         <Image className='min-w-full aspect-[11/4]' src={BACKDROP_BASE_URL + movie.backdrop_path}
    //         width={1024}
    //         height={1000}
    //         />
    //     </div>
    // </div>
//   )
// }

export default IdDetails