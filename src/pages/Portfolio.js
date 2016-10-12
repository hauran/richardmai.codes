import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux'
import smoothScroll from 'smoothscroll'

import Landing from '../components/Landing'
import Project from '../components/Project'

import '../less/app.less'

const imgs = [
  require('../assets/dd_ios.png'),
  require('../assets/dd_osx.png'),
  require('../assets/OM.png'),
  require('../assets/offline_search.png'),
  require('../assets/emt.png')
]

let projects = PROJECTS
projects.forEach((p,i) => {
  p.img = imgs[i]
})

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {projects}
  }


  scrollToFirst() {
    let first = document.querySelector('.line')
    smoothScroll(first)
  }


  render () {
    return (
      <div className='view-container'>
        <section className='content'>
          <ul>
            <li><Landing scroll={this.scrollToFirst}></Landing></li>
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
