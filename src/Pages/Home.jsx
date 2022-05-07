import React from 'react'
import Banner from '../components/Banner'
import Cta from '../components/Cta'
import CtaWrapper from '../components/CtaWrapper'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import SocialConnect from '../components/SocialConnect'
import TopBar from '../components/TopBar'

function Home() {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Banner/>
    <CtaWrapper>
    <Cta/>
    <SocialConnect/>
    </CtaWrapper>
    <Footer/>
   
    <ScrollToTop/>
    </>
  )
}

export default Home