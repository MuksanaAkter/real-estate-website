import React from 'react'
import Header from '../componants/Header/Header'
import { Hero } from '../componants/Hero/Hero'
import { Company } from '../componants/Company/Company'
import { Residencies } from '../componants/Residencies/Residencies'
import { FaqPart } from '../componants/FAQ/FaqPart'
import { Contact } from '../componants/Contact/Contact'

export const Home = () => {
  return (
   <div>
     <Header></Header>
     <Hero></Hero>
     <Company></Company>
     <Residencies></Residencies>
     <FaqPart></FaqPart>
     <Contact></Contact>
   </div>
  )
}
