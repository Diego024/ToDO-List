import React from 'react'
import '../assets/styles/components/Welcome.scss'
import welcomeDraw from '../assets/statics/draws/weather-draw.svg'
import continueIcon from '../assets/statics/icons/continue.png'

let Welcome = () => (

    <section className="welcome--container">
        <div className="welcome--container__text">
            <h1 className="welcome--title">My Weather App</h1>
            <p className="welcome--text">
                Here you can know how is going to be the weather
                <br/>
                 to your city in just a few steps.
            </p>
            <div className="more--container">
                <a href="#search" className="more--link">
                    <img className="more--img" src={continueIcon} alt=""/>
                    More
                </a>
            </div>
        </div>
        <div className="welcome--container__draw">
            <img className="draw--img" src={welcomeDraw} alt="Weather image"/>
        </div>
        
    </section>

);

export default Welcome