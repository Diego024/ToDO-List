import React from 'react'
import { connect } from 'react-redux'
import { getWeather, getCityInfo } from '../actions'
import '../assets/styles/components/Search.scss'

//API REQUEST
import axios from 'axios'
const APIKEY = 'beaca4bcc204d0a948b5a75efba57d75'

const Search = (props) => { 

    const toggleSearchStyle = () => {
        let search = document.getElementById('search-container')
        search.classList.add('isCityFound')
        search.style.height = "10vh"
    }

    const handleKeyPress = event => {
        if(event.key === 'Enter') {
            event.preventDefault();
            getWeatherInfo(document.getElementById('search--input').value)
        }
    }

    const getWeatherInfo = city => {
        
        axios.get(`http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${APIKEY}&exclude=weather&q=${city}`)
        .then( cityInfo => {
            props.getCityInfo({ cityInfo: cityInfo.data })
            toggleSearchStyle()
            return axios.get(`https://api.openweathermap.org/data/2.5/onecall?appid=${APIKEY}&exclude=minutely,hourly&units=metric&lat=${cityInfo.data.coord.lat}&lon=${cityInfo.data.coord.lon}`)
            .then( weather => {
                props.getWeather({ data: weather.data })
            })
        })
        .catch( error => {
            // alert('Ciudad no encontrada')
            alert(error)
        })
    }

    return (
        <>           
            <a name="search"></a>
            <div className="search--container" id="search-container">
                <h1 className="search--title">
                    Search your city
                </h1>
                <form action="" className="search--form">
                    <input type="text" id="search--input" onKeyPress={handleKeyPress} />
                    <button type="button" onClick={() => {
                        getWeatherInfo(document.getElementById('search--input').value)
                    }} id="search--button">Search</button>
                </form>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    getWeather,
    getCityInfo
}

export default connect(null, mapDispatchToProps)(Search)