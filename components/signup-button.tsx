import Link from "next/link";
import { roboto } from "@/lib/fonts";

export default function SignupButton() {
  return (
    <Link
      className={`${roboto.className} rounded-md w-30 text-center bg-gray-200 px-4 py-2 text-lg md:text-xl hover:bg-gray-300`}
      href="/signup"
    >
      Sign up
    </Link>
  );
}
