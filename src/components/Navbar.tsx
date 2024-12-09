import {
  HomeIcon,
  QueueListIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"; // Heroicons modernos

interface NavbarProps {
  SearchEnabled: boolean;
}

export const Navbar = () => {
  return (
    <nav className="flex flex-row p-2 w-full bg-black text-white justify-center shadow-neutral-300 shadow-xl">
      <ul className="flex flex-row gap-6 items-center">
        {/* Home */}
        <li className="flex items-center gap-2 cursor-pointer select-none hover:text-gray-400">
          <HomeIcon className="h-6 w-6" />
          <span>Home</span>
        </li>

        {/* Queue */}
        <li className="flex items-center gap-2 cursor-pointer select-none hover:text-gray-400">
          <QueueListIcon className="h-6 w-6" />
          <span>Queue</span>
        </li>

        {/* Jobs */}
        <li className="flex items-center gap-2 cursor-pointer select-none hover:text-gray-400">
          <BriefcaseIcon className="h-6 w-6" />
          <span>Jobs</span>
        </li>
      </ul>
    </nav>
  );
};
