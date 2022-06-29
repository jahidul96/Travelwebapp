import { FaHotel } from 'react-icons/fa'
import { MdOutlineFlight } from 'react-icons/md'
import { IoTrainSharp, IoCarSportSharp } from 'react-icons/io5'
import { GrDocumentText, GrMonitor } from 'react-icons/gr'
import { AiOutlineLock } from 'react-icons/ai'

export const categoryTabName = [
    {
        id: 1,
        name: 'Hotel',
        icon: <FaHotel size={20} />
    },
    {
        id: 2,
        name: 'Flights',
        icon: <MdOutlineFlight size={20} />
    },
    {
        id: 3,
        name: 'Trains',
        icon: <IoTrainSharp size={20} />
    },
    {
        id: 4,
        name: 'Cars',
        icon: <IoCarSportSharp size={20} />
    },

]



export const flightTabName = [
    {
        id: 1,
        name: 'MyBooking',
        icon: <GrDocumentText size={20} />
    },
    {
        id: 2,
        name: 'PriceFreaze',
        icon: <AiOutlineLock size={20} />
    },
    {
        id: 3,
        name: 'FlightStatus',
        icon: <GrMonitor size={20} />
    }

]