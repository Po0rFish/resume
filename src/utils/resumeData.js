import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default {
  name: "Denis is coding",
  title: "Front-end development",

  birthday: "09th December 2001",
  email: "denCoding@gmail.com",
  adress: "123 321 Test Drive St",
  phone: "123 456 7890",

  socials: {
    facebook: {
      link: "https://www.facebook.com/",
      text: "DenzelCoding",
      icon: <FacebookIcon />,
    },
    telegram: {
      link: "https://web.telegram.org/",
      text: "MyTelegram",
      icon: <TelegramIcon />,
    },
    GitHub: {
      link: "https://github.com/Po0rFish?tab=repositories",
      text: "MyGit",
      icon: <GitHubIcon />,
    },
  },
};
