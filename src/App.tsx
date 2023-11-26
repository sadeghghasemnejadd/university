import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<h1>sadegh</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
