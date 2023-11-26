import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
export default function AppLayout() {
  return (
    <div className="grid grid-cols-[15%_1fr] grid-rows-[10%_1fr_5%] min-h-screen">
      <Header />
      <Nav />
      <main className="bg-green-200 col-start-2">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
