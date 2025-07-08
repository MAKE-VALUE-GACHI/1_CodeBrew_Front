import CommonNavBar from "@/components/commons/NavBar";
import { ReactNode } from "react";

export default function SignLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen w-full flex-col px-4'>
      <CommonNavBar user={null} />
      <main className='mt-20 flex w-full flex-col items-center'>
        {children}
      </main>
    </div>
  );
}
