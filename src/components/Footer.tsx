export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center gap-4 text-xs pb-3">
      <hr className="border-t-1 border-gray-300 w-10/12 mx-auto" />
      <div className="flex flex-row justify-center gap-10">
        <ul className="flex flex-col gap-1">
          <li>About</li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li>Contact</li>
        </ul>
        <ul className="flex flex-col gap-1">
          <li>Help</li>
        </ul>
      </div>
    </footer>
  );
};
