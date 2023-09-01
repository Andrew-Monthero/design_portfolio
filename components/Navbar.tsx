import Image from 'next/image';
import Logo from '../public/assets/Logo.svg';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='sticky top-0 z-[3] backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-600'>
      <div className='mx-[1rem] md:mx-auto md:max-w-screen-lg py-[0.75rem] flex justify-between items-center'>
        <Link href='/'>
          <Image
            src={Logo}
            alt='andrew_logo'
            className='w-[60px] md:w-[80px] md:h-[80px]'
          />
        </Link>
        <div className='flex gap-4'>
          <Link href='/about' className='p-[0.75rem]'>
            About
          </Link>
          <Link href='/contact' className='p-[0.75rem]'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
