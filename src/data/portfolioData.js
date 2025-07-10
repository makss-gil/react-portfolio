import { portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, projectComingSoon } from "../assets/images";

const portfolioData = [
    {
        id: 1,
        title: "Weather App",
        category: "with openweathermap.org",
        imgSrc: portfolio1,
        description: "Weather App built with Next.js, TypeScript, Tailwind CSS, and Jotai for state management. It integrates the OpenWeatherMap API to provide real-time weather data with geolocation support, responsive design, and dynamic city search with autocomplete suggestions. Axios is used for API requests, and the project is deployed on VERCEL.",
        link: "https://weather-app-gil.vercel.app/"
    },
    {
        id: 2,
        title: "",
        category: "",
        imgSrc: projectComingSoon,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
