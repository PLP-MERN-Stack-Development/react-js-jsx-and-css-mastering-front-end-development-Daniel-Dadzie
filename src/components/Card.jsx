// src/components/Card.jsx
const Card = ({ children }) => {
  return (
    <div className="
      p-6 
      bg-white dark:bg-gray-800 
      shadow-lg dark:shadow-gray-700
      rounded-lg 
      max-w-sm 
      mx-auto 
      transition-transform duration-300 
      transform hover:scale-105 
      hover:shadow-2xl
    ">
      {children}
    </div>
  );
};

export default Card;
