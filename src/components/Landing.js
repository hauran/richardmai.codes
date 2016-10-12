import '../less/app.less'
import '../less/landing.less'

import TwitterIcon from 'react-icons/io/social-twitter'
import EmailIcon from 'react-icons/io/email'
import PersonIcon from 'react-icons/io/ios-person'

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div id='landing'>
        <div className='topStuff'>
          <div className='title'>Richard Mai</div>
          <div className='subtitle'>create and code</div>
          <div className='contactContiner'>
            <div className='contact'>
              <EmailIcon size={20} color='#333333'></EmailIcon> <a href='mailTo:richardmai@gmail.com' target='_blank' className='link'>richardmai@gmail.com</a>
            </div>
            <div className='contact'>
              <TwitterIcon size={20} color='#333333'></TwitterIcon> <a href='https://twitter.com/mai_hauran' target='_blank' className='link'>@mai_hauran</a>
            </div>
            <div className='contact'>
              <PersonIcon size={20} color='#333333'></PersonIcon> <a href='/#/resume' target='_blank' className='link'>resume</a>
            </div>
          </div>
        </div>
        <button onClick={() => {this.props.scroll()}}>View my work</button>
      </div>
    )
  }
}

export default Landing
