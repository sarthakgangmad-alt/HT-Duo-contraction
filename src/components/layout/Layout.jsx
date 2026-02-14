import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-[#C5A059] selection:text-[#0F2B46]">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
