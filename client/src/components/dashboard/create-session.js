import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import time from "../../assets/logos/time.png";
import locationping from "../../assets/logos/locationping.png";
import earth from "../../assets/logos/earth-globe.png";
import NavbarInside from "./navbar-inside2";

// import GoogleMapReact from 'google-map-react';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../../assets/css/home.css";
import AdminIdContext from "../context/adminContext";

const Settings = () => {
  const { adminId } = useContext(AdminIdContext);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [description, setDescription] = useState("");
  const [mapDataCord, setMapDataCord] = useState([]);

  const url_admin = `https://violet-kitten-toga.cyclic.cloud/v1/admin/add-session/${adminId}`;

  var queryLocation="Kansal Hospital, Patiala District, Punjab, 147001, India";
  queryLocation = encodeURIComponent(queryLocation);
  console.log(queryLocation)

  const url = `https://us1.locationiq.com/v1/search?key=pk.0f0d0860846ceff2f478b159721575b2&q=${queryLocation}&format=json`;

  useEffect(() => {

    axios.get(url)
      .then(res => {
        setMapDataCord(res.data);
        console.log(mapDataCord);
      })
      .catch(error => {
        console.error('Error fetching SOS data:', error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const sessionDateStr = `${date}T00:00:00.000Z`;
    const startTimeStr = `1970-01-01T${startTime}:00`;
    const endTimeStr = `1970-01-01T${endTime}:00`;

    const data = {
      sessionLocation: location,
      sessionDate: new Date(sessionDateStr).toISOString(),
      startTime: new Date(startTimeStr).toISOString(),
      endTime: new Date(endTimeStr).toISOString(),
      longitude: longitude,
      latitude: latitude,
    };
    console.log(data);
    axios
      .post(url_admin, data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <div className="home-outer">
      <div>
        <NavbarInside />
      </div>
      <div
        className="wrapper wrapper22 wrapper76"
        style={{ marginTop: "200px", zIndex: "0" }}
      >
        <h1 className="heading-settings">Create Session</h1>
        <div className="settings-box">
          <form className="form-duty">
            <div className="row">
              <div className=" col-sm-6">
                <label htmlFor="location">Location : </label>
                <span>
                  <img alt='' className="updater" src={locationping}></img>
                </span>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter duty Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className=" col-sm-6">
                <label htmlFor="date">Date : </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Enter duty Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className=" col-sm-6">
                <label htmlFor="longitude">Longitude : </label>
                <span>
                  <img alt='' className="updater" src={earth}></img>
                </span>
                <input
                  type="number"
                  name="longitude"
                  placeholder="Enter longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
              <div className=" col-sm-6">
                <label htmlFor="latitude">Latitude : </label>
                <span>
                  <img alt='' className="updater" src={earth}></img>
                </span>
                <input
                  type="number"
                  name="latitude"
                  placeholder="Enter latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className=" col-sm-6">
                <label htmlFor="startTime">Duty Start Time : </label>
                <span>
                  <img alt='' className="updater updater-notif" src={time}></img>
                </span>
                <input
                  type="time"
                  name="startTime"
                  placeholder="Enter duty start time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div className=" col-sm-6">
                <label htmlFor="endTime">Duty End Time : </label>
                <span>
                  <img alt='' className="updater updater-notif" src={time}></img>
                </span>
                <input
                  type="time"
                  name="endTime"
                  placeholder="Enter duty end time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <label htmlFor="time"> Description : </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <br></br>
            <div className="row">
              <center>
                <input
                  type="submit"
                  value="Create Session"
                  className="btn-sbmt col-sm-6"
                  onClick={onSubmit}
                />{" "}
              </center>
            </div>
            <ul class="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
