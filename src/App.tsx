import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Teacher from './features/teacher/Teacher';
import Student from './features/student/Student';
import Lessons from './features/lessons/Lessons';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Navigate replace to="/teacher" />} />
          <Route index path="/teacher" element={<Teacher />} />
          <Route index path="/student" element={<Student />} />
          <Route index path="/lesson" element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
