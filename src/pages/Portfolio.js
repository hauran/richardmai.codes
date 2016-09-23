import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux'

import Header from '../components/Header'
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
