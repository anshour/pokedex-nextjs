const LoadingSpinner = ({ show = true }: { show?: boolean }) => {
  if (!show) return null;

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-8 h-8 border-4 border-gray-700 border-t-transparent rounded-full animate-spin" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
