import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Project from '../components/Project'

import '../less/app.less'

const dd_ios  = require('../assets/dd_ios.png');
const dd_osx  = require('../assets/dd_osx.png');
const om      = require('../assets/OM.png');
const offline = require('../assets/offline_search.png');

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects:[
        {
          title:'Discover on Demand',
          platform: ['iOS'],
          description:'An on-demand music recommendation app, specically tailored to each user.',
          img:dd_ios,
          release_date:'May 5, 2016'
        },
        {
          title:'Discover on Demand',
          platform: ['osx'],
          description:'An on-demand music recommendation app, specically tailored to each user.',
          img:dd_osx,
          release_date:'Jan 20, 2016'
        },
        {
          title:'OurMix',
          platform: ['iOS, Android'],
          description:'Music discovery powered by your friends',
          img:om,
          press:[{
            publication:'techcrunch',
            url:'https://techcrunch.com/2016/01/15/ourmix-is-social-music-discovery-done-right/'
          }]
        },
        {
          title:'Offline',
          platform: ['iOS'],
          img:offline,
        },
        {
          title:'Everyone\'s Mixtape',
          platform: ['web']
        }
      ]
    }
  }

  render () {
    return (
      <div className='view-container'>
        <section className='content'>
          <Header></Header>
          <ul>
            {
              this.state.projects.map( (p, i) => {
                return (
                    <li key={i}><Project project={p}></Project></li>
                )
              }
            )}
          </ul>
        </section>
      </div>
    )
  }
}

export default Portfolio
