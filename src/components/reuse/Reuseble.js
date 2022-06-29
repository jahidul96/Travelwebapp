import './reuse.css'
import { FiChevronDown } from 'react-icons/fi'
import { BiUpArrowAlt } from 'react-icons/bi'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowUpRightCircleFill, BsArrowRight } from 'react-icons/bs'
import { MdOutlineMyLocation } from 'react-icons/md'
import { FaEnvelopeOpenText } from 'react-icons/fa'

import { AiFillStar } from 'react-icons/ai'

export const SearchBar = ({ placeholder, BiSearch, size }) => (
    <div className="searchBar">
        <input placeholder={placeholder} />
        <span><BiSearch size={size} /></span>
    </div>
)

export const DownNavbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className='container downnavBar'>
            <div className='menuNavDiv' onClick={() => setShowMenu(!showMenu)}>
                <div>
                    <h4>Menu</h4>
                    {
                        showMenu ? <span><BiUpArrowAlt size={20} /></span> : <span><FiChevronDown size={20} /></span>
                    }

                </div>
                {
                    showMenu && <ul className='smallScreenNavItem'>
                        <li><Link className='link' to="/hotels">Hotel</Link></li>
                        <li><Link className='link' to="/flights">Flights</Link></li>
                        <li>Trains</li>
                        <li>Cars</li>
                        <li>Tours And Tickets</li>
                        <li>Bundle and Save</li>
                        <li>AttracTions</li>
                        <li>Rewards</li>
                        <li>Deals</li>
                    </ul>
                }


            </div>
            <ul>
                <li><Link className='link' to="/hotels">Hotel</Link></li>
                <li><Link className='link' to="/flights">Flights</Link></li>
                <li>Trains</li>
                <li>Cars</li>
                <li>Tours And Tickets</li>
                <li>Bundle and Save</li>
                <li>AttracTions</li>
                <li>Rewards</li>
                <li>Deals</li>
            </ul>
        </div>
    )
}


export const Ratings = ({ rating }) => (
    <div style={{
        marginTop: -5
    }}>
        {
            rating == 5 ? (
                <div>
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                </div>
            ) : rating == 4 ? (
                <div>
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                </div>
            ) : rating == 3 ? (
                <div>
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                </div>
            ) : rating == 2 ? (
                <div>
                    <AiFillStar size={16} color={"orange"} />
                    <AiFillStar size={16} color={"orange"} />
                </div>
            ) : <AiFillStar size={16} color={"orange"} />
        }
    </div>
)


export const TextComp = ({ title }) => (
    <div className='textCompContainer'>
        <h1>{title}</h1>
    </div>
)


export const NewsLetter = () => {
    return (
        <div className='newsletterDiv'>
            <div className='newsLetterIconDiv'>
                <FaEnvelopeOpenText className='envolopeIcon' />
            </div>
            <div className='newsLetterBrifDiv'>
                <h4>Want to save up to 50% when you travel?</h4>
                <p>
                    Yes, I'd like to save up to 50% on travel! Please send me exclusive deals and updates.
                </p>
            </div>
            <div className='newsLetterInputDiv'>
                <input />
                <button>Subscribe</button>
            </div>
        </div>
    )
}



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const tourResponsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1000 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1000, min: 767 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet2: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

export const TourDetailsBtn = ({ BsArrowRight, BsArrowUpRightCircleFill, text }) => (
    <div className='TourDetailsBtnStyles'>
        <div>
            <span><BsArrowUpRightCircleFill size={20} /></span>
            <p>{text}</p>
        </div>
        <BsArrowRight size={20} />
    </div>

)


export const MultiCarousel = ({ addMultiSliderData, tour }) => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={tour ? tourResponsive : responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            className="container carouselContainer"

        >
            {
                tour ? (
                    addMultiSliderData.map(slideData => (
                        <div key={slideData.id} className="tourWrapper" >
                            <img src={slideData.image} alt="tourImage" />
                            <div className='tourDetailsBtnContainer'>
                                <h3>{slideData.countryName}</h3>
                                <div>
                                    <TourDetailsBtn
                                        BsArrowUpRightCircleFill={BsArrowUpRightCircleFill}
                                        BsArrowRight={BsArrowRight}
                                        text={"Flights"}
                                    />
                                    <TourDetailsBtn
                                        BsArrowUpRightCircleFill={MdOutlineMyLocation}
                                        BsArrowRight={BsArrowRight}
                                        text={"Travel Guide"}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                ) :

                    addMultiSliderData.map(slideData => (
                        <div key={slideData.id} className='carouselImageWrapper'>
                            <img src={slideData.image} alt="add" />
                        </div>
                    ))

            }
        </Carousel>
    )
}


