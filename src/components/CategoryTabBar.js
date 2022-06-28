import './styles/categorytabbar.css';

import { useState } from 'react';
import { FlightComp, SubHotelComp } from './SubComponent/SubCategoryComp'


export default function CategoryTabBar({ categoryTabName }) {

    const [selectedTab, setSelectedTab] = useState(categoryTabName[0].name)

    const selectTab = (name) => {
        setSelectedTab(name)
    }

    const tabRouteName = categoryTabName.filter(ctab => ctab.name == selectedTab)


    return (
        <div className='container tabMainDiv'>
            <div className="selecttedTabsContainer">
                {
                    categoryTabName.map(tab => (
                        <div key={tab.id} onClick={() => selectTab(tab.name)} className={tab.name == selectedTab ? "tabsItemWrapper tabs" : 'tabs'}>
                            <span className='tabIconWrapper'>{tab.icon}</span>
                            <p>{tab.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className='selectedTabWrapper'>
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


            </div>

            <div>

            </div>
        </div>
    )
}
