"use client";

import { useForm } from "react-hook-form";
import Input from "@/components/commons/Input";
import Link from "next/link";
import { useState } from "react";
import CheckBox from "@/components/commons/CheckBox";
import UnderlineButton from "@/components/commons/UnderlineButton";
import Card from "@/components/commons/Card";
import Button from "@/components/commons/Button";

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
    defaultValues: { phone: "", password: "" },
    mode: "onSubmit",
  });
  const [isRemember, setIsRemember] = useState(false);

  const phoneValue = watch("phone") || "";
  const passwordValue = watch("password") || "";
  const isPhoneError = phoneValue.length > 0 && /\D/.test(phoneValue);

  const onSubmit = (data: PhoneSignInForm) => {
    console.log(isRemember);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-[378px] flex-col gap-4'
    >
      <h2 className='mb-2 text-body-2'>전화번호로 시작하기</h2>

      {/* 전화번호 */}
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
      <Input
        type={errors.password ? "error" : "default"}
        id='password'
        label='비밀번호'
        placeholder='비밀번호를 입력해주세요.'
        font='body-5'
        iconType='password'
        text={passwordValue}
        setText={setValue}
        register={register("password", {
          required: "비밀번호를 입력해주세요.",
          pattern: {
            value: /^.{8,}$/,
            message: "8자 이상 입력해주세요.",
          },
        })}
      />
      {errors.password && (
        <span className='text-[14px] text-caution'>
          {errors.password.message}
        </span>
      )}

      {/* 로그인 유지 & 비밀번호 재설정 */}
      {isRemember && (
        <Card
          title='주의해 주세요!'
          description='로그인 유지는 개인정보를 위해 개인 기기에서 사용해 주세요.'
          font='caption'
          width={378}
        />
      )}

      <div className='flex items-center justify-between'>
        <CheckBox
          id='remember'
          text='로그인 유지'
          containerHeight={24}
          boxSize={24}
          isChecked={isRemember}
          onCheck={() => setIsRemember(!isRemember)}
          font='body-5'
        />

        <Link href='#'>
          <UnderlineButton
            type='passwordReset'
            text='비밀번호 재설정'
            width={100}
          />
        </Link>
      </div>

      {/* 로그인 버튼 */}
      <Button
        type='checkBasic'
        text='로그인'
        width={378}
        height={56}
        disabled={isSubmitting}
      />

      <div className='flex items-center justify-center gap-1'>
        <p className='text-grey-400'>계정이 없으신가요?</p>
        <Link href='#'>
          <UnderlineButton
            type='signupEmail'
            text='전화번호로 회원가입'
          />
        </Link>
      </div>
    </form>
  );
}
