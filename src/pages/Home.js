import './styles/home.css'
import { BsCheck } from 'react-icons/bs'


import Navbar, { PrenavComp } from '../components/Navbar'
import { DownNavbar, MultiCarousel, TextComp } from '../components/reuse/Reuseble'
import CategoryTabBar from '../components/CategoryTabBar'
import { categoryTabName } from '../data/TravelData'
import { addMultiSliderData, tourPlace } from '../data/multiSliderData'

import TabComp from '../components/Tab'
import { famousHotel, recomendedPlace, renatlCars } from '../data/RecomendedPlace'
import AppUi from '../components/AppUi'
import Footer from '../components/Footer'


export default function Home() {

    return (
        <div>
            <div className='smallScreenPrenav'>
                <PrenavComp />
            </div>
            <Navbar />
            <DownNavbar />


            <div className="homeShowCaseContainer">
                <div className='HomeShowCase'>
                    <CategoryTabBar categoryTabName={categoryTabName} />
                </div>
            </div>


            <div className='container '>
                <div className='covidWarning'>
                    <p>Border Reopeaning</p>
                    <div className='blueCovidMiddleDiv'>
                        <span className='covidWhiteDiv'></span>
                    </div>
                    <p>Travel Abroad Before Like Covid.</p>
                </div>
            </div>



            <MultiCarousel addMultiSliderData={addMultiSliderData} />

            {/* info comp */}

            <div className=' homeBrifContainer'>
                <h2>Countries/regions open for travel from AnyWhere</h2>
                <div className='homeTravelIconAndRule'>
                    <div>
                        <span><BsCheck size={20} color="blue" /></span>
                        <p>Travel possible in both directions
                        </p>
                    </div>
                    <div className='brifChildMiddleDiv'>
                        <span><BsCheck size={20} color="blue" /></span>
                        <p>No quarantine or less 24h quarantine
                        </p>
                    </div>
                    <div>
                        <span><BsCheck size={20} color="blue" /></span>
                        <p>Great Deals
                        </p>
                    </div>
                </div>
            </div>



            {/* text Comp */}
            <TextComp title={"Popular Places"} />

            {/* tabComp */}
            <div className='container'>
                <TabComp
                    recomendedPlace={recomendedPlace}

                />
            </div>

            {/* text Comp */}
            <TextComp title={"Give a World Tour"} />

            {/* multi carousel comp */}
            <MultiCarousel addMultiSliderData={tourPlace} tour={true} />


            {/* text Comp */}
            <TextComp title={"Popular Hotels"} />

            {/* tabComp */}
            <div className='container'>
                <TabComp
                    recomendedPlace={famousHotel}
                    priceTag={true}
                />
            </div>


            {/* text Comp */}
            <TextComp title={"Rent a Car"} />

            {/* tabComp */}
            <div className='container'>
                <TabComp
                    recomendedPlace={renatlCars}
                    priceTag={true}
                />
            </div>

            <AppUi />
            <Footer />
        </div>
    )
}
