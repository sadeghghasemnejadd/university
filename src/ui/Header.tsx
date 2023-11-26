import { FiMoon } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="col-start-2 flex items-center justify-end px-9">
      <FiMoon fontSize={30} className="cursor-pointer" />
    </header>
  );
}
