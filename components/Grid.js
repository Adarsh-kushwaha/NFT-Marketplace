import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import axios from 'axios';
//for dummy nft data
import { NFT_DATA } from '../helpers/constant';

const Grid = (props) => {
  const [nft, setNft] = useState([]);

  const getNftData = async () => {
    const response = await axios('#');
    //replace # by your api
    const data = await response.json();

    console.log(data);

    setNft(data.Nft);
  };

  useEffect(() => {
    // comment out when we fetch the  data using api
    // getNftData();
    console.log(NFT_DATA);
  }, []);

  const renderNft = (nft) => {
    return (
      <div className="p-6 bg-white border border-gray-600 rounded-lg ml-4 mr-4">
        <div className="overflow-hidden">
          <img
            className="object-cover w-full h-48"
            src={nft.image}
            alt="Flower and sky"
          />
        </div>
        <h3 className="mt-2 font-mono leading-normal text-black-400  transition translation-all ">
          {nft.description}
        </h3>
        <h3 className="font-mono"> {nft.title}</h3>
        <a className="text-blue-400 font-mono" href="#">
          Buy now
        </a>
      </div>
    );
  };
  return (
    <>
      <div
        id="main"
        className="inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full mt-6 pr-8 pl-8"
      >
        {NFT_DATA.length > 0 && NFT_DATA.map(renderNft)}
      </div>
    </>
  );
};
export default Grid;
