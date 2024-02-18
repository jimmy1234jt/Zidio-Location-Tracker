import React from 'react'
import arrowicon from "../assets/arrow.svg"
import navicon from "../assets/navigate.svg"
import recenticon from "../assets/Recent.svg"
import savedicon from "../assets/Saved.svg"
import "./Location.css"

function Location() {
  return (
    <div className='location'>
        <div className='top'>
        
        </div>
        <div className='bottom'>
            <div className='bottom-left'>
                <div className='inputs'>
                    <div className='location-input'>
                        <legend>Choose Start Location</legend>
                        <input />
                        <small> + Choose from map</small>
                    </div>
                    <div className='arrow-icon'>
                        <img src={arrowicon} alt='' />
                    </div>
                    <div className='location-input'>
                        <legend>Choose Destination</legend>
                        <input />
                        <small> + Choose from map</small>
                    </div>
                </div>
                <div className='suggestion'>
                    <h3>suggestion</h3>
                    <div className='suggestions-list'>
                        <button>Hotel</button>
                        <button>Atm</button>
                        <button>Restaurant</button>
                        <button>School</button>
                        <button>Train</button>
                    </div>
                </div>
                <div className='submit-Nav'>
                        <p>Navigate</p>
                        <img src={navicon} alt=''/>
                </div>
            </div>
            <div className='bottom-right'>
                <div className='saved'>
                    <div className='saved-header'>
                        <img src={savedicon} alt=''/>
                        <h3>Saved</h3>
                    </div>
                    <div className='saved-list'>
                        <button>Home</button>
                        <button>Work</button>
                    </div>
                </div>
                <div className='recent'>
                <div className='recent-header'>
                    <img src={recenticon} alt=''/>
                    <h3>Recent</h3>
                </div>
                <div className='recent-list'>
                <button>Nagpur</button>
                <button>Paris</button>
                <button>Canada</button>
                <button>North Korea</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location