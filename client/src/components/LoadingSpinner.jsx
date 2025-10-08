// LoadingSpinner component for consistent loading states across the app

const LoadingSpinner = ({ size = "md", text = "Loading..." }) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className={`animate-spin rounded-full border-b-2 border-lightblue ${sizeClasses[size]}`}
      />
      {text && (
        <p className={`mt-2 text-gray ${textSizeClasses[size]}`}>{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
