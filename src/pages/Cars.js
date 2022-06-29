import Navbar, { PrenavComp } from '../components/Navbar'
import { DownNavbar } from '../components/reuse/Reuseble'
import { SubHotelComp } from '../components/SubComponent/SubCategoryComp'
import './styles/cars.css'
import Footer from '../components/Footer'

import CsuppotImg from '../images/cus.jpg'
import Nofess from '../images/nofees.jpg'
import Cancel from '../images/cancel.jpg'
import AppUi from '../components/AppUi'

export default function Cars() {
    return (
        <div>
            <div className='smallScreenPrenav'>
                <PrenavComp />
            </div>
            <Navbar />
            <DownNavbar />
            <div className="homeShowCaseContainer">
                <div className='HotelShowCase cartShowCase'>
                    <div className='hotelSubStyles container'>
                        <div className='hotelTitleWrapper'>
                            <h1>Cars Rental</h1>
                            <span>.</span>
                        </div>
                        <div className='carRentalShwocaseWrapper'>
                            <SubHotelComp
                                placeholder="Destination"
                                placeholder2="Search.."
                                times="1 Day"
                                checkin="Pick up Date"
                                pickupDates="fri 24 22"
                                dispatch="Rangpur"
                            />
                            <div className='carsCheckBoxWrapper'>
                                <input type={'checkbox'} />
                                <p>Drop in Extact Location</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <CustomerSupport />
            </div>
            <AppUi />
            <Footer />
        </div>
    )
}

const customersupportData = [
    {
        id: 1,
        image: Cancel,
        heading: 'Free Cancellations',
        text: "Most car rental bookings have no cancellation fee when canceled before pick-up."
    },
    {
        id: 2,
        image: Nofess,
        heading: 'No Credit Card Fees',
        text: "We won't charge you an extra fee when paying by credit card."
    },
    {
        id: 3,
        image: CsuppotImg,
        heading: 'Customer Support',
        text: "One-on-one support in multiple languages."
    },
]

const CustomerSupport = () => {
    return (
        <div className='customersupportDiv'>
            {
                customersupportData.map(data => (
                    <div
                        key={data.id}
                        className="customerItemDiv"
                    >
                        <div className='customerDivImgWrapper'>
                            <img
                                src={data.image}
                                alt={data.heading}
                            />
                        </div>
                        <h3>{data.heading}</h3>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    )
}