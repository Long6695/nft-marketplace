import React from 'react'
import Card from './Card'

const Cards = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10 tablet:flex-row mt-20">
      <Card
        image="/images/setup-wallet.png"
        title="Setup Your Wallet"
        description="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
      />
      <Card
        image="/images/create-collection.png"
        title="Create Collection"
        description="Upload your work and setup your collection. Add a description, social links and floor price."
      />
      <Card
        image="/images/start-earning.png"
        title="Start Earning"
        description="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
      />
    </div>
  )
}

export default Cards
