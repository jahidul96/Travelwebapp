import './flightsub.css'
import SigninImage from '../../images/login.png'
import { InputComp, SearchIcon } from '../SubComponent/SubCategoryComp'

export const StartJourney = () => {
    return (
        <div className='flightsubComStyles'>
            <h4>Start Your Journey Today!!.</h4>
            <p>Become a member!.and get your latest offer!</p>
            <button className='flghtSignInBtn'>Singin/Login</button>
            <div className='flightSubLinkWrapper'>
                <p>Booked as a Guest?</p>
                <a>Search Guest Booking By Emails!.</a>
            </div>
        </div>
    )
}


export const PriceFreazeComp = () => {
    return (
        <div className='priceFreazeCompContainer'>
            <div className='priceCompContentWrapper'>
                <div className='priceCompSigninImgWrapper'>
                    <img src={SigninImage} alt="signin" />
                </div>
                <div className='priceSignInDetailsContentWrapper'>
                    <h3>Signin/Login To View PricePackage!.</h3>
                    <div>
                        <button className='flghtSignInBtn'>Register</button>
                        <button className='flghtSignInBtn'>Login</button>
                    </div>
                    <div className='flightSubLinkWrapper'>
                        <p >Booked as a Guest?</p>
                        <a>Search Guest Booking By Emails!.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const FlightStatus = () => {
    return (
        <div className='flghtStausDiv'>
            <div className='fligtRadioCompDiv'>
                <RadioInputComp text="Flight Number" />
                <RadioInputComp text="Depture and Arrivle Time" />
            </div>
            <div className='paddingFlightSubWrapper'>
                <div className='flightSubSearchDiv'>
                    <InputComp
                        placeholder={'type flight number'} classname={'flightSerarchDivInputStyle'}
                    />
                    <SearchIcon
                        classStyle='flghtSubSeacrhWrapper'
                        classname="flghtSubSeacrhIconStyle"
                    />
                </div>
            </div>
        </div>
    )
}


const RadioInputComp = ({ text }) => (
    <div className='radioConatinerDiv'>
        <input type={'radio'} />
        <p>{text}</p>
    </div>
)