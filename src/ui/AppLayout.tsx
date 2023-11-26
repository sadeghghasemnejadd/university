import { Outlet } from 'react-router-dom';
export default function AppLayout() {
  return (
    <>
      <header></header>
      <nav></nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
