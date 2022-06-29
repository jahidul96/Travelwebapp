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
                        <SubHotelComp
                            placeholder="Destination"
                            placeholder2="Air, Hotel etc.."
                            times="1 Nights"
                            checkin="Check in"
                            pickupDates="fri 24 22"
                            dispatch="Check Out"
                            dispatchDate="fri 25 22"
                        />
                    </div>
                </div>
            </div>

            <div className='container hotelNewsLetter'>
                <NewsLetter />
            </div>
            <AppUi />
            <Footer />
        </div>
    )
}
