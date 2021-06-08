import React from 'react'
import '../assets/styles/components/Week.scss'

const Week = ({children}) => {
   return(
       <>
        <section className="week">
            <h1 className="week--title">Next week</h1>
            <div className="days">
                <div className="days--container">
                    {children}
                </div>
            </div>
        </section>
       </>
   )
}

export default Week;