import React from 'react'

const PageHeading = ({ heading } : { heading: string }) => {
  return (
    <h1 className="page-heading">{heading}</h1>
  )
}

export default PageHeading