import React from 'react'
import Hero from '../Component/Hero/Hero'
import Offers from '../Component/Offers/Offers'
import Popular from '../Component/Popular/Popular'
import NewCollections from '../Component/NewCollections/NewCollections'
import NewsLetter from '../Component/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Shop