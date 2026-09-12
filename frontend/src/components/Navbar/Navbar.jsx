import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const { user, isAuthenticated, logout } = useAuth();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Explore", path: "/destinations" },
        { name: "✨ AI Planner", path: "/ai-planner" },
    ];

    const handleLogout = () => {
        logout();
        setMenuOpen(false);
        navigate("/");
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-orange-100">
            <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"
                >
                    Triply
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-slate-700 hover:text-orange-500 transition duration-300 font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {isAuthenticated && (
                        <Link
                            to="/my-trips"
                            className="text-slate-700 hover:text-orange-500 transition duration-300 font-medium"
                        >
                            My Trips
                        </Link>
                    )}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {!isAuthenticated ? (
                        <>
                            <Link
                                to="/login"
                                className="font-medium text-slate-700 hover:text-orange-500 transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-2.5 rounded-full hover:scale-105 transition shadow-lg"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/profile"
                                className="font-medium text-slate-700 hover:text-orange-500 transition"
                            >
                                {user?.name || "Profile"}
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="font-medium text-slate-700 hover:text-orange-500 transition"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-3xl text-slate-800"
                >
                    {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white px-6 py-5 shadow-lg">
                    <div className="flex flex-col gap-5">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className="text-slate-700 hover:text-orange-500 font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {isAuthenticated && (
                            <Link
                                to="/my-trips"
                                onClick={() => setMenuOpen(false)}
                                className="text-slate-700 hover:text-orange-500 font-medium"
                            >
                                My Trips
                            </Link>
                        )}

                        {!isAuthenticated ? (
                            <>
                                <Link
                                    to="/login"
                                    onClick={() => setMenuOpen(false)}
                                    className="font-medium text-slate-700 hover:text-orange-500"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    onClick={() => setMenuOpen(false)}
                                    className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 rounded-full text-center"
                                >
                                    Register
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/profile"
                                    onClick={() => setMenuOpen(false)}
                                    className="font-medium text-slate-700 hover:text-orange-500"
                                >
                                    {user?.name || "Profile"}
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="text-left font-medium text-slate-700 hover:text-orange-500"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;