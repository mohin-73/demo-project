export function Button({ children, onClick, className = "", variant = "solid" }) {
  const base = "px-3 py-2 rounded text-sm font-medium cursor-pointer";
  const styles = {
    solid: "bg-white text-black hover:bg-gray-200",
    ghost: "bg-transparent text-white hover:bg-white hover:text-black",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
