import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/components/Day.scss'

const Day = props => {

    const { weather, temp, day} = props

    const imgSrc = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

    return(
        <> 
            <div className="day-item">
                <p className="day-item__name">{day}</p>
                <div className="day-item__info">
                    <div className="item-info__weather">
                        <img src={imgSrc} className="info--weather__icon" alt="Weather Icon"/>
                        <p className="info--weather__text">{weather[0].main}</p>
                    </div>
                    <div className="item-info__temp">
                        <p className="info--temp__max">Max {temp.max} °C</p>
                        <p className="info--temp__min">Min {temp.min} °C</p>
                    </div>
                </div>
            </div>
        </>
    )
}

Day.propTypes = {
    day: PropTypes.string
}

export default Day