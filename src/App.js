import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [responseText, setResponse] = useState("No request yet");
  const [medicineName, setMedicine] = useState("");
  const [direction, setDirection] = useState("");
  
  const RequestSend = async () => {
    const params = JSON.stringify({
      "label_text": direction
    });
    axios.post("https://ttjhz8fwrl.execute-api.us-east-2.amazonaws.com/v1/nextpill_comp_api",
      params,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "mode": "no-cors"
        }
      }
    )
    .then(data => {
      setResponse(data);
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <div className="row m-1"><h1>Testing for something</h1></div>
      <div className="row m-1">
        <div className="col-4 m-1">
          <input className="form-control" type="text" id="MedicationName" placeholder="Medicine" value={medicineName} onChange={(e) => setMedicine(e.target.value)}></input>
        </div>
        <div className="col-8 m-1">
          <input className="form-control" type="text" id="Direction" placeholder="Direction" value={direction} onChange={(e) => setDirection(e.target.value)}></input>
        </div>
      </div>
      <div className="row mt-1">
        <button className="btn btn-primary block m-2" type="button" id="sendbutton" onClick={() => RequestSend()}>Request</button>
      </div>
      <div className="row mt-1 p-2">
        <textarea className="form-control" row={20} col={40} id="response" defaultValue={responseText}></textarea>
      </div>
    </div>
  );
}

export default App;
