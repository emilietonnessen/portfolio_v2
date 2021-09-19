interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  theme: 'primary' | 'github';
  size: 'cta' | 'lg' | 'md' | 'sm';
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  theme,
  size,
  type,
  onClick,
}) => (
  <button
    className={`btn btn--${theme} btn--${size}`}
    type={type}
    onClick={onClick}
  >
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

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  link,
  download,
  theme,
  size,
}) => (
  <a
    href={link}
    download={download}
    className={`btn btn--${theme} btn--${size}`}
  >
    {children}
  </a>
);
