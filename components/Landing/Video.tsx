import React from 'react'

const Video = () => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center">
    <div className="flex flex-col items-center gap-4 rounded-md overflow-hidden max-w-4xl">
      <video controls>
        <source src="https://blob.context.ai/2024MayAnalyticswBackground.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

    </div>
  </div>
  )
}

export default Video