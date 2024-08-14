import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Navbar from "./components/Navbar";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const App = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="header bg-light py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header-title">
            <h2 className="mb-0">Navbar</h2>
          </div>
          <div className="d-flex align-items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link to="/sign-in" className="btn btn-primary ms-3">
                Sign In
              </Link>
            </SignedOut>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  );
};

export default App;
