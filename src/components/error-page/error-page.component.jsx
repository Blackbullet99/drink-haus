import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCoundown] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      if (!countdown) {
        navigate("/");
        return;
      }
      setCoundown((prev) => prev - 1);
    }, 1000);
  }, [countdown]);

  const goHomeHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <h2>
          Redirecting to Homepage in <span>{countdown}</span>
        </h2>
      </div>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
      </div>
      <div>
        <button onClick={goHomeHandler}>
          Go home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
