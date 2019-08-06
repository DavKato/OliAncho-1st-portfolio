export default {
  //Home preview
  main: {
    about: 'Who we are',
    works: 'What we have done',
    blog: 'Our blog',
    location: 'Where we have been'
  },

  //Form section normal
  formSub: 'Hire us.. Or simply say hello!',
  yourName: 'Name:',
  yourContact: 'E-mail:',
  formTitle: 'Title:',
  formMessage: 'Message:',
  formSubmission: 'Send Message',
  formDummy: "Don't fill this one",
  yourNamePh: '',
  yourContactPh: '',
  formTitlePh: '',
  formContentPh: '',
  //Form section errors
  nameError: 'Please enter your name.',
  emailError: 'Please enter a valid email address.',
  titleError: 'Please enter the title (anything!).',
  messageError: 'Message has to have 20 ~ 300 charactors.',
  //Form thanks
  thanks: {
    caption: 'Message sent!',
    message: 'Thank you 😀'
  },

  //ABOUT
  about: {
    caption:
      'We are OliAncho.\nWe take care all of the frontend stuff of any kind of web project.\n..and we love it!',
    daviPosition: 'Web Developer',
    gobuPosition: 'Designer',
    gobuSkill: 'WEB DESIGN / GRAPHIC DESIGN',
    daviSkill: 'CODING - HTML5, CSS, JavaScript',
    gobuDetail:
      "We all know that the design can really change the impression to users.\nI try my best to create a design that is user friendly and intuitive, that the idea just flows into user's head before they read a single text.\nI provide a flexible and personalized design that fits perfectly in the final media.\n..and a bit of fantasy and humour if there is a room for it :D",
    daviDetail:
      "I'm an ex-musician frontend developer who's brought up in Japan.\nI mainly use a JaveScript framework called Vue/Nuxt.js to build a website that is performant and SEO friendly (technical people call it \"statically generated SPA\").\nI tend to be more careful rather than speedy when it comes to create something.\nWell, that's it about me. We are looking forward to hear from you!"
  },

  //WORKS
  works: {
    caption: 'Check out our works!\nClick one of them to see the details.',
    clientCap: 'Client',
    techCap: 'Role',
    list: [
      {
        name: "Marina's Language Lesson",
        images: ['Marina-demo1.png', 'Marina-demo2.png'],
        imageFolder: 'marina',
        client: 'Marina Soranzo',
        tech:
          'Site design, Graphic design, Coding - Vue/Nuxt.js, Multi-Language, Responsive, Translation support',
        description:
          'This is this and yeah I love beer.\n My wife is a goblin and I am proud. I hope it helps.\nHey Sydney, How are you doing? I miss you!',
        url: 'https://www.marina.com'
      },
      {
        name: '',
        images: ['under-construction.png'],
        imageFolder: 'construction',
        client: '',
        tech: '',
        description: '',
        url: ''
      }
    ]
  },

  //BLOG
  blog: {
    caption: 'Latest Post',
    readThis: 'To this article',
    latestPost: "Under construction... It's gonna be good!",
    intro: "We'll be writing about 4 main categories",
    life: 'Nomad\nLife',
    work: 'Web\nDev',
    teaching: 'Japanese\nLessons',
    recipe: 'Gluten\nFree',
    goto: 'To the\nBlog Page'
  },

  //LOCATION
  location: {
    caption: 'All We Need Is a Lap Top and a Network!',
    intro:
      "Go South in winter, Go North in summer.\n'Get one, Release one' is our motto.\n We are degital nomads mainly based in Europe and Asia.",
    currentParagraph: 'Currently\nIn：',
    currentLocation: 'Germany',
    numberVisited: 'cntry'
  },

  //POSTS
  posts: {
    all: 'All',
    life: 'Nomad Life',
    web: 'Web Dev',
    japanese: 'Japanese',
    glutenFree: 'Gluten Free',
    noPrev: 'This is the oldest post',
    noNext: 'This is the latest post'
  }
};
