import CommonNavBar from "@/components/commons/NavBar";
import CommonProgressBar from "@/components/commons/ProgressBar";
import CommonToolTip from "@/components/commons/ToolTip";

const user = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  imageUrl: "./icons/profile.png",
};

export default function ExamplePage() {
  return (
    <div className='flex flex-col gap-8 p-4'>
      <div className='flex flex-col'>
        <span className='text-heading-1'>NavBar</span>
        <span className='px-2 text-body-3'>user가 있는 경우</span>
        <CommonNavBar user={user} />
        <span className='px-2 text-body-3'>user가 없는 경우</span>
        <CommonNavBar user={null} />
      </div>
      <div className='flex flex-col gap-4'>
        <span className='text-heading-1'>ProgressBar</span>
        <CommonProgressBar progress={25} />
        <CommonProgressBar progress={50} />
        <CommonProgressBar progress={75} />
      </div>
      <div className='flex flex-col gap-4'>
        <span className='text-heading-1'>ToolTip</span>
        <CommonToolTip
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          position='right'
        >
          Lorem ipsum dolor sit amet
        </CommonToolTip>
      </div>
    </div>
  );
}
