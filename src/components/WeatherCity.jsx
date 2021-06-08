import React from 'react';
import '../assets/styles/components/WeatherCity.scss'

const WeatherCity = props => {

    const { name, sys, main, weather } = props[0]

    const imgSrc = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

    return(
        <>
            
            <div className="weather--city__info">
                <div className="weather--identity">
                    <div className="weather--identity__name">
                        <h3>{name}, {sys.country}</h3>
                        <h4>{main.temp} °C</h4>
                    </div>
                    <div className="weather--identity__time">
                        <p className="identity--time__date">
                            15:42, April 25
                        </p>
                    </div>
                </div>
                <div className="weather--current">
                    <img src={imgSrc} alt="Weather image" id="weather--current__icon" />
                    <div className="weather--current__info">
                        <p className="current--info__text">Feels like {main.feels_like} °C</p>
                        <p className="current--info__text">{weather[0].main}</p>
                        <p className="current--info__text">Broken clouds</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCity