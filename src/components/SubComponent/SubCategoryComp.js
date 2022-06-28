import './styles/subcategory.css'
import { AiOutlineDown, AiFillCaretDown } from 'react-icons/ai'
import { BiSearch, BiUpArrow } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdFlight } from 'react-icons/md'
import { RiRemoteControl2Fill } from 'react-icons/ri'
import { useState } from 'react'

const inputStyle = {
    border: "none",
    height: 30,
    width: "60%",
    outline: "none",
    fontSize: 14
}

export const SubHotelComp = () => {


    return (
        <div className='subHomeContainerStyle'>
            <div
                className='destinationHomesubDiv'
            >
                <InputComp
                    placeholder="Destination.."
                    style={inputStyle}
                />
            </div>
            <Checkin />
            <RoomAndGuest />
            <div className='destinationHomesubDiv'>
                <InputComp
                    placeholder="Air/Hotel search.."
                    style={inputStyle}
                />
            </div>
            <SearchIcon
                classStyle={'SearchIconWrapper'}
                size={40}
            />


        </div>
    )
}

export const FlightComp = () => {



    return (
        <div className='flightContainer'>
            <div className='flightTopBar'>
                <MemberComp
                    MdFlight={MdFlight}
                    size={18}
                    text="Round-Trip"
                />
                <MemberComp
                    MdFlight={MdFlight}
                    size={18}
                    text="Adult"
                />
                <MemberComp
                    MdFlight={MdFlight}
                    size={18}
                    text="Economy"
                />
            </div>

            <div className='flightDownContainer'>
                <div className='flightInputContainer'>
                    <InputComp
                        placeholder={"City or Airport"}
                        style={inputStyle}
                    />
                    <div className='flightIconAndInputContainer'>
                        <div className='flightIconWrapper'>
                            <MdFlight className='flightIcon' />
                        </div>
                        <InputComp
                            placeholder={'Anywhere'}
                            style={inputStyle}
                        />
                    </div>
                </div>
                <div className='flightDateContainer'>
                    <InputComp
                        placeholder={"Any-Time"}
                        style={inputStyle}
                    />
                    <InputComp
                        placeholder={"Any-Date"}
                        style={inputStyle}
                    />
                </div>

                <SearchIcon
                    classStyle={'flightSearchIconBtn'}
                    size={40}
                />
            </div>
        </div>
    )
}

const InputComp = ({ placeholder, style }) => (
    <input
        placeholder={placeholder}
        style={style}
    />
)


const MemberComp = (props) => {
    const { MdFlight, size, text } = props

    const [showCard, setShowCard] = useState(false)
    return (
        <div className="memberComp">
            <MdFlight className="memberCompIcon" />
            <p>{text}</p>
            {
                showCard ?
                    <BiUpArrow
                        className="memberCompIcon"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowCard(false)}
                    />
                    : <AiFillCaretDown
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowCard(true)}
                        className="memberCompIcon"
                    />
            }

        </div>
    )
}




export const Destination = (props) => {
    const { title, placeholder, extra, style } = props
    return (
        <div
            className='destinationHomesubDiv'
        >
            <InputComp
                placeholder={placeholder}
                style={style}
            />
        </div>
    )
}





const Checkin = () => (
    <div className='checkinDiv'>
        <div>
            <p>Check in</p>
            <h4>Fri 24 Jun</h4>
        </div>
        <p>1 night</p>
        <div>
            <p>Check in</p>
            <h4>Fri 24 Jun</h4>
        </div>
    </div>
)


const RoomAndGuest = () => (
    <div className='roomandguestDiv'>
        <div>
            <p>Room and Guest</p>
            <p>1 Room 1 Adult</p>
        </div>
        <span>
            <AiOutlineDown size={20} />
        </span>
    </div>
)

const SearchIcon = ({ classStyle, size }) => (
    <div className={classStyle}>
        <span><BiSearch size={size} color="#fff" /></span>
    </div>
)