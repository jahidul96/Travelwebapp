import { FaHotel } from 'react-icons/fa'
import { MdOutlineFlight } from 'react-icons/md'
import { IoTrainSharp, IoCarSportSharp } from 'react-icons/io5'
import { AiFillCodeSandboxCircle } from 'react-icons/ai'

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
    {
        id: 5,
        name: 'Tour and Tickets',
        icon: <AiFillCodeSandboxCircle size={20} />
    },
]
