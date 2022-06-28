import './styles/subcategory.css'
import { AiOutlineDown, AiFillCaretDown } from 'react-icons/ai'
import { BiSearch, BiUpArrow } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdFlight } from 'react-icons/md'
import { RiRemoteControl2Fill } from 'react-icons/ri'
import { useState } from 'react'



export const SubHotelComp = () => {
    return (
        <div className='subHomeContainerStyle'>
            {/* destinatin div */}
            <Destination
                title="Destination/Hotel"
                placeholder={'Type your destination'}
            />

            {/* checkinDiv */}
            <Checkin />

            {/* roomandguestDiv */}
            <RoomAndGuest />

            {/* search div */}
            <Destination
                extra={true} title="KeyWord (Optional)"
                placeholder={'AirPort, station, hotel name...'}
            />

            {/* searcIcon div */}
            <SearchIcon
                classStyle={'SearchIconWrapper'}
                size={40}
            />


        </div>
    )
}

export const FlightComp = () => {

    const inputStyle = {
        border: "none",
        height: 30,
        width: "60%",
        outline: "none",
        fontSize: 16
    }

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
            <MdFlight size={size} />
            <p>{text}</p>
            {
                showCard ?
                    <BiUpArrow
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowCard(false)}
                        size={size} />
                    : <AiFillCaretDown
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowCard(true)} size={size}
                    />
            }

        </div>
    )
}




export const Destination = (props) => {
    const { title, placeholder, extra } = props
    return (
        <div
            className={extra ? 'destinationHomesubDiv extraDestinatinDivStyle' : "destinationHomesubDiv"}
        >
            <p>{title}</p>
            <InputComp placeholder={placeholder} />
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