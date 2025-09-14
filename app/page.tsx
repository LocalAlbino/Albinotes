import { roboto, robotoSlab } from "@/lib/fonts";
import LoginButton from "@/components/login-button";
import SignupButton from "@/components/signup-button";

export default function Home() {
  return (
    <main className="m-8">
      <div className="bg-green-500 w-auto px-4 pb-4 pt-2">
        {/* logo here eventually maybe */}
        <strong
          className={`${robotoSlab.className} text-white text-2xl md:text-4xl`}
        >
          Albinotes.
        </strong>
      </div>
      <div className="my-2 md:my-4 flex flex-col gap-2 md:gap-4 md:grid md:grid-cols-2">
        <p
          className={`${roboto.className} text-md md:text-xl p-4 bg-gray-100 w-auto`}
        >
          The world's most{" "}
          <strong className={robotoSlab.className}>generic</strong> note-taking
          app.
        </p>
        {/* placeholder for image or showcase */}
        <div className="md:h-64 h-32 bg-gray-200 w-auto"></div>
      </div>
      <div className="flex flex-col gap-2">
        <p className={`${roboto.className} md:text-xl text-lg`}>Let's get started.</p>
        <div className="flex flex-row md:gap-4 gap-2">
          <LoginButton />
          <SignupButton />
        </div>
      </div>
    </main>
  );
}
