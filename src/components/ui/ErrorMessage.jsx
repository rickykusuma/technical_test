import React from 'react'

const ErrorMessage = ({ errorMessage, className }) => {
  return <p className={` text-[#E53E3E] text-helper ${className}`}>{errorMessage}</p>
}

export default ErrorMessage
