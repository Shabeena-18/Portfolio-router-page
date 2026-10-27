// The list of projects. Add, remove or edit objects here and the website updates.
// Each project needs a unique id: /projects/1 shows the project with id 1.
const projects = [
  {
    id: 1,
    title: 'Weather Dash',
    topic: 'Web app',
    year: 2026,
    hue: 212,
    summary: 'A clean forecast page for any city.',
    content: 'Weather Dash lets you search any city and see the next five days at a glance. I used it to learn how to call a public API, handle loading and error states, and keep the UI readable on a phone.',
    techStack: [
      'React',
      'REST API',
      'CSS Grid'
    ],
    repoUrl: 'https://github.com/your-username/weather-dash'
  },
  {
    id: 2,
    title: 'Habit Tracker',
    topic: 'Productivity',
    year: 2026,
    hue: 152,
    summary: 'Tick off daily habits and watch streaks grow.',
    content: 'Habit Tracker stores a list of habits and a checkmark for each day. The streak counter updates as you tick boxes. Everything lives in React state and is saved to localStorage so nothing is lost on refresh.',
    techStack: [
      'React',
      'useState',
      'localStorage'
    ],
    repoUrl: 'https://github.com/your-username/habit-tracker'
  },
  {
    id: 3,
    title: 'Recipe Finder',
    topic: 'Web app',
    year: 2025,
    hue: 24,
    summary: 'Search recipes by the ingredients you already have.',
    content: 'Type in what is in your fridge and Recipe Finder suggests dishes you can cook right now. It filters results as you type and shows cooking time and difficulty on every card.',
    techStack: [
      'React',
      'Fetch',
      'Search filter'
    ],
    repoUrl: 'https://github.com/your-username/recipe-finder'
  },
  {
    id: 4,
    title: 'Budget Buddy',
    topic: 'Finance',
    year: 2025,
    hue: 268,
    summary: 'Track spending and see where the money goes.',
    content: 'Budget Buddy records income and expenses, groups them by category and draws a simple bar chart for the month. It was my first project with reducers and derived data.',
    techStack: [
      'React',
      'useReducer',
      'Charts'
    ],
    repoUrl: 'https://github.com/your-username/budget-buddy'
  },
  {
    id: 5,
    title: 'Pixel Playground',
    topic: 'Game',
    year: 2025,
    hue: 336,
    summary: 'Draw pixel art on a grid and export it.',
    content: 'Pick a colour, click the grid and your pixel art appears. You can undo, clear the board and download the finished picture as a PNG.',
    techStack: [
      'JavaScript',
      'Canvas',
      'React'
    ],
    repoUrl: 'https://github.com/your-username/pixel-playground'
  },
  {
    id: 6,
    title: 'Study Timer',
    topic: 'Productivity',
    year: 2024,
    hue: 188,
    summary: 'A focus timer with short and long breaks.',
    content: 'Study Timer runs 25 minute focus sessions followed by breaks. It plays a soft sound when time is up and keeps a tally of completed sessions for the day.',
    techStack: [
      'React',
      'useEffect',
      'setInterval'
    ],
    repoUrl: 'https://github.com/your-username/study-timer'
  },
  {
    id: 7,
    title: 'Quiz Arena',
    topic: 'Game',
    year: 2026,
    hue: 48,
    summary: 'Timed multiple-choice quizzes with a live score.',
    content: 'Quiz Arena asks ten questions on a topic you pick, with a countdown for each one. It shows your score at the end and lets you review every answer you got wrong.',
    techStack: [
      'React',
      'useState',
      'setTimeout'
    ],
    repoUrl: 'https://github.com/your-username/quiz-arena'
  },
  {
    id: 8,
    title: 'Movie Mate',
    topic: 'Web app',
    year: 2026,
    hue: 0,
    summary: 'Search movies and save a watchlist.',
    content: 'Movie Mate searches a public movie API and shows posters, ratings and release dates. You can add films to a watchlist that stays saved between visits.',
    techStack: [
      'React',
      'Fetch',
      'localStorage'
    ],
    repoUrl: 'https://github.com/your-username/movie-mate'
  },
  {
    id: 9,
    title: 'Todo Board',
    topic: 'Productivity',
    year: 2025,
    hue: 172,
    summary: 'A kanban board with drag and drop.',
    content: 'Todo Board has three columns: To do, Doing and Done. You can add tasks, drag them between columns and delete the ones you have finished.',
    techStack: [
      'React',
      'Drag and drop',
      'CSS Flexbox'
    ],
    repoUrl: 'https://github.com/your-username/todo-board'
  },
  {
    id: 10,
    title: 'Chat Corner',
    topic: 'Social',
    year: 2025,
    hue: 240,
    summary: 'A simple chat room that updates in real time.',
    content: 'Chat Corner lets people pick a nickname and join a shared room. Messages appear instantly for everyone, and each person gets their own colour.',
    techStack: [
      'React',
      'WebSockets',
      'Node.js'
    ],
    repoUrl: 'https://github.com/your-username/chat-corner'
  },
  {
    id: 11,
    title: 'Fit Log',
    topic: 'Health',
    year: 2025,
    hue: 130,
    summary: 'Log workouts and see your weekly progress.',
    content: 'Fit Log records the exercise, sets and weight for every workout. A weekly summary shows how much you lifted and which days you trained.',
    techStack: [
      'React',
      'useReducer',
      'Charts'
    ],
    repoUrl: 'https://github.com/your-username/fit-log'
  },
  {
    id: 12,
    title: 'Color Palette Maker',
    topic: 'Design tool',
    year: 2024,
    hue: 300,
    summary: 'Generate colour palettes and copy the hex codes.',
    content: 'Press the space bar and Color Palette Maker creates five matching colours. You can lock the ones you like, copy their hex codes and keep generating the rest.',
    techStack: [
      'JavaScript',
      'React',
      'Clipboard API'
    ],
    repoUrl: 'https://github.com/your-username/color-palette-maker'
  },
  {
    id: 13,
    title: 'Expense Splitter',
    topic: 'Finance',
    year: 2024,
    hue: 90,
    summary: 'Split a trip bill fairly between friends.',
    content: 'Add the people on a trip and every expense they paid for. Expense Splitter works out who owes whom, using the fewest payments possible.',
    techStack: [
      'React',
      'Forms',
      'Array methods'
    ],
    repoUrl: 'https://github.com/your-username/expense-splitter'
  },
  {
    id: 14,
    title: 'Typing Speed Test',
    topic: 'Game',
    year: 2024,
    hue: 18,
    summary: 'Measure your words per minute and accuracy.',
    content: 'Typing Speed Test shows a short passage and times you as you type it. The result page gives your words per minute, your accuracy and the letters you missed most often.',
    techStack: [
      'React',
      'useEffect',
      'Keyboard events'
    ],
    repoUrl: 'https://github.com/your-username/typing-speed-test'
  },
  {
    id: 15,
    title: 'Bookshelf',
    topic: 'Web app',
    year: 2024,
    hue: 200,
    summary: 'Keep track of books you read, want to read and loved.',
    content: 'Bookshelf lets you add books and sort them into Reading, Finished and Wishlist. You can give each book a star rating and a short note.',
    techStack: [
      'React',
      'React Router',
      'CSS Modules'
    ],
    repoUrl: 'https://github.com/your-username/bookshelf'
  },
  {
    id: 16,
    title: 'Portfolio Site',
    topic: 'Website',
    year: 2026,
    hue: 225,
    summary: 'This site, built to practise routing.',
    content: 'The site you are looking at. Every project card links to its own page using a path parameter, and the details page reads the id with useParams to load the right project.',
    techStack: [
      'React',
      'React Router',
      'Vite'
    ],
    repoUrl: 'https://github.com/your-username/portfolio-router'
  }
]

export default projects
