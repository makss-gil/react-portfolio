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
        href: "https://facebook.com",
        icon: FaFacebookSquare
    },
    {
        id: 2, 
        href: "https://instagram.com",
        icon: FaInstagramSquare
    },
    {
        id: 3, 
        href: "https://github.com",
        icon: FaGithubSquare
    },
    {
        id: 4, 
        href: "https://telegram.org",
        icon: FaTelegram
    },
    {
        id: 5, 
        href: "https://linkedin.com",
        icon: FaLinkedin
    },
    {
        id: 6, 
        href: "https://twitter.com",
        icon: FaTwitterSquare
    }
];