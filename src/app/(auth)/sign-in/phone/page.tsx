"use client";

import { useForm } from "react-hook-form";
import Input from "@/components/commons/Input";

export interface PhoneSignInForm {
  phone: string;
  password: string;
  remember: boolean;
}

export default function PhoneSignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<PhoneSignInForm>({
    defaultValues: { remember: false, phone: "", password: "" },
    mode: "onSubmit",
  });

  const phoneValue = watch("phone") || "";
  const isPhoneError = phoneValue.length > 0 && /\D/.test(phoneValue);

  const onSubmit = (data: PhoneSignInForm) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full max-w-xs flex-col gap-4'
    >
      <h2 className='mb-2 text-body-2'>전화번호로 시작하기</h2>

      <Input
        type={errors.phone ? "error" : "default"}
        id='phone'
        label='전화번호'
        placeholder='01012345678'
        font='body-5'
        text={phoneValue}
        setText={setValue}
        register={register("phone", {
          required: "전화번호를 입력해주세요.",
          pattern: {
            value: /^(010|011|016|017|018|019)\d{7,8}$/,
            message: "올바른 형식의 전화번호를 입력해 주세요.",
          },
        })}
      />
      {isPhoneError && (
        <span className='text-[14px] text-caution'>
          숫자만 입력 가능합니다.
        </span>
      )}
      {errors.phone && !isPhoneError && (
        <span className='text-[14px] text-caution'>{errors.phone.message}</span>
      )}

      {/* 비밀번호 */}
      <div>
        <label
          htmlFor='password'
          className='mb-1 block text-[14px]'
        >
          비밀번호
        </label>
        <input
          id='password'
          type='password'
          placeholder='비밀번호를 입력하세요.'
          autoComplete='current-password'
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 8,
              message: "8자 이상 입력해 주세요.",
            },
          })}
          className='w-full rounded-md border border-border bg-white px-3 py-2 text-[14px] focus:outline-primary'
        />
        {errors.password && (
          <span className='mt-1 block text-[13px] text-caution'>
            {errors.password.message}
          </span>
        )}
      </div>

      {/* ****************************************************** */}
      {/* 로그인 유지 */}
      {/* ****************************************************** */}
      <div className='mb-2 flex items-center justify-between'>
        <label className='flex items-center text-[14px]'>
          <input
            type='checkbox'
            {...register("remember")}
            className='mr-2 accent-primary'
          />
          로그인 유지
        </label>
        <a
          href='#'
          className='text-[13px] text-grey-400 hover:underline'
        >
          비밀번호 재설정
        </a>
      </div>
      <button
        type='submit'
        className='mb-2 w-full rounded-md bg-primary py-2 text-[15px] font-semibold text-white disabled:bg-grey-200'
        disabled={isSubmitting}
      >
        로그인
      </button>
      <div className='mt-2 text-center text-[13px] text-grey-400'>
        계정이 없으신가요?{" "}
        <a
          href='#'
          className='font-medium text-primary hover:underline'
        >
          전화번호로 회원가입
        </a>
      </div>
    </form>
  );
}
