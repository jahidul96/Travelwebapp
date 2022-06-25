import './styles/tab.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Ratings } from './reuse/Reuseble';
import { TbCurrencyTaka } from 'react-icons/tb'

export default function TabComp(props) {
    const { recomendedPlace, priceTag } = props


    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            <Tabs className={'tabsConatiner'}>
                <TabList className={'tablistContainer'}>
                    {
                        recomendedPlace.map(data => (
                            <Tab key={data.id} selectedClassName='active' className={'item'}>{data.tabName}</Tab>
                        ))
                    }
                </TabList>

                {
                    recomendedPlace.map(recoData => (
                        <TabPanel key={recoData.id}>
                            <div className='recomendedDataWrapper'>
                                {
                                    recoData.citydata.map(cdata => (
                                        <div key={cdata.id} className="recomendedImgWrapper">
                                            <img src={cdata.image} alt={cdata.name} />
                                            <div className='recomendedTextandRatingWrapper'>
                                                <p>{cdata.name}</p>
                                                <Ratings rating={cdata.rating} />
                                            </div>
                                            <div className='recomendedReviewWrapper'>
                                                <span>{cdata.rating}/5</span>
                                                <span>{cdata.reviews}(Review)</span>
                                            </div>

                                            {
                                                priceTag && <div className='recomendedPriceDiv'>
                                                    <span>From </span>
                                                    <div>
                                                        <TbCurrencyTaka size={22} color="blue" />
                                                        <p>{cdata.price}</p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    ))
                }



            </Tabs>
        </div>
    )
}
