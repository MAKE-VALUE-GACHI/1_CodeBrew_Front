import { NavBarProps } from "@/types/components/commons/NavBar";
import Link from "next/link";
import Button from "@/components/commons/Button";

const CommonNavBar = ({ user }: NavBarProps) => {
  return (
    <div className='flex h-20 w-full items-center justify-between border-b border-solid border-background px-4'>
      <Link href='/'>
        <span className='cursor-pointer text-heading-3 text-primary transition-colors hover:text-primary-300'>
          Healthon.
        </span>
      </Link>
      <div className='flex items-center gap-10'>
        <div className='flex flex-row gap-8'>
          {/* TODO: 각 서비스별 실제 링크 확정 후 href 수정 필요 */}
          <Link href='/'>
            <Button
              type='basicSmall'
              text='서비스 소개'
              width={80}
              height={40}
              font='body-4'
            />
          </Link>
          <Link href='/'>
            <Button
              type='basicSmall'
              text='하루 메일'
              width={80}
              height={40}
              font='body-4'
            />
          </Link>
          <Link href='/'>
            <Button
              type='basicSmall'
              text='AI 챗봇'
              width={80}
              height={40}
              font='body-4'
            />
          </Link>
        </div>
        <div>
          {user ? (
            // 공통 버튼에 아이콘 버튼이 별도로 없으므로 이대로 유지
            <Link href='/profile'>
              <button className='rounded-full border-2 border-solid border-background px-2 py-2 text-caption transition-colors hover:bg-background'>
                {
                  <img
                    src={user.imageUrl || "./icons/profile.png"}
                    alt={user.name || "User"}
                    className='h-5 w-5'
                  />
                }
              </button>
            </Link>
          ) : (
            <Link href='/sign-in'>
              <Button
                type='gnbLogin'
                text='로그인/회원가입'
                width={120}
                height={40}
                font='body-5'
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonNavBar;
