import '../less/app.less'
import '../less/project.less'

const Project = (p) => {
  return (
    <div className='project'>
      <div className='text'>
        <div className='title'>{p.project.title}</div>
        <div className='description'>{p.project.description}</div>
      </div>
      <div className='img'>
        <img src={p.project.img}></img>
      </div>
    </div>
  )
}
export default Project
