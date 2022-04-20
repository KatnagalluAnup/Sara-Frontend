import React from "react";
// import { authenticate } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

interface Props {
  token?: any;
}

const Auth: React.FC<Props> = () => {
  const navigate = useNavigate();
  /**
   * Submit handler fort login
   */
  function handleSubmit() {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    // navigate(`${apiUrl}/auth?next=${Router.basePath}/auth/in?token=`);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full">
        <button data-testid="signin" className="w-auto h-10 mt-4 px-5 text-eggshell bg-darkSea" onClick={handleSubmit}>
          Sign In with HP account
        </button>
      </div>
    </div>
  );
};

export default Auth;
