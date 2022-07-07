import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
export const data = {
  navData: {
    //start of navbar data
    //nav menu list items
    navMenu:[
      {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome size={24} />,
      },
      {
        title: 'ABOUT ME',
        path: '/about',
        icon: <IoIcons.IoIosPaper  size={24} />,
      },
      {
        title: 'PORTFOLIO',
        path: '/portfolio',
        icon: <IoIcons.IoMdPeople size={24}/>,
      },
      {
        title: 'Blog',
        path: '/blog',
        icon: <FaIcons.FaEnvelopeOpenText  size={24}/>,
      },
      {
        title: 'CONTACT',
        path: '/contact',
        icon: <IoIcons.IoMdHelpCircle  size={24}/>,
      },
  ],
  //navbar social icons
  navSocialIcons:[
    {
      
      path: '/about',
      icon: <IoIcons.IoIosPaper  size={24} />,
    },
    {
      
      path: '/resume',
      icon: <FaIcons.FaCartPlus  size={24}/>,
    },
    {
      path: '/portfolio',
      icon: <IoIcons.IoMdPeople size={24}/>,
    },
    {
      title: 'Blog',
      path: '/blog',
      icon: <FaIcons.FaEnvelopeOpenText  size={24}/>,
    },
  ],
  //navbar bio/ image and name
  NavBio:{
    image: 'https://i.ibb.co/PtN2b12/Whats-App-Image-2022-06-30-at-3-57-49-PM.jpg',
    name: "HDOBI TAYLOR",
  },
  //nav all right reserved
  AllRightReserved:{
    property: "2021 © Cosmos-Themes.",
    AllRight: "All Right Reserved.",
  },
    },
//end of navData
//start of home page data
    home: {
        role: "Frontend Developer",
        github: [{
            name: "Github",
            link: "https://github.com/charlyfinos"
        },
        {
          name: "Github",
          link: "https://github.com/charlyfinos"
      }
      ],
        linkedin:[{
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/carlosefinos/"
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/carlosefinos/"
      }],
        instagram: {
            name: "Instagram",
            link: "https://instagram.com/charliefinos"
        }
      
    },
    about: {
        name: "Carlos Finos",
        country: "Argentina",
        province: "Chaco",
        photo: "https://avatars.githubusercontent.com/u/60705940?s=400&u=6e2047a1bb81cace747d1b9772fe4c459e748165&v=4",
        summary: "Enthusiastic Frontend developer eager to contribute to team success through hard work. Clear understanding of React and training in Smart Contract development and UI design. Motivated to learn, grow and excel in software development",
        summary_1: "I am also a photographer and crypto enthusiast.",
    },
    portfolio: [
        {
            title: "Social Media",
            description: "This is a social media project to share and comment photos, follow friends and see their posts. Built with Node, Express and Images on Cloudinary cloud on Backend. Client side build with React, Redux, React-Router, React-Bootstrap, Scss.",
            photo: "http://res.cloudinary.com/dxb7leok1/image/upload/v1622245176/xvqgccd35incpyozvg6m.png",
            github_link: "https://github.com/charlyfinos/social-media",
            live_link: "https://social-media-smpl.herokuapp.com/"
        }, {
            title: "Weather App widget",
            description: "This is an app that was designed in figma and created with React and SCSS, where I brought the information from OpenWeatherMap Api.",
            photo: "http://res.cloudinary.com/dxb7leok1/image/upload/v1628795980/pyc19tvkmeclv9klsl7b.png",
            github_link: "https://github.com/charlyfinos/weather-app-1",
            live_link: "https://charlie-weather-app.herokuapp.com/"
        }, {
            title: "Fruits Memory Card Game",
            description: "Simple memory game. Every time you click the cards renders on a random way, and the goal of the game is to click on each fruit without repeating. Built with React, React-Router, React-Bootstrap",
            photo: "https://res.cloudinary.com/dxb7leok1/image/upload/v1622142956/hd0uonvzja784mh5j6an.png",
            github_link: "https://github.com/charlyfinos/memory-card",
            live_link: "https://memory-card-game-1.herokuapp.com/"
        }
    ]
}

export default data                                  