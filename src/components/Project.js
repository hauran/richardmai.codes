import '../less/app.less'
import '../less/project.less'

import ios from '../assets/appStore.svg'
import LinkIcon from 'react-icons/fa/external-link'
import IosIcon from 'react-icons/io/social-apple'
import classNames from 'classnames'

const Project = (p) => {
  let project = classNames('project', p.project.fontcolor);
  let iosLink = classNames('link', 'ios')
  let weblink = ''
  if(p.project.links.web)
    weblink = `http://${p.project.links.web}`

  return (
    <div className={project} style={{'backgroundColor':p.project['backgroundColor']}}>
      <div className='line'></div>
      <div className='project-details'>
        <div className='text'>
          <div className='top'>
            <div className='title-date'>
              <div className='title'>{p.project.title}</div>
              <div className='date'>{p.project.release_date}</div>
            </div>
            <div className='description'>{p.project.description}</div>
            <div className='story'>{p.project.story}</div>

            <div className='links'>
              {
                p.project.links.appstore ?
                  <div className={iosLink}><IosIcon size={25} className='iosIcon'></IosIcon><a href={p.project.links.appstore} target='_blank' className='link'>AppStore</a></div>
                :
                  null
              }
              {
                p.project.links.web ?
                  <div className='link'><LinkIcon size={15}></LinkIcon> <a href={weblink} target='_blank' className='link'>{p.project.links.web}</a></div>
                :
                  null
              }
            </div>
          </div>
          <ul className='stack'>
            {
              p.project.stack.map((t, i) => {
                return <li key={i}>{t.replace(/ /g, "\u00a0")}</li>
              })
            }
          </ul>
        </div>
        <div className='img'>
          <img src={p.project.img}></img>
        </div>
      </div>
    </div>
  )
}
export default Project
