"use client"

import axios from "axios";
import { useRouter } from "next/navigation";

const InputForm = () => {
    const router = useRouter()
    const handleForm = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const info = {
            name: name,
            email: email
        }
        console.log(info)
        const res = await axios.post('http://localhost:3000/api/items', info)
        const data = res.data;
        if (res.data.insertedId) {
            router.push('/user')
        }
    };

    return (
        <div>
            <form className="card-body max-w-2xl mx-auto" onSubmit={handleForm}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default InputForm;