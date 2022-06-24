import { footerData } from '../data/footerData'
import './styles/footer.css'
import { RiVisaFill } from 'react-icons/ri'
import { SiPayoneer, SiTripadvisor } from 'react-icons/si'
import { FaCcMastercard } from 'react-icons/fa'
import { FaGooglePay, FaCcStripe } from 'react-icons/fa'
import { GrGooglePlus } from 'react-icons/gr'
import { GiTripleCorn } from 'react-icons/gi'



export default function Footer() {
    return (
        <div className='container FooterMainWrapper'>
            <div className='footerlinkDivStyle'>
                <LinkComp routeData={footerData} />
            </div>

            <div className='footerPaymentDetails'>
                <PaymentComp
                    title={"Payment Methods"}
                    RiVisaFill={RiVisaFill}
                    SiPayoneer={SiPayoneer}
                    FaCcMastercard={FaCcMastercard}
                    FaGooglePay={FaGooglePay}
                />
                <PaymentComp
                    title={"Our Partners"}
                    RiVisaFill={GrGooglePlus}
                    SiPayoneer={SiPayoneer}
                    FaCcMastercard={SiTripadvisor}
                    FaGooglePay={FaCcStripe}
                />

            </div>
        </div>
    )
}

const LinkComp = ({ routeData }) => (


    <div className='footerLinkWrapperDiv'>
        {
            routeData.map(data => (
                <div key={data.id} className="footerLinkContentWrapper">
                    <h3>{data.title}</h3>
                    {
                        data.routeName.map(route => (
                            <p key={route.id}>{route.listname}</p>
                        ))
                    }
                    <div className='footerSocialIconWrapper'>
                        {
                            data.icon && data.socialIcon.map(iconData => <span className='footericon'>{iconData.icons}</span>)
                        }
                    </div>

                </div>
            ))
        }
    </div>

)


const PaymentComp = ({ title, RiVisaFill, SiPayoneer, FaCcMastercard, FaGooglePay }) => (
    <div>
        <p className='paymentText'>{title}</p>
        <div className='paymentCardIconWrapper'>
            <span><RiVisaFill size={35} color="blue" /></span>
            <span><SiPayoneer size={35} color="blue" /></span>
            <span><FaCcMastercard size={35} color="red" /></span>
            <span><FaGooglePay size={35} color="blue" /></span>
        </div>
    </div>
)
