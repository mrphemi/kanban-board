import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva("rounded-3xl capitalize transition-colors duration-300", {
  variants: {
    intent: {
      primary: "bg-kb-purple-primary hover:bg-kb-purple-secondary text-white",
      secondary:
        "bg-kb-grey-light-primary text-kb-purple-primary dark:bg-white",
      danger: "bg-kb-mandy-primary hover:bg-kb-mandy-secondary text-white",
    },
    size: {
      small: "py-[10px] px-4",
      medium: "pt-2 pb-[9px] px-12 copy-lg",
      large: "pt-[15px] pb-[14px] px-12 heading-md",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "large",
  },
});

button();
button({ intent: "secondary", size: "small" });

interface ButtonProps {
  label?: string;
}

export interface Props
  extends ButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button = ({
  label,
  className,
  intent,
  size,
  children,
  onClick,
}: Props) => {
  return (
    <button
      className={twMerge(button({ intent, size, className }))}
      onClick={onClick}
    >
      {label} {children}
    </button>
  );
};

export default Button;
