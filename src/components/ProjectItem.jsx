import {Link} from 'react-router'

const ProjectItem = props => {
  const {projectDetails} = props
  const {id, title, topic, summary, year, hue} = projectDetails

  return (
    // STEP 1: the whole card is a Link to /projects/<id>
    <Link to={`/projects/${id}`} className="project-link">
      <li className="project-card">
        <div className="thumb" style={{'--hue': hue}} aria-hidden="true">
          <span>{title.charAt(0)}</span>
        </div>
        <div className="project-info">
          <p className="topic">{topic} · {year}</p>
          <h2 className="project-title">{title}</h2>
          <p className="project-summary">{summary}</p>
        </div>
      </li>
    </Link>
  )
}

export default ProjectItem
