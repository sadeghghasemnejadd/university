import { useNavigate } from 'react-router-dom';

const listItem = [
  {
    name: 'teachers',
    path: '/teacher',
  },
  {
    name: 'students',
    path: '/student',
  },
  {
    name: 'lessons',
    path: '/lesson',
  },
];
export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="col-start-1 row-[1/-2] flex flex-col items-center py-10 gap-20 bg-blue-300">
      <h1 className="text-lg font-extrabold">SadeghUni</h1>
      <ul className="flex flex-col uppercase w-full text-center">
        {listItem.map((item) => (
          <li
            className="transition-all hover:bg-blue-50 w-full h-16 flex items-center justify-center cursor-pointer"
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
