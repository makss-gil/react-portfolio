// footerData.js
import { FaFacebookSquare, FaInstagramSquare, FaTelegram, FaLinkedin, FaTwitterSquare} from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export const infoLinks = [
    {id: 1, href: "skills", label: "skills"},
    {id: 2, href: "services", label: "services"},
    {id: 3, href: "portfolio", label: "portfolio"},
    {id: 4, href: "contact", label: "contact"}
];

export const followLinks = [
    {
        id: 1, 
        href: "https://www.facebook.com/maksim.gilituha/",
        icon: FaFacebookSquare
    },
    {
        id: 2, 
        href: "https://www.instagram.com/makss_gil/",
        icon: FaInstagramSquare
    },
    {
        id: 3, 
        href: "https://github.com/makss-gil",
        icon: FaGithubSquare
    },
    {
        id: 4, 
        href: "https://t.me/makssgil",
        icon: FaTelegram
    },
    {
        id: 5, 
        href: "https://www.linkedin.com/in/maksym-hilitukha-931506359/",
        icon: FaLinkedin
    },
    {
        id: 6, 
        href: "https://x.com/makss_gil",
        icon: FaTwitterSquare
    }
];