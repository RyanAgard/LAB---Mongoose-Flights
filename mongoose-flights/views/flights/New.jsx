import React from 'react'
function New(props){
    return(
        <div>
        <h1>New flights Log</h1>
        <form action="/flights" method="POST">
          <label htmlFor="air">Airline:</label>
          <br />
          <input type="text" id="air" name="airline" />
          <br />
          <br />        <label htmlFor="fno">Flight No:</label>
          <br />
          <input type="text" id="fno" name="flightNo" />
          <br />
          <br />        <label htmlFor="dept">Departs:</label>
          <br />
          <input type="datetime-local" id="dept" name="departs" defaultValue={props.departsDate} />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
}

export default New;