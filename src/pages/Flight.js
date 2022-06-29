import React from 'react';
import './styles/flight.css'
import Navbar, { PrenavComp } from '../components/Navbar'
import { DownNavbar } from '../components/reuse/Reuseble'
import { FlightComp } from '../components/SubComponent/SubCategoryComp'
import CategoryTabBar from '../components/CategoryTabBar';
import { flightTabName } from '../data/TravelData';
import AppUi from '../components/AppUi'
import Footer from '../components/Footer'

export default function Flight() {
    return (
        <div>
            <div className='smallScreenPrenav'>
                <PrenavComp />
            </div>
            <Navbar />
            <DownNavbar />
            <div className="homeShowCaseContainer">
                <div className='flghtShowCase'>
                    <div className='hotelSubStyles container'>
                        <div className='hotelTitleWrapper'>
                            <h1>Flights </h1>
                            <span>.</span>
                        </div>
                        <div className='flightCompFlightPageWrapper'>
                            <FlightComp />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='container '
                style={{
                    marginBottom: 60
                }}
            >
                <CategoryTabBar
                    categoryTabName={flightTabName}
                />
            </div>

            <AppUi />
            <Footer />
        </div>
    )
}
