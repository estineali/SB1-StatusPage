import { useEffect, useState } from "react";
import viteLogo from "/milieux.svg";
import "./App.css";
import { socket } from "./socket";

function App() {
  const [solarData, setSolarData] = useState({});

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onSolarDataEvent(value) {
      console.log("SOLAR DATA RECEIVED: ");
      console.log(value);
      console.log("=======================");
      setSolarData(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("solar_data", onSolarDataEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("solar_data", onSolarDataEvent);
    };
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
        <p>Active Users on Site: {solarData?.ConnectedUsers ?? "0"}</p>
      </div>
      <p className="read-the-docs">
        A Project by the TAG MC Bloc at Milieux Institute, Concordia University,
        Montreal CA.
      </p>
    </>
  );
}

export default App;
