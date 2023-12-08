import {
  FaGithub,
  FaDev,
  FaLinkedin
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  firstName: "Brian",
  lastName: "Collet",
  title: "Brian Collet's Portfolio | DevOps | Cloud",
  author: {
    name: "Brian Collet",
    accounts: [
      {
        url: "https://www.linkedin.com/in/briancollet/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "https://github.com/BrianCollet",
        label: "GitHub Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://dev.to/briancollet",
        label: "Dev.to Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "mailto:brian@briancollet.com",
        label: "Email Brian",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;