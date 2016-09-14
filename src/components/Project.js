import '../less/app.less'
import '../less/project.less'

import ios from '../assets/appStore.svg'
import LinkIcon from 'react-icons/io/link'

const Project = (p) => {
  return (
    <div className='project'>
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
                <div><a href={p.project.links.appstore}><div className='ios' dangerouslySetInnerHTML={{__html: ios}} /></a></div>
              :
                null
            }
            {
              p.project.links.web ?
                <div className='link'><a href={p.project.links.web}><LinkIcon size={20}></LinkIcon> {p.project.links.web}</a></div>
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
  )
}
export default Project
