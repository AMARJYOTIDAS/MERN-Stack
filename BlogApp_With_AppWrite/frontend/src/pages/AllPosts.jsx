import React from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../Appwrite/configure";
import { useState } from "react";
import { useEffect } from "react";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts);
      }
    });
  }, []);
  return (
    <div>
      <Container>
        <div className="flex flex-wrap ">
          {posts.map((post) => (
            <div className="p-2 w-1" key={post.$id}>
              <PostCard />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
