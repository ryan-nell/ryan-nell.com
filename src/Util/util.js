import displayPicture from './Images/displayPicture.jpg'
import githubIcon from './Images/github.png'
import linkedInIcon from './Images/linkedin.png'
import codecademyIcon from './Images/logo.png'
import phoneIcon from './Images/call.png'
import emailIcon from './Images/email.png'
import tracks from './Images/tracks.png'
import myReads from './Images/myReads.png'
import hoodMap from './Images/hoodMap.png'
import pixelArt from './Images/pixelArt.png'
import memoryGame from './Images/memoryGame.png'
import htmlLogo from './Images/html.png'
import cssLogo from './Images/css.png'
import jsLogo from './Images/js.png'
import reactlogo from './Images/react.png'
import nodeLogo from './Images/express.png'
import gitLogo from './Images/git.png'
import bootstrapLogo from './Images/bootstrap.png'

const MyInformation = {
    fullName: "Ryan Nell",
    displayPicture: displayPicture,
    subtitle: "Junior Front End Developer",
    contact: {
        email: "contact@ryan-nell.com",
        phone: "905-484-5174",
        phoneIcon: phoneIcon,
        emailIcon: emailIcon,
        emailAlt: 'Email Icon',
        phoneAlt: 'Phone Icon'
    },
    skills: [
        {
            id: 1,
            name: 'HTML',
            img: htmlLogo,
            alt: 'HTML logo'
        },
        {
            id: 2,
            name: 'CSS',
            img: cssLogo,
            alt: 'CSS logo'
        },
        {
            id: 3,
            name: 'JavaScript',
            img: jsLogo,
            alt: 'Javasctipt logo'
        },
        {
            id: 4,
            name: 'React.js',
            img: reactlogo,
            alt: 'React logo'
        },
        {
            id: 5,
            name: 'Git',
            img: gitLogo,
            alt: 'Git logo'
        },
        {
            id: 6,
            name: 'Express.js',
            img: nodeLogo,
            alt: 'Express logo'
        },
        {
            id: 8,
            name: 'Responsive Design',
            img: bootstrapLogo,
            alt: 'Boostrap logo'
        }
    ],
    socialMedia: [
        {
            id: 11,
            name: 'GitHub',
            link: 'https://github.com/ryan-nell',
            icon: githubIcon,
            alt: "Github Icon"
        },
        {
            id: 21,
            name: 'Codecademy',
            link:'https://www.codecademy.com/profiles/RyNell92',
            icon: codecademyIcon,
            alt: 'Codecademy Icon'
        },
        {
            id: 31,
            name: 'LinkedIn',
            link:'https://www.linkedin.com/in/rynell92/',
            icon: linkedInIcon,
            alt: 'LinkedIn Icon'
        }
    ],
    projects: [
        {
            id: 111, 
            name: "Tracks Spotify", 
            link: "https://github.com/ryan-nell/tracks-spotify",
            img: tracks,
            alt: "Tracks Spotify Image",
            about: "Search for songs and save them to your Spotify favourites"
        },
        {
            id: 211, 
            name: "Memory Game", 
            link: "https://github.com/ryan-nell/Memory-Game",
            img: memoryGame,
            alt: "Memory Game Image",
            about: "See if you're able to remember where the images lie and pair the matching squares"
        },
        {
            id: 311, 
            name: "Pixel Art Maker", 
            link: "https://github.com/ryan-nell/Pixel-Art-Maker",
            img: pixelArt,
            alt: "Pixel art image",
            about: "Create your pixel styled masterpiece"
        },
        {
            id: 411, 
            name: "Neighbourhood Map", 
            link: "https://github.com/ryan-nell/Neighbourhood-Map",
            img: hoodMap,
            alt: 'Neighbourhood Map image',
            about: "Search for restuarants in your area"
        },
        {
            id: 511, 
            name: "My Reads", 
            link: "https://github.com/ryan-nell/my-library",
            img: myReads,
            alt: "MyReads Image",
            about: "Search for books and add them to your library"

        },
        
    ]
}

export default MyInformation