import projects from '../data/projects'
import ProjectItem from './ProjectItem'

const Home = () => (
  <main className="page">
    <section className="intro">
      <h1 className="intro-title">
        I build small, useful things for the web.
      </h1>
      <p className="intro-text">
        Sixteen projects I made while learning React. Click any card to open it
        and watch the URL change.
      </p>
    </section>

    <ul className="projects-list">
      {projects.map(each => (
        <ProjectItem projectDetails={each} key={each.id} />
      ))}
    </ul>
  </main>
)

export default Home
