export const Footer = () => {
  return (
    <footer className="flex flex-row p-2 w-full items-center justify-center">
      <ul className="flex flex-row gap-4">
        <p className="text-sm select-none cursor-default">
          © {new Date().getFullYear()} Tuper. Todos os direitos reservados.
        </p>
        <p className="text-sm cursor-pointer select-none">Contact us</p>
      </ul>
    </footer>
  );
};
