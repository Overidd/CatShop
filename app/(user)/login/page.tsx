/* eslint-disable @next/next/no-img-element */
'use client'
import { SignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const appearance = {
  elements: {
    formButtonPrimary: "bg-bgPrimary dark:bg-bgPrimaryDark py-3 transition hover:bg-[#48b] border-none",
    formFieldInput: "rounded-md py-4 px-3", 
    formFieldLabel: "", 
    card: "shadow-lg rounded-xl p-6", 
    formButtonSecondary: "transition hover:bg-[#48b]",
  },
};

const LoginPage = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/cart/paymetohod'; 
  return (
    <section className="min-h-[60dvh] grid grid-cols-1 md:auto-rows-[28rem] 2xl:auto-rows-[40rem] md:grid-cols-2 animate__animated animate__slideInRight">
      <figure className="rounded-xl max-h-full overflow-hidden hidden md:block">
        <img className="w-full h-full object-cover object-center" src="/imgLogin.jpeg" alt="img" />
      </figure>
      <div className="flex flex-col justify-center items-center gap-4">
        <SignIn
          path="/login"
          routing="path"
          signUpUrl="/register"
          appearance={appearance}
          afterSignInUrl={redirectTo} 
        />
      </div>
    </section>
  );
};

export default LoginPage;
