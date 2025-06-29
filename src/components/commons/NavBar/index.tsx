import { NavBarProps } from "@/types/components/commons/NavBar";
import Link from "next/link";

const CommonNavBar = ({ user }: NavBarProps) => {
  return (
    <div className='flex h-20 w-full items-center justify-between border-b border-solid border-background px-4'>
      <Link href='/'>
        <span className='cursor-pointer text-heading-3 text-primary transition-colors hover:text-primary-300'>
          Healthon.
        </span>
      </Link>
      <div className='flex items-center gap-10'>
        <div className='row flex gap-8'>
          {/* TODO: 각 서비스별 실제 링크 확정 후 href 수정 필요 */}
          <Link href='/'>
            <button className='text-body-4 text-grey-700 transition-colors hover:text-grey-600'>
              서비스 소개
            </button>
          </Link>
          <Link href='/'>
            <button className='text-body-4 text-grey-700 transition-colors hover:text-grey-600'>
              하루 메일
            </button>
          </Link>
          <Link href='/'>
            <button className='text-body-4 text-grey-700 transition-colors hover:text-grey-600'>
              AI 챗봇
            </button>
          </Link>
        </div>
        {/* TODO: 버튼 공통 컴포넌트 개발 후 수정 필요 */}
        <div>
          {user ? (
            <button className='rounded-full border-2 border-solid border-background px-2 py-2 text-caption transition-colors hover:bg-background'>
              {
                <img
                  src={user.imageUrl || "./icons/profile.png"}
                  alt={user.name || "User"}
                  className='h-5 w-5'
                />
              }
            </button>
          ) : (
            <Link href='/sign-in'>
              <button className='rounded-md border-2 border-solid border-background px-2 py-2 text-body-5 transition-colors duration-200 hover:bg-background'>
                로그인/회원가입
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonNavBar;
