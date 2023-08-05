import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import avatar from '../../assets/logos/shg.svg';
import NavbarInside from './navbar-inside2';
import '../../assets/css/home.css';
import AdminIdContext from "../context/adminContext";

const AssignDuty = () => {
  const { adminId } = useContext(AdminIdContext);

  const [sessionID, setSessionID] = useState('');
  const [badgeID, setBadgeID] = useState('');
  const [sessionList, setSessionList] = useState([[]]);
  const [badgeIDList, setBadgeIDList] = useState([]);
  
  const url_get = `https://violet-kitten-toga.cyclic.cloud/v1/admin/${adminId}/sessions`;
  const url_get_badgeids = `https://violet-kitten-toga.cyclic.cloud/v1/admin/get-users/${adminId}`;
  useEffect(() => {
    
    axios.get(url_get)
      .then(res => {
        setSessionList(res.data.sessions);
        console.log(res.data.sessions);
      })
      .catch(error => {
        console.error('Error fetching Session List:', error);
      });
  }, []);

  useEffect(() => {
    
    axios.get(url_get_badgeids)
      .then(result => {
        setBadgeIDList(result.data.users);
      })
      .catch(error => {
        console.error('Error fetching Session List:', error);
      });
  }, []);

  
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      sessionId: parseInt(sessionID.match(/(\d+)/)[0]),
      userIds: badgeID.match(/(\d+)/)[0],
    };
    const url_post = `https://violet-kitten-toga.cyclic.cloud/v1/admin/assign-session/${adminId}`;
    
    axios.post(url_post, data)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div className='home-outer'>
      <div>
        <NavbarInside />
      </div>
      <div className='wrapper wrapper22 wrapper76' style={{ marginTop: '200px' }}>
        <h1 className='heading-settings'>Assign Duty</h1>
          <div className='settings-box'>
            <form className='form-notifs'> 
              <div className='row'>
               
                <div className='col-sm-12'>
                  <label htmlFor='session'>Session ID : </label>
                  <select value={sessionID} onChange={(e) => setSessionID(e.target.value)}>
                    <option>Select Session</option>
                    {sessionList.map((sessionList) => (
                        <option onClick={() => setSessionID(sessionList.sessionID)}>{sessionList.sessionID} - {sessionList.sessionLocation} </option>
                    ))}
                  </select>
              </div>
                </div>
              { sessionList.sessionID == null ? <></> :
              <div className='row'>
                <div className='col-sm-4'>
                  <label htmlFor='session'>Session Date : </label>
                </div>
                <div className='col-sm-4'>
                <label htmlFor='session'>Session Start Time : </label>
                </div>
                <div className='col-sm-4'>
                <label htmlFor='session'>Session End Time : </label>
                </div>
              </div>
}
              <div className='row'>
                <div className='col-sm-12'>
                  <label htmlFor='police-officer'>
                    Police Officer :{' '}
                  </label>
                  <select value={badgeID} onChange={(e) => setBadgeID(e.target.value)}>
                    <option>Select Police Officer</option>
                    {badgeIDList.map((badgeIDList) => (
                        <option onClick={() => setBadgeID(badgeIDList.badgeID)}>{badgeIDList.badgeID} - {badgeIDList.firstName} {badgeIDList.surname}</option>
                    ))}
                  </select>

                </div> 
              </div>
              <div className="row">
              <center>
                <input
                  type="submit"
                  value="Assign Duty"
                  className="btn-sbmt col-sm-6"
                  onClick={onSubmit}
                />{" "}
              </center>
              </div>
             
              <ul class='bg-bubbles'>
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

export default AssignDuty;