import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("=====>", state);
  const handleChange = () => {
    dispatch({
      type: "INTIALIZED",
      payload: { firstName: firstName, lastName: lastName, phoneNo: phoneNo },
    });
  };

  return (
    <div className="App">
      <h1>Redux Example</h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          placeholder="enter first name"
          name="fistname"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="enter last name"
          name="lastname"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Phone No:</label>
        <input
          type="text"
          placeholder="enter phone no"
          name="phone no"
          onChange={(e) => setPhoneNo(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleChange}>Submit</button>
      </div>
      <div className="table-container">
        <table>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>phoneNo</th>
          </tr>
          {state.map((data) => (
            <tr>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.phoneNo}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
