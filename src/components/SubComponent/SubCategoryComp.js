import './styles/subcategory.css'
import { AiOutlineDown } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'



export const SubHomeComp = () => {
    return (
        <div className='subHomeContainerStyle'>
            {/* destinatin div */}
            <Destination title="Destination/Hotel" placeholder={'Type your destinatin'} />

            {/* checkinDiv */}
            <Checkin />

            {/* roomandguestDiv */}
            <RoomAndGuest />

            {/* search div */}
            <Destination extra={true} title="KeyWord (Optional)" placeholder={'AirPort, station, hotel name...'} />

            {/* searcIcon div */}

            <SearchIcon size={40} width={100} height={70} />
        </div>
    )
}

const Destination = ({ title, placeholder, extra }) => (
    <div
        className={extra ? 'destinationHomesubDiv extraDestinatinDivStyle' : "destinationHomesubDiv"}
    >
        <p>{title}</p>
        <input placeholder={placeholder} />
    </div>
)



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

const SearchIcon = ({ width, height, size }) => (
    <div className='SearchIconWrapper' style={{ width: width, height: height }}>
        <span><BiSearch size={size} color="#fff" /></span>
    </div>
)