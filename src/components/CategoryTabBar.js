import './styles/categorytabbar.css';

import { useState } from 'react';
import { FlightComp, SubHotelComp } from './SubComponent/SubCategoryComp'
import { FlightStatus, PriceFreazeComp, StartJourney } from './AllPagesSubComp/FlightPageSubComp';


export default function CategoryTabBar({ categoryTabName, hometab }) {

    const [selectedTab, setSelectedTab] = useState(categoryTabName[0].name)

    const selectTab = (name) => {
        setSelectedTab(name)
    }




    return (
        <div className={hometab ? "container tabMainDiv" : "flightTabMainDiv"}>
            <div className={hometab ? "selecttedTabsContainer" : "flightTabStyleExtra"}>
                {
                    categoryTabName.map(tab => (
                        <div
                            key={tab.id}
                            onClick={() => selectTab(tab.name)}
                            className={hometab ? (tab.name == selectedTab ? "tabsItemWrapper tabs" : 'tabs') : (tab.name == selectedTab ? "flghtPageItemWrapper flghtPageTabs" : 'flghtPageTabs')}
                        >
                            <span className='tabIconWrapper'>{tab.icon}</span>
                            <p>{tab.name}</p>
                        </div>
                    ))
                }
            </div>
            {
                hometab ? <div className='selectedTabWrapper'>
                    {
                        selectedTab == "Trains" ? (
                            <div>
                                <SubHotelComp />
                            </div>
                        ) : selectedTab == "Flights" ? (
                            <div>
                                <FlightComp />
                            </div>
                        ) : selectedTab == "Cars" ? (
                            <div>
                                <FlightComp />
                            </div>
                        ) : (
                            <div>
                                <SubHotelComp />
                            </div>
                        )

                    }


                </div> : <div>
                    {
                        selectedTab == "FlightStatus" ? (
                            <FlightStatus />
                        ) : selectedTab == "PriceFreaze" ? (
                            <PriceFreazeComp />
                        ) : (
                            <StartJourney />
                        )
                    }
                </div>
            }


            <div>

            </div>
        </div>
    )
}


// className={tab.name == selectedTab ? "tabsItemWrapper tabs" : 'tabs'}