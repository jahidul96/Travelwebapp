import React, { useEffect, useState } from 'react'
import AppUi from '../components/AppUi'
import Footer from '../components/Footer'
import Navbar, { PrenavComp } from '../components/Navbar'
import { DownNavbar, NewsLetter } from '../components/reuse/Reuseble'
import { SubHotelComp } from '../components/SubComponent/SubCategoryComp'
import './styles/hotel.css'

export default function Hotel() {
    return (
        <div>
            <div className='smallScreenPrenav'>
                <PrenavComp />
            </div>
            <Navbar />
            <DownNavbar />
            <div className="homeShowCaseContainer">
                <div className='HotelShowCase'>
                    <div className='hotelSubStyles container'>
                        <div className='hotelTitleWrapper'>
                            <h1>Hotels </h1>
                            <span>.</span>
                        </div>
                        <SubHotelComp />
                    </div>
                </div>
            </div>

            <div className='container'>
                <NewsLetter />
            </div>
            <AppUi />
            <Footer />
        </div>
    )
}
