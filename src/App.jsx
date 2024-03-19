import { Toaster } from "react-hot-toast";
import "./App.css";
import Location from "./Components/Location";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Spinner from "./Components/Spinner";

function App() {
  const { getToken, isLoaded, isSignedIn } = useAuth();

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

  if (!isSignedIn) {
    // if not signed in, then route to signin page:
    return (
      <div className="w-[100vw] h-[100vh] flex flex-col gap-10 justify-center items-center">
        <h1 className="text-center text-2xl font-medium">
          Please authenticate yourself for accessing this page
        </h1>
        <Link
          to="/signin"
          className="text-center text-4xl font-semibold underline text-blue-800"
        >
          Sign in to view this page
        </Link>
      </div>
    );
  }

  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <Toaster position="top-right" />
      <Location />
    </>
  );
}

export default App;
