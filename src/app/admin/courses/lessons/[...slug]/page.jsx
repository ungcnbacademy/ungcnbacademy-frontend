'use client'
import React from 'react'

export default function LessonDetails({params}) {
  const unwrappedParams = React.use(params);
  console.log(unwrappedParams)
  return (
    <div>ModuleDetails</div>
  )
}
