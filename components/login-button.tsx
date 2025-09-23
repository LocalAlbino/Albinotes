import Link from "next/link";
import { roboto } from "@/lib/fonts";

export default function LoginButton() {
  return (
    <Link
      className={`${roboto.className} select-none rounded-md w-30 text-center bg-green-500 px-4 py-2 text-white text-lg md:text-xl hover:bg-green-600`}
      href="/login"
    >
      Log in
    </Link>
  );
}
