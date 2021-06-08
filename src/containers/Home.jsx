import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/Home.scss'
import Welcome from '../components/Welcome'
import Separator from '../components/Separator';
import Search from '../components/Search';
import WeatherCity from '../components/WeatherCity';
import Week from '../components/Week';
import Day from '../components/Day'

const Home = ({data, cityInfo}) => {
    let dayId = 0;

    
    // ESTO NO FUNCIONÓ
    // const todayDate = new Date()
    // const day = getDays(todayDate.getDay())[dayId]
    const getDays = day => {
        let daysResult = []
        let currentDay = day+1
        for (let i = 0; i < 8; i++) {
            switch (currentDay) {
                case 1:
                    daysResult.push('Monday')
                    currentDay++
                    break;
                case 2:
                    daysResult.push('Tuesday')
                    currentDay++
                    break;
                case 3:
                    daysResult.push('Wednesday')
                    currentDay++
                    break;
                case 4:
                    daysResult.push('Thursday')
                    currentDay++
                    break;
                case 5:
                    daysResult.push('Friday')
                    currentDay++
                    break;
                case 6:
                    daysResult.push('Saturday')
                    currentDay++
                    break;
                case 7:
                    daysResult.push('Sunday')
                    currentDay=1
                    break;
            }
        }
        return daysResult
    }
    
    return(
        <>
            <Welcome/>
            <Separator/>
            <Search/>
            { cityInfo.length > 0 && 
                <WeatherCity
                    {...cityInfo}
                />
            
            }
            <Separator/>
            { data.length > 0 && 
                <Week>
                    {
                        data[0].daily.map( day=>
                            <Day 
                                key={++dayId}
                                {...day}                  
                            />
                        )
                    }
                </Week>
            }
        </>
    );
}

const mapStateToProps = state => {
    return {
        data: state.data,
        cityInfo: state.cityInfo
    }
}

export default connect(mapStateToProps, null)(Home);