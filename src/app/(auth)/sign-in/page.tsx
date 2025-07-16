import SignupButton from "@/components/feature/SignInPage/SignupButton";
import { SIGNUP_BUTTON_TYPES } from "@/constants/signUpButtonType";
import Image from "next/image";

export default function SignInPage() {
  return (
    <section className='w-[425px]'>
      {/* Logo */}
      <h1
        aria-label='logo'
        className='flex justify-center'
      >
        <Image
          src={"/icons/logo.svg"}
          alt='logo'
          width={196}
          height={36}
          className='antialiased'
        />
      </h1>

      {/* 로그인/회원가입 구분선 */}
      <div
        aria-label='sign-divider'
        className='relative mb-14 mt-20 flex items-center'
      >
        <div className='flex-grow border-t border-gray-300' />
        <span className='absolute left-1/2 -translate-x-1/2 bg-white px-4 text-sm text-grey-400'>
          로그인/회원가입
        </span>
        <div className='flex-grow border-t border-gray-300' />
      </div>

      {/* 로그인 버튼 */}
      <nav aria-label='sign-in-buttons'>
        <ul>
          {SIGNUP_BUTTON_TYPES.map((button, idx) => (
            <li key={idx}>
              <SignupButton
                type={button}
                className='mb-4'
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
