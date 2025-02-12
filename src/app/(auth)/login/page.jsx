import Link from "next/link";

const Login = () => {
    return (
        <div>
            <h3>Login page</h3>
            <p className="text-yellow-300 underline">
                <Link href='/register'>Register</Link>
            </p>
        </div>
    );
};

export default Login;