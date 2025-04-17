import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { HashLink } from 'react-router-hash-link';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;


const RecentBlogs = () => {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/api/v1/blog/recent-posts/`)
            .then(res => res.json())
            .then(data => setRecentPosts(data));
    }, [])

    return (
        <section id='blogs' className='container mx-auto mt-24 items-center px-6'>
            <h1 className='text-4xl md:text-6xl mb-5'>Recent Posts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    recentPosts.map(recentPost => (
                        <BlogCard key={recentPost.id} blogPost={recentPost}></BlogCard>
                    ))
                }
            </div>
            <div className='flex justify-center items-center'>
                <HashLink
                    className='btn btn-wide btn-outline hover:bg-yellow-500 hover:text-black hover:shadow-lg shadow-black mt-10'
                    to='/posts#'>
                    All Posts
                </HashLink>
            </div>
        </section>
    );
};

export default RecentBlogs;