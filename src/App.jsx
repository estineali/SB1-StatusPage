import { useEffect, useState } from "react";
import reactLogo from "./assets/milieux.svg";
import viteLogo from "/milieux.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [solarData, setSolarData] = useState({});

  function FetchServerData() {
    fetch(import.meta.env.VITE_SERVER_ENDPOINT)
      .then(function (response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        return response.json();
      })
      .then(function (data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        setSolarData(data); // { "timestamp": "", "PVVoltage": 1, }
      });
  }

  useEffect(() => {
    FetchServerData();
  }, []);

  return (
    <>
      <div>
        <a href="https://github.com/MC-Bloc" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Sunblock One</h1>
      <div className="card">
        <p style={{ fontWeight: 800 }}>
          Status: {solarData.Timestamp ? "Active" : "Not Available"}
        </p>
        <p>Local Time (Montreal): {solarData?.Timestamp ?? "Not Available"} </p>
        <p>Solar Voltage: {solarData?.PVVoltage ?? "-1"}V </p>
        <p>Solar Current: {solarData?.PVCurrent ?? "-1"}A</p>
        <p>Battery Percentage: {solarData?.BattPercentage ?? "-1"}%</p>
        <p>Battery Voltage: {solarData?.BattVoltage ?? "-1"}V</p>
        <p>System Power Consumption: {solarData?.LoadPower ?? "0"}W</p>
        <p>CPU Power Consumption: {solarData?.CPUPowerDraw ?? "0"}W</p>
        <p>Power Profile: {solarData?.PowerProfile ?? ""}</p>
      </div>
      <p className="read-the-docs">
        A Project by the TAG MC Bloc at Milieux Institute, Concordia University,
        Montreal CA.
      </p>
    </>
  );
}

export default App;
