const cardsArr = [
  {
    name: 'capstone-one',
    image: 'Icons/capstone-one.png',
    bgimage: 'Icons/capstone-one-bg.png',
    title: 'Microverse Capstone One',
    text: 'The first capstone project in the curriculum, though simple, it mimics the contents of a conference page.',
    buttons: {
      langs: ['HTML', 'CSS'],
      other: [['See Live', 'https://danie12345.github.io/capstone-one/', 'Icons/see-project-icon.svg'], ['See Source', 'https://github.com/Danie12345/capstone-one', 'Icons/source-icon.svg']],
    },
  },
  {
    name: 'leaderboard',
    image: 'Icons/leaderboard.png',
    bgimage: 'Icons/leaderboard-bg.png',
    title: 'Leaderboard',
    text: 'Simple leaderboard score displaying site using ES6 and API calls!',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript'],
      other: [['See Live', 'https://danie12345.github.io/leaderboard/dist/', 'Icons/see-project-icon.svg'], ['See Source', 'https://github.com/Danie12345/leaderboard', 'Icons/source-icon.svg']],
    },
  },
  {
    name: 'recipe-app',
    image: 'Icons/recipe-app.png',
    bgimage: 'Icons/recipe-app-bg.png',
    title: 'Yummy Recipes!',
    text: 'Recipe webpage that has many meal categories and a lot of options for each one of them. Importing data from a real API and implementing an involvement system that allows the user to like each recipe and to add comments to them.',
    buttons: {
      langs: ['HTML', 'CSS', 'JavaScript'],
      other: [['See Live', 'https://anagudelogu.github.io/capstone-two/dist/', 'Icons/see-project-icon.svg'], ['See Source', 'https://github.com/anagudelogu/capstone-two', 'Icons/source-icon.svg']],
    },
  },
  {
    name: 'bookstore-cms',
    image: 'Icons/bookstore-cms.png',
    bgimage: 'Icons/bookstore-cms-bg.png',
    title: 'Bookstore CMS',
    text: 'Small website that (fake) manages an online bookstore using React-Redux!',
    buttons: {
      langs: ['HTML', 'CSS', 'React-Redux'],
      other: [['See Live', 'https://bookstore-cms-danielmalo.netlify.app/', 'Icons/see-project-icon.svg'], ['See Source', 'https://github.com/Danie12345/bookstore-react', 'Icons/source-icon.svg']],
    },
  },
  {
    name: 'metrics-webapp',
    image: 'Icons/metrics-webapp.png',
    bgimage: 'Icons/metrics-webapp-bg.png',
    title: 'Air Pollution Ranks',
    text: 'This project consists of a webapp for mobile that displays real metrics from an API in single-page-app format. It uses React-Redux for all of the front-end features.',
    buttons: {
      langs: ['HTML', 'CSS', 'React-Redux'],
      other: [['See Live', 'https://strong-croquembouche-21dba9.netlify.app/', 'Icons/see-project-icon.svg'], ['See Source', 'https://github.com/Danie12345/metrics-webapp', 'Icons/source-icon.svg']],
    },
  },
  {
    name: 'final-capstone',
    image: 'Icons/final-capstone.png',
    bgimage: 'Icons/final-capstone-bg.png',
    title: 'Book.it',
    text: 'An app to rent your dream vintage vehicle. Utilizes React-Redux and Ruby on Rails.',
    buttons: {
      langs: ['React-Redux', 'Rails'],
      other: [['See Live', 'https://bookit-fe.netlify.app/', 'Icons/see-project-icon.svg'], ['See Source', 'https://github.com/Danie12345/bookit-fe', 'Icons/source-icon.svg']],
    },
  },
].reverse();

export default cardsArr;