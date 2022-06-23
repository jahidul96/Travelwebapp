import './styles/categorytabbar.css';

import { useState } from 'react';


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
                            <h5>Trains components</h5>
                        </div>
                    ) : selectedTab == "Flights" ? (
                        <div>
                            <h5>Flights components</h5>
                        </div>
                    ) : selectedTab == "Cars" ? (
                        <div>
                            <h5>Cars components</h5>
                        </div>
                    ) : (
                        <div>
                            <h5>Home components</h5>
                        </div>
                    )

                }


            </div>

            <div>

            </div>
        </div>
    )
}
