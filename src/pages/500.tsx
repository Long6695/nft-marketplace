import React from 'react'
const ServerError = (): JSX.Element => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <p className="text-h1">500 - Server-side error occurred</p>
    </div>
  )
}

export default ServerError
