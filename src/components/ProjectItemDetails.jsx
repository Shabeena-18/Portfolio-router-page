import {Link, useParams} from 'react-router'
import projects from '../data/projects'

const ProjectItemDetails = () => {
  // STEP 3: read the path parameter. For /projects/3 this is {id: "3"}
  const {id} = useParams()

  // useParams gives a STRING ("3"), our ids are NUMBERS (3), so convert.
  const project = projects.find(each => each.id === Number(id))

  if (project === undefined) {
    return (
      <main className="page narrow">
        <Link to="/" className="back-link">← All projects</Link>
        <h1 className="details-title">No project with id “{id}”</h1>
        <p className="details-content">
          Pick one from the list. Valid ids are 1 to {projects.length}.
        </p>
      </main>
    )
  }

  const {title, topic, year, hue, content, techStack, repoUrl} = project

  return (
    <main className="page narrow">
      <Link to="/" className="back-link">← All projects</Link>
      <article className="details">
        <div className="details-hero" style={{'--hue': hue}} aria-hidden="true">
          <span>{title.charAt(0)}</span>
        </div>
        <p className="topic">{topic} · {year}</p>
        <h1 className="details-title">{title}</h1>
        <p className="details-content">{content}</p>

        <h2 className="details-sub">Built with</h2>
        <ul className="chips">
          {techStack.map(tech => (
            <li className="chip" key={tech}>{tech}</li>
          ))}
        </ul>

        <a className="button" href={repoUrl} target="_blank" rel="noreferrer">
          View source code
        </a>
      </article>
    </main>
  )
}

export default ProjectItemDetails
