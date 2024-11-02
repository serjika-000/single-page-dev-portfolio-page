// * TYPES
export interface SocialSite {
  icon: string;
  href: string;
  width: number;
  height: number;
  title: string;
}

interface Props {
  socialSite: SocialSite;
}


function SocialLinkIcon({ socialSite }: Props) {
  let renderIcon: JSX.Element;

  switch (socialSite.icon) {
    case "github.svg":
      renderIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
          <path
            fill="#FFF"
            className="transition duration-300 hover:fill-green"
            fillRule="evenodd"
            
          />
        </svg>
      );
      break;
    case "twitter.svg":
      renderIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
          <path
            fill="#FFF"
            className="transition duration-300 hover:fill-green"
            
          />
        </svg>
      );
      break;

    case "frontend-mentor.svg":
      renderIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23">
          <path
            fill="#FFF"
            className="transition duration-300 hover:fill-green"
            
          />
        </svg>
      );
      break;
    case "linkedin.svg":
      renderIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
          <path
            fill="#FFF"
            className="transition duration-300 hover:fill-green"
            fillRule="evenodd"
            
          />
        </svg>
      );
      break;

    default:
      renderIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23">
          <path
            fill="#FFF"
            
          />
        </svg>
      );
      break;
  }

  
  return (
    <a href={socialSite.href} className="" title={socialSite.title}>
      {renderIcon}
    </a>
  );
}

export default SocialLinkIcon;
