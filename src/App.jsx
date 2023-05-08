import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Attack from './components/Attack';
import Drift from './components/Drift';
import Home from './components/Home';
import Karting from './components/Karting';
import NotFound from './components/NotFound';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="drift" element={<Drift />} />
            <Route path="attack" element={<Attack />} />
            <Route path="karting" element={<Karting />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
