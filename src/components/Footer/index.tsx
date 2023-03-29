import React from 'react'
import UISendEmailButton from '../Button/UISendEmailButton'
import UILogo from '../Logo'
import { UIText } from '../Text/UIText'

const UIFooter = (): JSX.Element => {
  const renderTitle = (text: string): JSX.Element => {
    return (
      <div className="mb-5">
        <UIText text={text} onlySize="h5" font="space-mono" />
      </div>
    )
  }
  const renderContent = (text: string): JSX.Element => {
    return <UIText text={text} onlySize="default" color="gray" />
  }
  return (
    <div className="bg-black-secondary p-10 border-t-2 border-black">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 tablet:grid-cols-[500px] desktop:grid-cols-footer gap-10">
        <div>
          <div className="mb-5">
            <UILogo />
          </div>
          {renderContent('NFT marketplace UI created with Anima for Figma.')}
        </div>
        <div>
          {renderTitle('Explore')}
          {renderContent('Marketplace')}
          {renderContent('Rankings')}
          {renderContent('Connect a wallet')}
        </div>
        <div>
          {renderTitle('Join Our Weekly Digest')}
          {renderContent(
            'Get exclusive promotions & updates straight to your inbox.',
          )}
          <div className="tablet:w-[450px] mt-5">
            <UISendEmailButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UIFooter
