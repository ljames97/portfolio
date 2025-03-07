// data.jsx

import { moodBoardCover, myChai2, myChai3, myChai4, myChai5, myChai6, myChaiCode, myChaiCode2, myChaiCover, plantBudCover, portfolioCover } from "../assets";

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
    caseStudy: true
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
    caseStudyPhotos: [myChaiCover, myChai3, myChai2],
    uiPhotos: [myChai6, myChai4],
    codePhotos: [myChaiCode2],
    overview: `MyChai is a full-stack eCommerce platform for premium loose-leaf tea and teaware. It features a responsive UI, a cart system with Firebase integration, Stripe payments, and a light/dark mode toggle for a personalized user experience. The backend, built with Node.js and Railway, manages payments and order processing securely.
    
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
    challenges: [
      {
        title: "Stripe Payment Integration & Backend Hosting",
        problem:
          "The initial Stripe integration broke in production due to CORS errors and missing image paths. Additionally, deploying the Node.js server with Railway resulted in 502 errors due to a misconfigured port.",
        solution: [
          "Deployed server.js separately in a new GitHub repository.",
          "Hosted the backend with Railway, correcting the PORT mismatch (8080 instead of 4000).",
          "Solved CORS issues by allowing multiple frontend origins.",
          "Adjusted image paths so Stripe could fetch them correctly on the checkout page.",
        ],
      },
      {
        title: "Firebase Authentication & Cart Management",
        problem:
          "Managing cart state for both guest and authenticated users required a secure, scalable approach.",
        solution: [
          "Implemented LocalStorage for guest users and Firebase for authenticated users",
          "Used React Context API to manage global cart state efficiently.",
          "Configured Firebase authentication rules for secure order tracking and profile updates.",
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
    finalThoughts: 'This project involved full-stack development, from frontend UI/UX to backend authentication & payments. Debugging deployment challenges with Railway, Stripe, and Firebase strengthened my problem-solving skills in a production-like environment.',
  }
]

export { projects, comingSoon, caseStudies };