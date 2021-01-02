// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import instagramIcon from "./images/instagram.svg"
import linkedinIcon from "./images/linkedin.svg"
import moonbeamImg from "./images/moonbeam.png"
import digitalinviterImg from "./images/digitalinviter.png"
import hirestreamImg from "./images/hirestream.png"
import cheetayImg from "./images/cheetay.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "hamza",
  headerTagline: [
    //Line 1 For Header
    "Bringing your ideas",
    //Line 2 For Header
    "and innovations",
    //Line 3 For Header
    "to life",
  ],
  //   Header Paragraph
  // headerParagraph:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  headerParagraph:
    "Welcome to my portfolio. I'm a Full Stack Web Developer with experience in developing optimized enterprise web applications using state of the art technologies in the market. Feel free to go through my work history to make sure you're at the right place 😅",
  //Contact Email
  contactEmail: "hamzaakhtar0@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Moonbeam Technologies, Inc.", //Project Title - Add Your Project Title Here
      para:
        "Web portal for interacting with your favorite podcast hosts and sending them tips for showing your support and appreciation", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: moonbeamImg,
      //Project URL - Add Your Project Url Here
      url: "https://moonbeam.fm/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Cheetay Logistics Pvt. Ltd.", //Project Title - Add Your Project Title Here
      para: "E-Commerce platform providing instant logistics services to offer convenience to consumers, restaurant owners, and small-scale businesses across Pakistan", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: cheetayImg,
      //Project URL - Add Your Project Url Here
      url: "https://www.cheetay.pk/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Hirestream", //Project Title - Add Your Project Title Here
      para: "Streamlining recruitment process and hiring the best resources for your organization",
      //Project Image - Add Your Project Image Here
      imageSrc: hirestreamImg,
      //Project URL - Add Your Project Url Here
      url: "https://hirestream.arbisoft.com/careers/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Digital Inviter", //Project Title - Add Your Project Title Here
      para: "A smart way to plan a fun wedding",
      //Project Image - Add Your Project Image Here
      imageSrc: digitalinviterImg,
      //Project URL - Add Your Project Url Here
      url: "http://digitalinviter.com/",
    },
    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "Design webpages in HTML5.",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "CSS3 for page styling and adding visual flares",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Javascript for asynchronous functionality and make the website dynamic",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "ReactJS framework and Redux for optimization and state management",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { 
      img: githubIcon,
      url: "https://github.com/hamzaakhtar953"
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/mhamzaakhtar/",
    },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
