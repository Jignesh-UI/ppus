import "./loading.css";

const LoadingIndicator = () => {
  return (
    <>
      <div className="spinner-bg"></div>
      <div className="spinner-box">
        <div className="three-quarter-spinner"></div>
      </div>
    </>
  );
};

export default LoadingIndicator;
