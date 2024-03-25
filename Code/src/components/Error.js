import { useRouteError } from "react-router-dom";
import error from "../../assets/404.svg"; // Assuming your import path is correct

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="w-5/12 m-auto my-40">
      <img src={error} className="h-96" alt="Error" /> {/* Adjusted src to use the imported image */}
    </div>
  );
};

export default Error;
