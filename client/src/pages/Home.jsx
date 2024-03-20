import axios from "axios";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import { URL } from "../url";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
 

const Home = () => {
  
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      setPosts(res.data);
      setNoResults(res.data.length === 0);
    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        {posts.map((post) => (
          <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
            <HomePosts post={post} />
          </Link>
        ))}
        {noResults && <h3 className="text-center font-bold mt-16">No posts available</h3>}
      </div>
    </>
  );
};

export default Home;
