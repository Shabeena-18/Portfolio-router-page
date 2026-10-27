import {BrowserRouter, Routes, Route} from 'react-router'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import ProjectItemDetails from './components/ProjectItemDetails'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* STEP 2: ":id" is a path parameter.
          /projects/1, /projects/2 ... /projects/99 all render this one route. */}
      <Route path="/projects/:id" element={<ProjectItemDetails />} />

      {/* Catch-all goes last: anything unmatched shows Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
