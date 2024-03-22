import React from "react";
import { SignIn, SignUp, useAuth } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const SignUpPage = () => {
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
        <SignUp />
        <div>
          <h1 className="text-center mt-10">
            Already have an account?{" "}
            <Link to={"/signin"} className="text-blue-800 underline">
              Sign In instead
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
