import { useState } from 'react'
import arrowicon from "../assets/arrow.svg"
import navicon from "../assets/navigate.svg"
import recenticon from "../assets/Recent.svg"
import savedicon from "../assets/Saved.svg"
import bellicon from "../assets/bell-icon.svg"
import searchicon from "../assets/search-icon.svg"
import profileicon from "../assets/profile.svg"
import dropdownicon from "../assets/dropdown.svg"
import "./Location.css"
import Map from "./Map"

function Location() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
    if (isOpen) setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen1) setIsOpen1(false);
  };


   
  return (
    <div className="location">
      <div className="top">
        <div className='nav'>
          <div className='notification' onClick={toggleMenu1} >
            <img src={bellicon} alt=''/>
          </div>
          <div className="search-container">
            <input type="text" id="search-input" placeholder="Search..."/> 
            <span className='search-icon'><img src={searchicon}  alt='' /></span>
          </div>

          <div className='profile' onClick={toggleMenu} >
            <img src={profileicon}  alt='' />
            <h4>Nicky</h4>
            <img className='down-arrow' src={dropdownicon} />
          </div>
          <div className={`menu ${isOpen ? 'visible' : 'hidden'}`} id="menu1" role="menu" aria-labelledby="menu-btn">
              <div className="links">
                <a href="" role="menuitem">Recent Viewed</a>    
                <a href="" role="menuitem">Saved Place</a>
                <a href="" role="menuitem">Your Timelines</a>
                <a href="" role="menuitem">Settings</a>
              </div>  
                
                <div className="bottomlist">
                    <a href="" role="menuitem">Manage account</a>
                    <a href="" role="menuitem">Log out</a>
                </div>

          </div>

          <div className={`notify ${isOpen1 ? 'visible' : 'hidden'}`} id="menu2" role="menu" aria-labelledby="bell-icon">
                <div className="notify-title">
                    <h6>Alerts</h6>
                    <div className="notify-icons">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#616161">
                                <path d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H16.25C16.6642 5.25 17 5.58579 17 6C17 6.41421 16.6642 6.75 16.25 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"/>
                                <path d="M6.75 14C6.75 13.5858 7.08579 13.25 7.5 13.25H12.5C12.9142 13.25 13.25 13.5858 13.25 14C13.25 14.4142 12.9142 14.75 12.5 14.75H7.5C7.08579 14.75 6.75 14.4142 6.75 14Z" />
                                <path d="M5.5 9.25C5.08579 9.25 4.75 9.58579 4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75H14.5C14.9142 10.75 15.25 10.4142 15.25 10C15.25 9.58579 14.9142 9.25 14.5 9.25H5.5Z" />
                              </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#616161">
                                <path d="M13.2803 9.03033C13.5732 8.73744 13.5732 8.26256 13.2803 7.96967C12.9874 7.67678 12.5126 7.67678 12.2197 7.96967L9.25 10.9393L8.03033 9.71967C7.73744 9.42678 7.26256 9.42678 6.96967 9.71967C6.67678 10.0126 6.67678 10.4874 6.96967 10.7803L8.71967 12.5303C9.01256 12.8232 9.48744 12.8232 9.78033 12.5303L13.2803 9.03033Z" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10Z" />
                              </svg>
                        </span>
                    </div>
                </div>
                <div className="notify-content">
                    <p>Alerts about your location and account will show here</p>
                </div>
              </div>

        
        </div>
        <Map className="map" />
      </div>
      <div className="bottom pt-8">
        <div className="bottom-left">
          <div className="inputs">
            <div className="location-input">
              <legend>Choose Start Location</legend>
              <input className="p-2" placeholder="e.g United Kingdom" />
              <small> + Choose from map</small>
            </div>
            <div className="arrow-icon">
              <img src={arrowicon} alt="" />
            </div>
            <div className="location-input">
              <legend>Choose Destination</legend>
              <input className="p-2" placeholder="e.g New york" />
              <small> + Choose from map</small>
            </div>
          </div>
          <div className="suggestion">
            <h4>Suggestion</h4>
            <div className="suggestions-list">
              <button>Hotel</button>
              <button>Atm</button>
              <button>Restaurant</button>
              <button>School</button>
              <button>Train</button>
            </div>
          </div>
          <div className="submit-Nav">
            <p>Navigate</p>
            <img src={navicon} alt="" />
          </div>
        </div>
        <div className="bottom-right">
          <div className="saved">
            <div className="saved-header">
              <img src={savedicon} alt="" />
              <h3>Saved</h3>
            </div>
            <div className="saved-list">
              <button>Home</button>
              <button>Work</button>
            </div>
          </div>
          <div className="recent">
            <div className="recent-header">
              <img src={recenticon} alt="" />
              <h3>Recent</h3>
            </div>
            <div className="recent-list">
              <button>Nagpur</button>
              <button>Paris</button>
              <button>Canada</button>
              <button>North Korea</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location