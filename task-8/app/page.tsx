"use client";
import Link from "next/link";
import Login from "./api/auth/login/page";
import JobListings from "./JobListing/page";
import { useCookies } from "next-client-cookies";
import { useSession } from "next-auth/react";

export default function Home() {
  const cookies = useCookies();
  const { status } = useSession();
  return (
    <>
      {cookies.get("access-token") == undefined &&
      status == "unauthenticated" ? (
        <Login />
      ) : (
        <JobListings />
      )}
    </>
  );
}
