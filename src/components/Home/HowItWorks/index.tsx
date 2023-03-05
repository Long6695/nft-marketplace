import React from 'react'
import WrapperHeaderSection from '../HeroSection/WrapperHeaderSection'
import Cards from './Cards'

const UIHowItWorks = (): JSX.Element => {
  return (
    <div>
      <WrapperHeaderSection
        title="How It Works"
        description="Find Out How To Get Started"
      />
      <Cards />
    </div>
  )
}

export default UIHowItWorks
