function Button({ children, variant = 'primary', className = '', onClick, fullWidth = false }) {
  const baseClasses = 'font-medium rounded-full transition-colors';
  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700 px-4 py-2',
    secondary: 'bg-white text-red-600 border border-red-600 hover:bg-red-50 px-4 py-2',
    outline: 'bg-transparent text-gray-800 border border-gray-300 hover:border-red-600 hover:text-red-600 px-4 py-2',
    link: 'text-red-600 hover:text-red-700 underline px-0 py-0'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
