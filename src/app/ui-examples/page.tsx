"use client";

import Button from "@/components/commons/Button";
import Card from "@/components/commons/Card";
import Chat from "@/components/commons/Chat";
import CheckBox from "@/components/commons/CheckBox";
import DropDown from "@/components/commons/DropDown";
import Input from "@/components/commons/Input";
import MenuItem from "@/components/commons/MenuItem";
import CommonNavBar from "@/components/commons/NavBar";
import CommonProgressBar from "@/components/commons/ProgressBar";
import CommonToolTip from "@/components/commons/ToolTip";
import UnderlineButton from "@/components/commons/UnderlineButton";
import { ButtonProps } from "@/types/components/commons/Button";
import { UnderlineButtonProps } from "@/types/components/commons/UnderlineButton";
import { useState } from "react";

const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  imageUrl: "./icons/profile.png",
};

export default function ExamplePage() {
  const buttonType: ButtonProps["type"][] = [
    "gnbLogin",
    "signupLogin",
    "checkBasic",
    "basicMiddle",
    "basicSmall",
    "aiRecommend",
  ];
  const underlineButtonType: UnderlineButtonProps["type"][] = [
    "passwordReset",
    "signupEmail",
    "resend",
  ];
  const [checkTest1, setCheckTest1] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState("");

  return (
    <div className='flex flex-col gap-8 p-4'>
      {/* ------------------------------ NavBar ------------------------------ */}
      <div className='flex flex-col'>
        <span className='text-heading-1'>NavBar</span>
        <span className='px-2 text-body-3'>user가 있는 경우</span>
        <CommonNavBar user={user} />
        <span className='px-2 text-body-3'>user가 없는 경우</span>
        <CommonNavBar user={null} />
      </div>

      {/* ------------------------------ ProgressBar ------------------------------ */}
      <div className='flex flex-col gap-4'>
        <span className='text-heading-1'>ProgressBar</span>
        <CommonProgressBar progress={25} />
        <CommonProgressBar progress={50} />
        <CommonProgressBar progress={75} />
      </div>

      {/* ------------------------------ ToolTip ------------------------------ */}
      <div className='flex flex-col gap-4'>
        <span className='text-heading-1'>ToolTip</span>
        <CommonToolTip
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          position='right'
        >
          Lorem ipsum dolor sit amet
        </CommonToolTip>
      </div>

      {/* ------------------------------ Button ------------------------------ */}
      {buttonType.map((v, i) => (
        <Button
          key={i}
          type={v}
          text={v + " 테스트"}
          width={144}
          height={48}
        />
      ))}

      {/* ------------------------------ Card ------------------------------ */}
      <Card
        title='주의해 주세요 !'
        description='로그인 유지는 개인정보를 위해 개인 기기에서 사용해 주세요.'
      />

      {/* ------------------------------ CheckBox ------------------------------ */}
      <CheckBox
        id='checkbox1'
        text='로그인 유지'
        isChecked={checkTest1}
        onCheck={() => setCheckTest1(prev => !prev)}
      />

      {/* ------------------------------ MenuItem ------------------------------ */}
      <MenuItem
        type='small' // basic || small
        text='메뉴 아이템 테스트'
      />

      {/* ------------------------------ DropDown ------------------------------ */}
      <DropDown
        type='basic' // basic || small
        width={256}
        height={64}
        items={[
          {
            type: "basic",
            text: "메뉴 아이템 1",
          },
          {
            type: "basic",
            text: "메뉴 아이템 2",
          },
        ]}
        placeholder='드롭다운 선택'
      />

      {/* ------------------------------ UnderlineButton ------------------------------ */}
      {underlineButtonType.map((v, i) => (
        <UnderlineButton
          key={i}
          type={v}
          text={v + " 테스트"}
          width={244}
          height={48}
        />
      ))}

      {/* ------------------------------ Input ------------------------------ */}
      <Input
        type='default'
        id='input1'
        label='이메일'
        placeholder='이메일을 입력해 주세요.'
        text={text}
        setText={setText}
        isRequired={true}
      />

      {/* ------------------------------ Chat ------------------------------ */}
      <Chat
        placeholder='채팅 입력'
        text={chat}
        setText={setChat}
        maxRows={10}
      />
      <div className='mb-24'></div>
    </div>
  );
}
