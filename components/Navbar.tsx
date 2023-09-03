'use client';
import Image from 'next/image';
import Logo from '../public/assets/Logo.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [color, setColor] = useState('transparent');

  useEffect(() => {
    const changeColor: any = () => {
      if (window.scrollY >= 90) {
        setColor('');
      } else {
        setColor('transparent');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed top-0 left-0 w-full z-10 ease-in duration-300 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-slate-600'
    >
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
        </div>
      </div>
    </div>
  );
}
