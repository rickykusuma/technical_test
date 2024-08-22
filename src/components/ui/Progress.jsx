import React from 'react'

const Progress = ({ width, value }) => {
  return (
    <div className={`h-2 ${width ? width : 'w-full'} rounded-full bg-gray-200 dark:bg-navy-700`}>
      <div
        className={`flex h-full items-center justify-center rounded-full bg-darkBlue-500 dark:bg-darkBlue-400`}
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

export default Progress
