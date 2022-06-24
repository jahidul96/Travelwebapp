
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter } from 'react-icons/bs'
export const footerData = [
    {
        id: 1,
        title: "Contact us",

        routeName: [
            {
                id: 1,
                listname: "Customer Support"
            },
            {
                id: 2,
                listname: "Services Gurrante"
            },
            {
                id: 3,
                listname: "Website Feed Back"
            },
        ],
        icon: true,
        socialIcon: [

            {
                id: 1,
                icons: <BsFacebook size={18} />
            },
            {
                id: 2,
                icons: <BsYoutube size={18} />
            },
            {
                id: 3,
                icons: <BsInstagram size={18} />
            },
            {
                id: 4,
                icons: <BsTwitter size={18} />,
            },

        ]
    },
    {
        id: 2,
        title: "About us",
        routeName: [
            {
                id: 1,
                listname: "About Travel.com"
            },
            {
                id: 2,
                listname: "News"
            },
            {
                id: 3,
                listname: "Careers"
            },
            {
                id: 4,
                listname: "Terms and Condition"
            },
            {
                id: 5,
                listname: "Privacy and Setting"
            },
        ]
    }
]