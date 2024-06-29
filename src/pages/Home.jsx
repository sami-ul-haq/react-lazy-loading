import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if(loading){
    return <h1 className="text-3xl font-bold mb-5 text-center">Laoding Posts</h1>
  }

  return (
    <section className="max-w-[1200px] m-auto p-2">
      <h1 className="text-3xl font-bold mb-5">Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
        {posts.slice(0,8).map((post) => (
          <div key={post.id} className="group card border border-black shadow-sm p-3 hover:bg-black transition-all duration-300 ease-in-out">
            <h2 className="font-bold group-hover:text-white">{post.title}</h2>
            <p className="group-hover:text-white">{post.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
