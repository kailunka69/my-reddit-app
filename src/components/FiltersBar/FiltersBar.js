import React, { useState } from "react";
import { useSelector } from "react-redux";

export const FiltersBar = () => {
    const posts = useSelector((state) => state.posts);
    const status = useSelector((state) => state.posts.status);

    console.log("this is the array of posts", posts.posts);
    console.log(status);

    return (
        <div className="filters-bar">
            <form> 
                <label htmlFor="author">Author:</label>
                <select name="author" id="author">
                    {status === 'succeeded' && posts.posts.map((post) => (
                        <option key={post.id} value={post.author}>{post.author}</option>
                    ))}
                </select>
            </form>
        </div>
    );
};
