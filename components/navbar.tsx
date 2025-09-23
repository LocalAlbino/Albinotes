import { robotoSlab } from "@/lib/fonts";
import { NavbarProps } from "@/lib/types";

export default function Navbar({ email }: NavbarProps) {
  email = "test@albinotes.app" // temp value
  return (
    <div className="flex flex-col md:flex-row bg-green-500 w-auto p-4 text-white text-lg md:text-xl">
      {/* Will either update this to a link or add a popup with user info. */}
      <span className={`${robotoSlab.className} m-auto md:m-0 font-bold`}>{email}</span>
    </div>
  );
}
