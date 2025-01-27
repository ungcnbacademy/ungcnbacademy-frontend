'use client'
import React from 'react'

export default function ModuleDetails({params}) {
  const unwrappedParams = React.use(params);
  console.log(unwrappedParams)
  return (
    <div>ModuleDetails</div>
  )
}
