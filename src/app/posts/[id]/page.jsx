const Post = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    console.log(data)
    return (
        <div>

        </div>
    );
};

export default Post;