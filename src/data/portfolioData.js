import { portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, projectComingSoon } from "../assets/images";

const portfolioData = [
    {
        id: 1,
        title: "Weather App",
        category: "",
        imgSrc: portfolio1,
        description: "Weather App built with Next.js, TypeScript, Tailwind CSS, and Jotai for state management. It integrates the OpenWeatherMap API to provide real-time weather data with geolocation support, responsive design, and dynamic city search with autocomplete suggestions. Axios is used for API requests, and the project is deployed on VERCEL.",
        link: "https://weather-app-gil.vercel.app/"
    },
    {
        id: 2,
        title: "Project Management",
        category: "",
        imgSrc: portfolio7,
        description: "This full-stack application, built with the PERN stack (PostgreSQL, Express, React, Node.js), streamlines team collaboration by allowing users to manage workspaces, track projects, and assign tasks. It leverages Clerk for secure authentication, Neon for serverless PostgreSQL storage, and Inngest for handling background jobs like automated email notifications. Deployed on Vercel, the platform offers a robust, production-ready solution for efficient project workflows.",
        link: "https://project-mgt-xi.vercel.app/"
    },
    {
        id: 3,
        title: "E-commerce SPA",
        category: "",
        imgSrc: projectComingSoon,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
]

export default portfolioData;
