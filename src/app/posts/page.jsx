import Link from "next/link";

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data;
}

export const metadata = {
    title: 'Posts',
}

const Posts = async () => {
    const posts = await getPosts();
    return (
        <div className="grid grid-cols-4 gap-5 m-5">
            {
                posts?.map(post => <div className="bg-orange-400 p-5 text-black rounded-sm" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link href={`posts/${post.id}`} className="btn btn-success">Details</Link>
                </div>)
            }
        </div>
    );
};

export default Posts;