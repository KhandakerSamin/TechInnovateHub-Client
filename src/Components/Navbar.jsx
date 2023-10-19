import logo from '../assets/Images/download__1_-removebg-preview.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import swal from 'sweetalert';
import { useContext } from 'react';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const navLinks = <>
        <li className='text-lg font-bold'><NavLink to='/'>Home</NavLink></li>
        {user && <li className='text-lg font-bold'><NavLink to="/addProduct">Add Product</NavLink></li>}
        {user && <li className='text-lg font-bold'><NavLink to="/cart">My Cart</NavLink></li>}
    </>

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
        swal("Signed Out!", "Signed Out Successfully!", "success");
        console.log("signed OUt");
    }


    return (
        <div className="navbar md:px-[25x] bg-[#A3BB98] shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm gap-x-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className=''>
                    <img className='h-12 md:ml-10 w-full' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-x-4 menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='mr-10 flex justify-center items-center'>

                    <div className='flex justify-center items-center'>
                        {user && (
                            <p className='font-semibold text-lg hidden md:block mr-3'>
                                {user.displayName || "User"} {/* Use "User" as a fallback */}
                            </p>
                        )}
                        {user ?
                            <img className='rounded-full w-[35px] md:w-[40px] h-[35px] md:h-[40px] mr-5' src={user.photoURL} alt='' />
                            :
                            // <img className='w-10 h-10 rounded-full mr-4' src={img} alt="" />
                            <></>
                        }
                    </div>

                    <div>
                        {
                            user ? (
                                <Link to='/'><button onClick={handleSignOut} className='text-xl font-bold text-black'>Sign Out</button></Link>
                            ) : (
                                <Link to='/signIn'><button className='text-xl font-bold text-black'>SignIn</button></Link>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;