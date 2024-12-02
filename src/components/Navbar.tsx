import Link from 'next/link';
import Ul from './Ul';

function Navbar() {
  return (
    <nav className='flex flex-row justify-between bg-indigo-900 text-white p-4 items-center shadow-2xl'>
      <p className='font-bold select-none text-2xl cursor-default'> RPA TUPER </p>
      <Ul className='flex flex-col'>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/jobs">
            Jobs
          </Link>
        </li>
        <li>
          <Link href="/queue">
            Queue
          </Link>
        </li>
        <li>
          <Link href="/helper">
            Helper
          </Link>
        </li>
      </Ul>
    </nav>
  );
}

export default Navbar;