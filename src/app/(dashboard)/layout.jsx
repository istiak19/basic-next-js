import Link from "next/link";

const DashboardLayout = ({ children }) => {
    return (
        <div className="grid grid-cols-12 *:p-8">
            <div className="bg-orange-300 col-span-3">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li>User Home</li>
                    <li>Profile</li>
                    <li>Manage Content</li>
                </ul>
            </div>
            <div className="col-span-9 bg-red-300">
                {
                    children
                }
            </div>
        </div>
    );
};

export default DashboardLayout;