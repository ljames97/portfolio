// data.jsx

import { moodBoardCover, myChaiCover, plantBudCover, portfolioCover } from "../assets";

const projects = [
  {
    title: 'MyChai.',
    subtitle: 'Premium Tea E-Commerce Store',
    shortDescription: `MyChai is an ecommerce concept store for speciality loose leaf teas.`,
    description_1: 'MyChai is a concept eCommerce store for specialty loose-leaf teas, built to demonstrate proficiency in React and showcase design skills for eCommerce.',
    coverPhoto: [myChaiCover],
    skills: 'React, node.js, SCSS, Railway, FireBase.',
    exploreLink: '/my-chai',
    url: 'https://ljames97.github.io/my-chai',
    gitHub: 'https://github.com/ljames97/my-chai',
    backgroundColor: 'bg-dark-brown',
    caseStudy: false
  },
  {
    title: 'PlantBud.',
    shortDescription: `PlantBud is a plant care assistant application for plant enthusiasts.`,
    description_1: 'PlantBud is a concept plant care management app, built to demonstrate proficiency in Vanilla JavaScript and CSS, showcasing core front-end web development skills.',
    coverPhoto: [plantBudCover],
    skills: 'Javascript, CSS, Firebase.',
    exploreLink: '/plant-bud',
    url: 'https://ljames97.github.io/plant-bud',
    gitHub: 'https://github.com/ljames97/plant-bud',
    backgroundColor: 'bg-dark-brown'
  },
  {
    title: 'Portfolio.',
    description_1: 'My web developer portfolio, showcasing projects, skills and bio, created using React and styled with Tailwind CSS.',
    skills: 'React, Tailwind CSS.',
    coverPhoto: portfolioCover,
    exploreLink: '/portfolio',
    gitHub: 'https://github.com/ljames97/portfolio',
    portfolio: true
  }
]

const comingSoon = {
    title: 'MoodLab.',
    description_1: 'MoodLab is a collaborative mood board applicaiton that lets users create, customise, and share ideas in real time.',
    skills: 'React, Tailwind CSS, FireBase, Next.js, Node.js.',
    coverPhoto: moodBoardCover,
    comingSoon: true
  }

const caseStudies = [
  {
    id: 'my-chai',
    title: 'MyChai – Premium Loose Leaf Tea eCommerce Store',
    subtitle: 'Full-Stack eCommerce with Stripe Payments & Firebase',
    overview: `MyChai is a concept eCommerce store designed for premium loose-leaf teas and teaware. The goal was to build a fully functional, responsive eCommerce platform with core features like a cart system, product sorting, user accounts, and Stripe payments.

    Additionally, I wanted to learn Node.js backend fundamentals and integrate a Railway-hosted API for secure payments.
    
    My target audience was tea enthusiasts looking for a curated shopping experience.
    This influenced design decisions, UI choices, and the color palette, ensuring an elegant and minimal aesthetic.`,
    tech: ["React", "SCSS", "Firebase", "Node.js", "Stripe", "Railway"],
    uiFeatures: [
      { feature: "Fully Responsive Design", description: "Mobile-first approach for seamless browsing." },
      { feature: "Product Filtering & Sorting", description: "Users can filter by category, price, and relevance." },
      { feature: "Review System", description: "Customers can view & submit reviews for each product." },
      { feature: "Cart System", description: "Items persist via LocalStorage (for guests) or Firebase (for account users)." },
      { feature: "Customer Accounts", description: "Users can view order history, update account details, and upload profile photos." },
      { feature: "Stripe Checkout Integration", description: "Secure payment processing with test card support." },
      { feature: "Dark/Light Mode Toggle", description: "Customizable user experience with persistent theme state." },
    ],
    designChoices: {
      colorPalette: "Earthy tones (browns, tans, greens) inspired by natural tea colors.",
      typography: [
        { type: "Serif", useCase: "Logo (luxurious, brand authority)" },
        { type: "Sans-serif", useCase: "UI (modern, clean, and minimal)" },
      ],
    },
    challenges: [
      {
        title: "Stripe Payment Integration & Backend Hosting",
        problem:
          "Stripe was straightforward on localhost, but when deploying, the integration broke due to CORS errors and missing image paths. Initially, I ran the backend locally (localhost:4000), but when moving to production, I had 502 errors on Railway, even though logs and variables seemed correct.",
        solution: [
          "Hosted `server.js` separately in a new GitHub repository.",
          "Used Railway to deploy the backend, fixing the PORT mismatch (should be 8080, not 4000).",
          "Solved CORS issues by allowing multiple frontend origins: `['https://ljames97.github.io', 'https://ljames97.github.io/my-chai']`.",
          "Adjusted image paths so Stripe could fetch them correctly on the checkout page.",
        ],
      },
      {
        title: "Firebase Authentication & Cart Management",
        problem:
          "Managing cart state across guest users and authenticated users was tricky. Firebase rules needed to be adjusted to allow secure cart modifications.",
        solution: [
          "Used LocalStorage for guest users and Firebase for authenticated users.",
          "Applied React Context API to avoid prop drilling and ensure cart state was globally accessible.",
          "Implemented Firebase authentication rules for secure account creation, order tracking, and profile photo updates.",
        ],
      },
    ],
    futureImprovements: {
      shortTerm: [
        { title: "Shopify Migration", description: "Convert MyChai into a real Liquid-powered Shopify store." },
        { title: "Wishlist Feature", description: "Allow users to save favorite products for later." },
        { title: "Animations & UX Improvements", description: "Smooth scroll-based animations for a more engaging UI." },
        { title: "Comprehensive React Testing", description: "Jest & React Testing Library for better test coverage." },
      ],
      longTerm: [
        { title: "Multi-Step Checkout Process", description: "Instead of instant Stripe redirection." },
        { title: "Internationalization Support", description: "Multi-language & currency options." },
      ],
    },
    finalThoughts: 'This project deepened my understanding of full-stack development, from frontend UI/UX to backend deployment and authentication. The most challenging part was debugging deployment issues with Railway, Stripe, and CORS, but those challenges reinforced problem-solving skills that are critical for real-world projects.',
  }
]

export { projects, comingSoon, caseStudies };