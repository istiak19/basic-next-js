'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();
    if (!pathname.includes('dashboard')) {
        return (
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href='/' className="text-xl">Next Js Basic</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/'>Home</Link></li>
                        {/* <li><Link href='/about'>About</Link></li> */}
                        <li><Link href='/user-dashboard'>DashBoard</Link></li>
                        <li><Link href='/posts'>Posts</Link></li>
                        <li><Link href='/meals'>Meals</Link></li>
                        <li><Link href='/services'>Services</Link></li>
                        <li><Link href='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default NavBar;