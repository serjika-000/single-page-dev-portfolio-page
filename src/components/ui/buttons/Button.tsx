import { ReactNode, HTMLAttributes } from "react";


interface Props extends HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | "link";
  href?: string;
  
}


function Button({ type = "button", children, href, ...rest }: Props) {
  let renderButton: ReactNode;

  if (type === "link") {
  
    renderButton = (
      <a
        href={href}
        {...rest}
        className={
          "text-[16px] font-bold uppercase tracking-[2.28571px] leading-6 underline decoration-green underline-offset-[12px] hover:text-green transition duration-200 " +
          rest.className
        }
      >
        {children}
      </a>
    );
  } else {
    
    renderButton = (
      <button
        type={type}
        {...rest}
        className={
          "text-[16px] font-bold uppercase tracking-[2.28571px] leading-[26px] underline decoration-green underline-offset-[12px] hover:text-green transition duration-200 " +
          rest.className
        }
      >
        {children}
      </button>
    );
  }

  
  return renderButton;
}

export default Button;
