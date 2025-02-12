"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
    const isLog = false;
    const handleNavigate = () => {
        if (isLog) {
            router.push('/about/aboutDetails')
        }
        else {
            router.push('/')
        }
    };

    return (
        <div>
            <h2>About Page</h2>
            <p>
                <Link href='/about/aboutDetails'>About Details</Link> <br />
                <button className="btn btn-accent" onClick={handleNavigate} type="button">About Details</button>
            </p>
        </div>
    );
};

export default About;