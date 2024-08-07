import React from 'react'
import Header from '../componants/Header/Header'
import { Hero } from '../componants/Hero/Hero'
import { Company } from '../componants/Company/Company'
import { Residencies } from '../componants/Residencies/Residencies'
import { FaqPart } from '../componants/FAQ/FaqPart'
import { Contact } from '../componants/Contact/Contact'
import { Footer } from '../componants/Footer/Footer'
import Nav from '../componants/Nav/Nav'

export const Home = () => {
  return (
   <div>
    <Nav></Nav>
     <Hero></Hero>
     <Company></Company>
     <Residencies></Residencies>
     <FaqPart></FaqPart>
     <Contact></Contact>
     <Footer></Footer>
   </div>
  )
}
