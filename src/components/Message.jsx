import React from 'react'

const Message = ( {children, type} ) => {
  return (
    <div className={`m-2 border-4 border-x-red-800 px-2 text-red-900 ${type}`}>{children}</div>
  )
}

export default Message