# Portfolio: routing with path parameters (React Router + Vite)

No API and no network calls. The projects are a plain list in `src/data/projects.js`.

## Run it
```bash
npm install
npm run dev
```
Open http://localhost:5173 and click a project, or type `/projects/1` in the address bar.

## The three steps (find them in the code)

| Step | What | File |
| --- | --- | --- |
| 1 | Wrap each card in `<Link to={`/projects/${id}`}>` | `src/components/ProjectItem.jsx` |
| 2 | Add `<Route path="/projects/:id" .../>` | `src/App.jsx` |
| 3 | `const {id} = useParams()`, then `projects.find(...)` | `src/components/ProjectItemDetails.jsx` |

## Exercises
1. Open `/projects/3`, then `/projects/99`.
2. `console.log(useParams())` and notice that `id` is a **string**.
3. Add a 17th project in `src/data/projects.js`. Do you need a new route?
4. Change a project's `hue` (0 to 360) to change its colour.
