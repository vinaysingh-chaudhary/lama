import Image from 'next/image';
import CreateProjectButton from '../components/Buttons/CreateProjectButton'
import homelogo from '../assets/homelogo.png'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-5 p-24">

      <div className='flex flex-col justify-center items-center gap-5'>
        <p className='text-primary text-5xl font-bold'>Create a New Project</p>
         <Image src={homelogo} alt='Home logo' width={400} height={400}  />
      </div>


        <p className="text-2xl text-center text-pmlight px-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        </p>

        <CreateProjectButton />

        <Link href={"/projects"} className=' h-14  w-80 bg-primary flex justify-center items-center gap-2 rounded-xl cursor-pointer' >
           <p className='text-xl font-bold text-white '>Your Projects</p>
       </Link>
    </main>
  );
}
