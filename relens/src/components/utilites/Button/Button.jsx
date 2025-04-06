import classes from "./Button.module.css";

export default function Button({
  children,
  isActive = false,
  onClick,
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${classes.button} ${isActive ? classes.active : ""}`}
    >
      {children}
    </button>
  );
}
