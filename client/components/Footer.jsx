import React, {Component} from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{margin:'0px', padding:'0px', height:'300px', margin:'0px'}}>
          <h2 className='more-homes-title'>Explore other options in and around New York</h2>
          <span className='more-places-title'>More places to stay in New York:</span>
          <div className='more-places-rec apartments'>Apartments</div>
          <div className='more-places-rec'>·</div>
          <div className='more-places-rec'>Houses</div>
          <div className='more-places-rec'>·</div>
          <div className='more-places-rec'>Bed and breakfasts</div>
          <div className='more-places-rec'>·</div>
          <div className='more-places-rec'>Villas</div>
          <div className='more-places-rec'>·</div>
          <div className='more-places-rec'>Condomoniums</div>
         <div style={{color:'white'}}>.</div> 
         <hr className='horizontal-line'></hr>
        <div className='bottom-nav-menu'>
          <div className='bottom-nav-menu-airbnb'>
            <div className='bottom-nav-menu-airbnb-title'>Airbnb</div> 
            <ul className='bottom-nav-menu-airbnb-list'>
              <li className='bottom-nav-menu-airbnb-list-element'>Careers</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Press</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Policies</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Help</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Diversity</li>
            </ul>
          </div>
          <div className='bottom-nav-menu-discover'>
            <div className='bottom-nav-menu-airbnb-title'>Discover</div> 
            <ul className='bottom-nav-menu-airbnb-list'>
              <li className='bottom-nav-menu-airbnb-list-element'>Trust & Safety</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Invite Friends</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Gift Cards</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Airbnb Citizen</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Business Travel</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Guidebooks</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Airbnbmag</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Events</li>
            </ul>
          </div>
          <div className='bottom-nav-menu-discover'>
            <div className='bottom-nav-menu-airbnb-title'>Hosting</div> 
            <ul className='bottom-nav-menu-airbnb-list'>
              <li className='bottom-nav-menu-airbnb-list-element'>Why Host</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Refer Hosts</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Hospitality</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Responsible</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Hosting</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Community Center</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Host an Experience</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Open Homes</li>
            </ul>
          </div>
          <div className='bottom-nav-menu-social-media'>
            <ul className='bottom-nav-menu-airbnb-list'>
              <li className='bottom-nav-menu-airbnb-list-element'>Terms</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Privacy</li>
              <li className='bottom-nav-menu-airbnb-list-element'>Site Map</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer