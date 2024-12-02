import Link from 'next/link';
import Ul from './Ul';

function Navbar() {
  return (
    <nav className='flex flex-row justify-between bg-indigo-900 text-white p-4 items-center shadow-2xl'>
      <p className='font-bold select-none text-2xl cursor-default'> RPA TUPER </p>
      <Ul className='flex flex-row gap-4 text-white font-semibold'>
          <Link href="/">
            Home
          </Link>
          <Link href="/jobs">
            Jobs
          </Link>
          <Link href="/queue">
            Queue
          </Link>
          <Link href="/helper">
            Helper
          </Link>
      </Ul>
    </nav>
  );
}

export default Navbar;