import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import BlogCard from '../BlogCard/BlogCard';
import { HashLoader } from 'react-spinners';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const BlogPosts = () => {
    const [pageTitle, setPageTitle] = useState("All Posts");
    const [posts, setPosts] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    // Function to fetch posts based on search term and page
    const fetchPosts = (page = 1, search = "") => {
        setLoading(true);
        fetch(`${BACKEND_URL}/api/v1/blog/posts/?page=${page}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.results);
                setNextPage(data.next);
                setPrevPage(data.previous);
                setTotalPosts(data.count);
                setCurrentPage(page);
                setIsSearching(!!search);
                setPageTitle(search ? `Showing results for: "${search}"` : "All Posts");
            })
            .catch(error => console.error("Error fetching posts:", error))
            .finally(() => setLoading(false));
    };


    // Load data on page load (check for URL query parameter)
    useEffect(() => {
        const query = searchParams.get("q") || "";
        const page = Number(searchParams.get("page")) || 1;
        setSearchTerm(query);
        fetchPosts(page, query);
    }, [searchParams]);

    // Handle search submission
    const handleSearch = (e) => {
        e.preventDefault();
        const newParams = {};
        if (searchTerm) newParams.q = searchTerm;
        newParams.page = 1;
        setSearchParams(newParams);
    };


    // Clear search and reset posts
    const clearSearch = () => {
        setSearchTerm("");
        setIsSearching(false);
        setSearchParams({}); 
    };


    return (
        <section id='all-blogs' className='container mx-auto mt-5 items-center px-2 max-w-4xl'>

            {/* Search Bar */}
            <form onSubmit={handleSearch}>
                <div className="animate-slideDown p-4">
                    <div className="flex items-center bg-gray-800 rounded-full px-3 py-2 flex-1 shadow-lg shadow-black">
                        <input
                            type="text"
                            placeholder="Type to search..."
                            className="text-md bg-transparent flex-1 outline-none text-gray-200 placeholder-gray-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="p-2 bg-yellow-500 cursor-pointer rounded-full text-black transition hover:scale-110"
                        >
                            <HiSearch size={18} />
                        </button>
                    </div>
                </div>
            </form>

            {/* Page Title with Reset Button */}
            <div className="flex justify-center items-center gap-2 my-5">
                <h1 className='text-2xl md:text-4xl text-center border-b border-gray-600 pb-2'>
                    {pageTitle}
                </h1>
                {isSearching && (
                    <button
                        onClick={clearSearch}
                        className="text-gray-400 hover:text-yellow-500 transition cursor-pointer"
                    >
                        <IoClose size={28} />
                    </button>
                )}
            </div>

            {/* Show loader when loading */}
            {loading ? (
                <div className="min-h-screen flex justify-center pt-20 h-32">
                    <HashLoader color="#facc15" size={50} />
                </div>
            ) : totalPosts === 0 ? (
                <div className='min-h-screen flex justify-center items-center'>
                    <h1 className='text-2xl md:text-4xl'>No Post Found</h1>
                </div>
            ) : (
                <div className='min-h-screen grid grid-cols-1 gap-5'>
                    {posts.map(post => (
                        <BlogCard key={post.id} blogPost={post} />
                    ))}
                </div>
            )}


            {/* Pagination Controls */}
            {!loading && (
                <div className='flex justify-between items-center mx-2 my-5'>
                    <button
                        onClick={() => {
                            setSearchParams({ q: searchTerm, page: currentPage - 1 });
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={!prevPage}
                        className={`btn bg-yellow-500 text-black`}
                    >
                        <FaArrowLeft />
                    </button>

                    <span className='text-gray-400 text-xs md:text-lg'>
                        {posts.length} / {totalPosts} Posts
                    </span>

                    <button
                        onClick={() => {
                            setSearchParams({ q: searchTerm, page: currentPage + 1 })
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={!nextPage}
                        className={`btn bg-yellow-500 text-black`}
                    >
                        Next <FaArrowRight />
                    </button>
                </div>
            )}
        </section>
    );
};

export default BlogPosts;
