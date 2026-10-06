import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RootLayout from './RootLayout/RootLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Users from './Pages/Users';
import UserDetails from './Pages/UserDetails';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;