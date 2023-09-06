import React from 'react'
import Header from '../componants/Header/Header'
import { Hero } from '../componants/Hero/Hero'
import { Company } from '../componants/Company/Company'

export const Home = () => {
  return (
   <div>
     <Header></Header>
     <Hero></Hero>
     <Company></Company>
   </div>
  )
}
