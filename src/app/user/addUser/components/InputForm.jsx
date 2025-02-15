"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const InputForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();

        if (!name || !email) {
            setError("All fields are required!");
            setLoading(false);
            return;
        }

        const info = { name, email };
        console.log("Submitting:", info);

        try {
            const res = await axios.post('/api/items', info);
            const data = res.data;

            if (data.insertedId) {
                router.push('/user');
            } else {
                setError("Failed to submit data.");
            }
        } catch (err) {
            setError("Error submitting form. Please try again.");
            console.error("Submission error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form className="card-body max-w-2xl mx-auto" onSubmit={handleForm}>
                {error && <p className="text-red-500">{error}</p>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        className="input input-bordered" 
                        required 
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        className="input input-bordered" 
                        required 
                    />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-success" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InputForm;