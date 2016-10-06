import '../less/app.less'
import '../less/header.less'

import TwitterIcon from 'react-icons/io/social-twitter'
import EmailIcon from 'react-icons/io/email'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div id='header'>
        <div className='topStuff'>
          <div className='title'>Richard Mai</div>
          <div className='subtitle'>create and code</div>
          <div className='contact'>
            <div><a href='mailTo:richardmai@gmail.com' target='_blank'><EmailIcon size={20}></EmailIcon> richardmai@gmail.com</a></div>
            <div><a href='https://twitter.com/mai_hauran' target='_blank'><TwitterIcon size={20}></TwitterIcon>  @mai_hauran</a></div>
          </div>
        </div>
        <button onClick={() => {this.props.scroll()}}>View my work</button>
      </div>
    )
  }
}

export default Header
