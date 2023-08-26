import Image from "next/image";
import Link from "next/link";
import React from "react";

function Item({ item: currentItem }) {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="p-4 text-center items-center cursor-pointer hover:border-2 shadow-sm ">
      <Link href={`/movie/${currentItem.id}`}>
        <div className="flex justify-center">
          <Image
            src={BASE_URL + currentItem.poster_path}
            width={100}
            height={100}
            alt="Loading......"
          />
        </div>
        <div className="text-xl font-bold mt-3">{currentItem.title}</div>
        <div className="truncate mt-3">{currentItem.overview}</div>
        <div>{currentItem.id}</div>
      </Link>
    </div>
  );
}

export default Item;
