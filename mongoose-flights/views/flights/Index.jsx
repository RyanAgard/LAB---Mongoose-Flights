import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {
    const flight = props.flight 
    flight.sort((first,second)=>first.departs-second.departs)

    return (
               <div >
                <h1>Flights Index View </h1>
              
                <ul>
                    {props.flight.map((item, index) => <li>{item.airline} <br></br>{item.flightNo}<br></br> {item.departs.toDateString()} </li> )}           
                </ul>

                <a href='/flights/New'> Add new Flight</a>
               </div>
          
    )
}

export default Index