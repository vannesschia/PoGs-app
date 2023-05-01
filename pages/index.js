import { Network, Alchemy } from 'alchemy-sdk'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import NftDisplay from '../components/NftDisplay'
import pogImg from '/Users/wenxi/Documents/POGS/pogs_eval/public/glowing_pog.png'
import Image from 'next/image'
import Modal from '../components/modal.js'


export default function Home() {
  //Fetch Data
  const [nft_data, set_nft_data] = useState()

  const settings = {
      apiKey: "7tEZWpah8Jw5f7t3olkRZEm85F9mFOi4",
      network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);


  useEffect(() => {
    alchemy.nft.getNftsForContract("0x1e1744ffd69296765f0447e88ac38be74a4ead13")
      .then((data) => {
        set_nft_data(data)
        console.log(data)
      });
  }, []);

  //Setter Function update information to Modal
  const setInfo = (shower, index) => {
    setShowModal(shower);
    setContent(nft_data.nfts[index].rawMetadata.attributes);
    setimgSrc(nft_data.nfts[index].rawMetadata.image);
    setIndexing(index);
  }
  
  const [showModal, setShowModal] = useState(false);
  const [Content, setContent] = useState([]);
  const [imgSrc, setimgSrc] = useState("");
  const [Indexing, setIndexing] = useState(0);

  return (
    <div style={{"backgroundColor": "black"}}>
      <Fragment>
      <Head>
        <title>PoGs</title>
      </Head>
      {/* Header */}
      <div class="mx-auto" style={{"backgroundColor": "black", "width": "80%"}}>
        <Image class="position-relative top-0 start-50 translate-middle-x" src={pogImg} alt="" width={400}/>
      </div>
      {/* Modal */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} content={Content} src={imgSrc} index={Indexing}></Modal>
      {/* NFT Gallery */}
      <div class="container text-center">
        {/* Individual NFTs */}
        <div class="row">
            { 
              nft_data && nft_data.nfts.map((nft, index) => {
                return <NftDisplay src={nft.rawMetadata.image} handleClick={setInfo} index={index} checkModal={showModal}/>
              })
            }
        </div>
      </div>
      </Fragment>
    </div>
  )
}
