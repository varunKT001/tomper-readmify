import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, CreateReadme } from './pages';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='create' element={<CreateReadme />} />
      </Routes>
    </Router>
  );
}
