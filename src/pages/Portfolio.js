import { Router, Route, Link } from 'react-router'

import { connect } from 'react-redux'

import Header from '../components/Header'
import Project from '../components/Project'

import '../less/app.less'

const dd_ios  = require('../assets/dd_ios.png');
const dd_osx  = require('../assets/dd_osx.png');
const om      = require('../assets/OM.png');
const offline = require('../assets/offline_search.png');
const emt = require('../assets/emt.png');

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects:[
        {
          title:'Discover on Demand',
          links:{
            appstore:'https://itunes.apple.com/us/app/discover-on-demand/id1097518404?ls=1&mt=8',
            web:'http://discoverondemand.com',
          },
          description:'An on-demand music recommendation app, specically tailored to each user.',
          story:'There wasn\'t a simple way to find new music whenever I wanted.  Yea there\'s Spotify\'s Discover Weekly, which I love, but by Wednesday, I already listened to the whole thing. So I made one.  Plus it was a great way to play with React Native.  I reused a lot of the same back end code as OurMix, so the development was pretty fast. This app is actually my go-to for new music. Give it a shot.',
          img:dd_ios,
          release_date:'May 2016',
          stack:['React Native', 'Objective-C', 'Node.js', 'MySQL', 'Redis', 'Spotify SDK', 'Spotify API']
        },
        {
          title:'Discover on Demand',
          links:{},
          platform: ['osx'],
          description:'An on-demand music recommendation app, specically tailored to each user.',
          story:'Desktop app',
          img:dd_osx,
          release_date:'Feb 2016',
          stack:['Riot.js', 'Electron', 'AppleScript', 'Node.js', 'MySQL', 'Redis', 'Spotify API' ]
        },
        {
          title:'OurMix',
          links:{},
          platform: ['iOS, Android'],
          description:'Music discovery powered by your friends',
          release_date: 'Jan 2016',
          img:om,
          press:[{
            publication:'techcrunch',
            url:'https://techcrunch.com/2016/01/15/ourmix-is-social-music-discovery-done-right/'
          }],
          stack:['AngularJS', 'Objective-C', 'Java', 'Node.js', 'MySQL', 'Redis', 'Spotify SDK', 'Spotify API']
        },
        {
          title:'Offline',
          links:{},
          platform: ['iOS'],
          description: 'Search for places to eat, drink, or just about anything within 5 blocks of any subway stop.',
          release_date: 'Mar 2014',
          img:offline,
          press:[{
            url:'https://www.elegran.com/blog/2014/03/finding-hidden-gems-in-nyc-theres-an-app-for-that'
          }],
          stack:['AngularJS', 'Node.js', 'MySQL', 'MongoDB', 'NYC MTA data', 'Yelp API', 'Google Maps API']
        },
        {
          title:'Everyone\'s Mixtape',
          links:{},
          platform: ['web'],
          description:'More than a playlist',
          release_date:'Dec 2011',
          img:emt,
          press:[
            {
              publication:'New York Observer',
              url:'http://observer.com/2011/12/everyones-mixtape-12212011/'
            },
            {
              publication:'The Next Web',
              url:'http://thenextweb.com/apps/2011/12/21/mixtapes-go-social-with-the-brilliant-app-everyones-mixtape/#gref'
            },
            {
              publication:'LifeHacker',
              url:'http://lifehacker.com/5870202/everyones-mixtape-is-a-socially-curated-playlist-creator'
            }
          ],
          stack:['jQuery', 'PHP', 'MySQL']
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
