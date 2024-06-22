import React from 'react'

export default function Connect({title , img}) {
  return (
    <>
    <div>{title}</div>
    <img src={img} alt="" />
    </>
  )
}
