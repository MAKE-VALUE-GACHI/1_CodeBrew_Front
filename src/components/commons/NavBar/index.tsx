import { NavBarProps } from "@/types/components/commons/NavBar";
import Link from "next/link";
import Button from "@/components/commons/Button";
import Image from "next/image";

// 이미지 URL 유효성 검사 함수
// 유효하지 않은 경우 기본 이미지 반환
const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const CommonNavBar = ({ user }: NavBarProps) => {
  // 사용자 이미지 URL이 유효하지 않은 경우 기본 이미지 사용
  const getImageSrc = () => {
    if (!user?.imageUrl) return "/icons/profile.png";
    return isValidUrl(user.imageUrl) ? user.imageUrl : "/icons/profile.png";
  };

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
                <Image
                  src={getImageSrc()}
                  alt={user.name || "User"}
                  width={20}
                  height={20}
                  className='rounded-full'
                />
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
