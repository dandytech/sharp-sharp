import { NavLink } from "react-router-dom";

export default function MyButton({ children, disabled, to, type, onClick }) {
  const base =
    "foucus:ring-blue-300 text-sm inline-block rounded-full bg-blue-500 font-semibold tracking-wide transition-colors duration-300 hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed px-7";
  const styles = {
    // primary:
    //   base +
    //   "px-4 py-2.5 md:py-3.5 text-sm  md:px-6 foucus:ring-blue-500 inline-block rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed   ",
    // small: base + "px-4 py-2 md:px-6 md:py-3 mb-2 text-xs",
    // round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-xs",
    primary:
      "px-3 md:px-4 lg:px-5 bg-blue-500 rounded-full py-1.5 md:py-2 lg:py-2.5 hover:bg-black hover:text-white border-2 tracking-wide transition-colors focus:ring focus:ring-offsets-2 focus:outline-none disabled:cursor-not-allowed text-sm md:text-md lg:text-lg text-white",

    secondary:
      "px-4 py-1 md:py-3.5 text-sm  md:px-6 foucus:ring-stone-200 inline-block rounded-full bg-stone-200 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed focus:text-stone-800 focus:text-stone-800 text-stone-400 border-2 border-stone-300 hover:text-stone-700",
  };

  if (to)
    return (
      <NavLink to={to} className={styles[type]}>
        {children}
      </NavLink>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
        to={to}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]} to={to}>
      {children}
    </button>
  );
}
