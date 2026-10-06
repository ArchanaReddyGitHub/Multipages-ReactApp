import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';

function RootLayout() {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <Outlet />
            </main>

            <footer className="app-footer">
                <p>© 2026 React Multi-Page App By Archana Reddy Vaadaa</p>
            </footer>
        </div>
    );
}

export default RootLayout;