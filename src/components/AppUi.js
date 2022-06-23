import './styles/appui.css'
import AppImage from '../images/a.jpg'
import QrImage from '../images/qr.png'
import { BsApple } from 'react-icons/bs'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

export default function AppUi() {
    return (
        <div className='appUiSection'>
            <div className='container appDetailsWrapper'>
                <div>
                    <img src={AppImage} alt="app" />
                </div>
                <div>
                    <div>
                        <h1>Your all-in-one travel app.</h1>
                        <p>Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!</p>
                    </div>
                    <div>
                        <div className='appuiBtnGroupStyle'>
                            <button>SMS</button>
                            <button>Email</button>
                        </div>
                        <div className='appQrCodeWrapperDiv'>
                            <div className='appBtnContainer'>
                                <div className='appBtn'>
                                    <span><BsApple size={20} /></span>
                                    <div>
                                        <p>Download on the</p>
                                        <p className='appStoreNameStyle'>App Store</p>
                                    </div>
                                </div>
                                <div className='appBtn'>
                                    <span><IoLogoGooglePlaystore size={20} /></span>
                                    <div>
                                        <p>Download on the</p>
                                        <p className='appStoreNameStyle'>App Store</p>
                                    </div>
                                </div>
                            </div>
                            <div className='qrImageWrapper'>
                                <img width={200} height={200} src={QrImage} alt='qrcode' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
