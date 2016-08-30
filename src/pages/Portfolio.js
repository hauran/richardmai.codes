import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux'

import Header from '../components/Header'

import '../less/app.less'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='view-container'>
        <section className='content'>
          <Header></Header>
        </section>
      </div>
    )
  }
}

export default Portfolio
