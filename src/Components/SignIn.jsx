import React from "react";
import { SignIn, useAuth } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

const SignInPage = () => {
      const { getToken, isLoaded, isSignedIn } = useAuth();
      const navigate = useNavigate();

      if (!isLoaded) {
        return (
          <>
            <h1 className="text-blue-800 font-semibold text-4xl text-center absolute top-20 right-[46%]">
              Loading...
            </h1>
            <Spinner />
          </>
        );
      }
      if (isSignedIn) {
        navigate("/");
      }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex-col justify-center items-center">
        <SignIn />
        <div>
          <h1 className="text-center mt-10">
            Don't have an account yet?{" "}
            <Link to={"/signup"} className="text-blue-800 underline">
              Sign Up Here Now
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
