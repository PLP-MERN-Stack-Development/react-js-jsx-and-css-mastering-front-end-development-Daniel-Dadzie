const Button = ({ children, onClick, variant = "primary", disabled }) => {
  const base = "px-4 py-2 rounded transition transform duration-200";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-gray-900",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${disabledClass} hover:scale-105`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
