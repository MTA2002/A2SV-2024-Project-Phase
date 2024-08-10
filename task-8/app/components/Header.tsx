"use client";
import Link from "next/link";
import React from "react";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const cookies = useCookies();
  const router = useRouter();
  const { status, data: session } = useSession();

  const handleLogout = () => {
    cookies.remove("access-token");
    if (status == "authenticated") {
      signOut();
    }
    router.refresh();
  };
  if (status === "loading") {
    return <div>Loading ...</div>;
  }

  return (
    <nav className="shadow p-5 w-full fixed top-0 z-50 bg-white">
      <ul className="flex justify-between items-center">
        <Link href={"/"}>
          <li className="text-[#9c57eb] text-2xl font-bold">Logo.</li>
        </Link>

        <div className="flex gap-4">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/"}>
            <li>Jobs</li>
          </Link>
          <Link href={"/"}>
            <li>Volunetring</li>
          </Link>

          <Link href={"/"}>
            <li>AboutUs</li>
          </Link>
        </div>
        <div className="flex gap-2">
          {cookies.get("access-token") == undefined &&
          status == "unauthenticated" ? (
            <>
              <Link
                href="/api/auth/login"
                className="border 1 px-3 py-1 border-[#801ed3] rounded-lg text-[#801ed3]"
              >
                Login
              </Link>
              <Link
                href="/api/auth/signup"
                className="bg-[#801ed3] px-3 py-1 rounded-lg text-white"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              {status == "authenticated" && (
                <>
                  <Image
                    alt=""
                    src={session.user?.image!}
                    width={30}
                    height={20}
                  />
                  <p>{session.user?.name!}</p>
                </>
              )}
              <button
                className="border 1 px-3 py-1 border-[#801ed3] rounded-lg text-[#801ed3]"
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Header;
