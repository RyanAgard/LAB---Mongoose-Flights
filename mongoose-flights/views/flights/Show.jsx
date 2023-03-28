import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

function Show(props) {
  console.log(props.flight);
  const usedAirports = props.flight.destinations.map(
    (destination) => destination.airport
  );

  const availableAirports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'].filter(
    (airport) => !usedAirports.includes(airport)
  );

  let today = new Date(); // Get today's date and time

  let currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    today.getHours() - 4,
    today.getMinutes(),
    today.getSeconds()
  );
  currentDate = currentDate.toISOString().slice(0, 16);
  console.log(currentDate);

  return (
    <DefaultLayout>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Show View</h1>
        <p>
          <strong>Airline: </strong> {props.flight.airline}
        </p>
        <p>
          <strong>Flight No: </strong>
          {props.flight.flightNo}
        </p>
        <p>
          <strong>Departs: </strong>
          {props.flight.departs.toString().slice(0, 25)}
        </p>
        <br />
        <table
          className="table table-primary table-striped text-center "
          style={{ width: '60vw' }}
        >
          <thead>
            <tr>
              <th scope="col">Airport</th>
              <th scope="col">Arrival</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {props.flight.destinations.map((destination) => (
              <>
                <tr>
                  <th scope="row">{destination.airport}</th>
                  <td>{destination?.arrival?.toString()}</td>
                  <td>
                    <form
                      action={`/flights/${props.flight._id}/destinations/${destination._id}?_method=DELETE`}
                      method="POST"
                    >
                      <button className="btn btn-outline-danger mx-5">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

        <details>
          <summary style={{ opacity: '.6' }}>Destinations:</summary>
          <form
            action={`/flight/${props.flight._id}/destinations`}
            method="POST"

          >
            <div className="input-group mb-3 ">
              <div>
                <select
                  className="form-select text-center"
                  multiple
                  aria-label="multiple select example"
                  name="airport"
                  style={{
                    height: '150px',
                    width: '200px',
                    overflow: 'hidden',
                  }}
                >
                  {/* <option selected>Select a Destination</option> */}

                  {/* <option value="AUS">AUS</option>
                 <option value="DAL">DAL</option>
                 <option value="LAX">LAX</option>
                 <option value="SAN">SAN</option>
                 <option value="SEA">SEA</option> */}
                  {availableAirports.map((airport) => (
                    <option value={airport}>{airport}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='d-flex flex-column'>

              <label for="arrival">Choose a date/time for your flight:</label>
              <input
                type="datetime-local"
                id="arrival"
                name="arrival"
                value={currentDate}
              // min="2018-06-07T00:00"
              // max="2018-06-14T00:00"
              ></input>
              <br />
              <button className="btn btn-outline-dark">Add Destination</button>
            </div>
          </form>
          <br /> <br />
        </details>

        <div className="d-flex mx-2">
          <a href={`/flight/${props.flight._id}/edit`}>
            <button class="btn btn-outline-primary">Edit</button>
          </a>

          <br />
          <br />

          <form
            action={`/flight/${props.flight._id}?_method=DELETE`}
            method="POST"
          >
            <button className="btn btn-outline-danger mx-3">Delete</button>
          </form>

          <br />

          <a href="/flight">
            <button className="btn btn-outline-success">Back</button>
          </a>
          {/* render all the destinations then add an input ........ map and populate.... after adding a destination */}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Show;