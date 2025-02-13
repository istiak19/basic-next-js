const UserPage = async () => {
    const res = await fetch('http://localhost:3000/api/items');
    const users = await res.json();

    return (
        <div>
            <h2 className="text-center text-xl">User list</h2>
            {
                users?.map(user => (
                    <div className="text-center" key={user._id}>
                        <h2>Name: {user?.name}</h2>
                        <p>Email: {user?.email}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default UserPage;