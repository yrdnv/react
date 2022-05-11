

export default function PostList({posts}){


    return (
        <div>
            {posts.results.map((post) => (
                <h3 key={post.id}>{post.title}</h3>
            ))}
        </div>
    );
}