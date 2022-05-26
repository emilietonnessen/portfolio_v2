import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  theme: 'primary' | 'github';
  size: 'cta' | 'lg' | 'md' | 'sm';
}

const Button = ({ children, theme, size, type }: ButtonProps) => (
  <button className={`btn btn--${theme} btn--${size}`} type={type}>
    {children}
  </button>
);

export default Button;

interface ButtonLinkProps {
  children: React.ReactNode;
  link: string;
  download?: boolean;
  theme: 'primary' | 'github';
  size: 'cta' | 'lg' | 'md' | 'sm';
}

export const ButtonLink = ({
  children,
  link,
  download,
  theme,
  size,
}: ButtonLinkProps) => (
  <a
    href={link}
    download={download}
    className={`btn btn--${theme} btn--${size}`}
  >
    {children}
  </a>
);
