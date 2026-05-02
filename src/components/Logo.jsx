import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';
import './css/Logo.css';

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <Image src={logo} alt="FakeStore logo" width={48} height={48} priority />
    </Link>
  );
};

export default Logo;
