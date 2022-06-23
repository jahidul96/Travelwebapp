import './styles/nav.css'
import logo from '../images/pain.png'
import { FaMobileAlt } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { BsChevronDown } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { SearchBar } from './reuse/Reuseble'

export default function Navbar() {
    return (
        <div className='nav container'>
            <div className='logoWrapper'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='searchWrapper'>
                    <SearchBar placeholder={'Enter destination...'} BiSearch={BiSearch} size={22} />
                </div>
            </div>

            <div className='navRightContentWrapper'>
                <div className='appIconWrapper'>
                    <FaMobileAlt className='mbleIcon' size={16} />
                    <span> App</span>
                </div>

                <p className='helpText'>Help</p>
                <p className='divider'>|</p>
                <div className='languageIconWrapper'>
                    <TbWorld className="TbWorldIcon" size={14} />
                    <BsChevronDown size={14} />

                </div>

                <div className='moneyWrapper'>
                    <span>USD</span>
                    <BsChevronDown className='downArrowIcon' size={14} />

                </div>

                <p className='divider'>|</p>

                <div className='loginWrapper'>
                    <span>Sing in/Register</span>
                </div>

            </div>
        </div>
    )
}
