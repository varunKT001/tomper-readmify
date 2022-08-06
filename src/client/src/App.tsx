import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, CreateReadme } from './pages';
import { SharedLayout } from './pages/SharedLayout';

export function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='create' element={<CreateReadme />} />
        </Route>
      </Routes>
    </Router>
  );
}
