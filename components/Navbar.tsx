import Image from 'next/image';
import Logo from '../public/assets/Logo.svg';

export default function Navbar() {
  return (
    <div className='sticky top-0 mx-auto md:max-w-screen-lg z-[2] py-[1rem]'>
      <Image src={Logo} alt='andrew_logo' width={80} height={80} />
    </div>
  );
}
