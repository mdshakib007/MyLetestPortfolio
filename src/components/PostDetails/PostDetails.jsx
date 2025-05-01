import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BiWorld } from "react-icons/bi";
import { PiHandsClapping, PiShareFatLight } from "react-icons/pi";
import { CiRead } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { FaCommentDots, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { handleClap, handleComment } from '../../utils/blogActions';
import toast from 'react-hot-toast';
import CustomMarkdown from '../CustomMarkdown/CustomMarkdown';
import PostDetailsSkeleton from '../Loading/PostDetailsSkeleton';
import CommentsSkeleton from '../Loading/CommentsSkeleton';
import slugify from '../../utils/slugGenerator';
import { Helmet } from 'react-helmet-async';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PostDetails = () => {
    const { postSlug } = useParams();
    const postId = postSlug.split('-')[0];

    const [postDetails, setPostDetails] = useState({});
    const [totalClaps, setTotalClaps] = useState(0);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadingComments, setLoadingComments] = useState(false);
    const [commentLoading, setCommentLoading] = useState(false);

    // Build SEO meta values
    const title = postDetails.title ? `${postDetails.title} - MD Shakib Ahmed` : 'Loading... - MD Shakib Ahmed';
    const description = postDetails.summary ||
        (postDetails.body ? postDetails.body.replace(/[#>*\[\]\(\)`]/g, '').slice(0, 160) : 'Read this article by MD Shakib Ahmed.');
    const keywords = `MD Shakib Ahmed, blog, ${postDetails.tags?.map(t => t.name).join(', ') || ''}`;
    const canonical = window.location.href;
    const imageUrl = postDetails.image || 'https://algoaspire.com/default-post.jpg';

    const clapPost = async () => {
        try {
            const clapData = await handleClap(postId);
            setTotalClaps(clapData.clap_count);
        } catch (error) {
            console.error("Error clapping post:", error);
        }
    };

    const commentPost = async () => {
        const commentBody = document.getElementById(`comment-box`).value;
        if (!commentBody) {
            toast.error("Please fill out the field");
            return;
        }

        setCommentLoading(true);
        try {
            const commentData = await handleComment(postId, "Anonymous User", commentBody);
            document.getElementById(`comment-box`).value = "";
            setComments([commentData, ...comments]);
            setCommentCount(commentCount + 1);
        } catch {
            toast.error("Something went wrong.");
        } finally {
            setCommentLoading(false);
        }
    };

    const copyPostLink = async () => {
        const slug = slugify(postDetails.title);
        const url = `https://mdshakib007.vercel.app/posts/${postId}-${slug}`;
        try {
            await navigator.clipboard.writeText(url);
            toast.success("Post link copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy post link:", error);
            toast.error("Failed to copy post link.");
        }
    };

    const fetchCommentList = async (url = `${BACKEND_URL}/api/v1/blog/posts/${postId}/comments/`) => {
        setLoadingComments(true);
        try {
            const response = await fetch(url);
            const data = await response.json();

            setComments(data.results);
            setCommentCount(data.count);
            setNextPage(data.next);
            setPrevPage(data.previous);
        } catch (error) {
            console.error("Error fetching comments:", error);
        } finally {
            setLoadingComments(false);
        }
    };

    const handleNextPage = () => nextPage && fetchCommentList(nextPage);
    const handlePrevPage = () => prevPage && fetchCommentList(prevPage);

    useEffect(() => {
        setLoading(true);
        fetch(`${BACKEND_URL}/api/v1/blog/posts/${postId}/`)
            .then(res => res.json())
            .then(data => {
                setPostDetails(data);
                setTotalClaps(data.clap_count || 0);
                setCommentCount(data.comments?.length || 0);
                fetchCommentList();
            })
            .catch(err => console.error("Error fetching post: ", err))
            .finally(() => setLoading(false));
    }, [postId]);

    return (
        <section id={`post-${postId}-details`} className='container mx-auto items-center px-2 max-w-4xl'>
            {/* SEO Tags */}
            <Helmet>
                <title>{title}</title>
                <link rel="canonical" href={canonical} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonical} />
                <meta property="og:image" content={imageUrl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imageUrl} />
            </Helmet>

            {loading ? (
                <PostDetailsSkeleton />
            ) : (
                <div className='bg-gray-700 shadow-md shadow-gray-900'>
                    <div className='flex justify-between items-center p-3'>
                        <div className='flex gap-4 items-center'>
                            <img src="/shakib.jpeg" alt="shakib" className='h-14 w-14 rounded-full' />
                            <div>
                                <h4 className='md:text-lg font-bold'>MD Shakib Ahmed</h4>
                                <p className='text-xs md:text-sm text-gray-300 flex items-center gap-1'>
                                    {postDetails?.created_at && (
                                        <>
                                            {new Date(postDetails.created_at).toLocaleString('en-US', {
                                                year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                            })} • <BiWorld />
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                        <p className='flex items-center gap-1 text-gray-300'>
                            <CiRead /> {postDetails?.reads}
                        </p>
                    </div>

                    <div>
                        <h1 className='text-2xl md:text-4xl font-bold p-3'>{postDetails?.title}</h1>
                        {postDetails?.image && <img src={postDetails.image} alt="Blog cover" className="w-full object-cover" />}
                        <CustomMarkdown className="p-4">{postDetails?.body}</CustomMarkdown>
                    </div>

                    <div className='flex flex-wrap gap-2 mx-3 my-5'>
                        {postDetails?.tags?.map(tag => (
                            <span key={tag.id} className='bg-yellow-500 text-black rounded-full px-2'># {tag.name}</span>
                        ))}
                    </div>

                    <div className='px-3 text-gray-300 text-sm'>
                        <p>{totalClaps} Claps • {commentCount} Comments</p>
                    </div>

                    <div className='flex justify-between items-center m-3 border-y border-black py-2 text-gray-300'>
                        <button className='flex-1 flex justify-center items-center btn btn-outline border-none text-sm md:text-lg px-2 py-1' onClick={clapPost}>
                            <PiHandsClapping /> Clap
                        </button>
                        <button className='flex-1 flex justify-center items-center btn btn-outline border-none text-sm md:text-lg px-2 py-1' onClick={copyPostLink}>
                            <PiShareFatLight /> Share
                        </button>
                    </div>

                    <div className="animate-slideDown p-3 border-t border-gray-600 w-full max-w-full">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/shakib.png" alt="User" className="h-8 w-8 rounded-full" />
                            <div className="flex items-center bg-gray-800 rounded-full px-3 py-2 w-full">
                                <input type="text" placeholder="Write a comment as anonymous..." className="bg-transparent w-full outline-none text-gray-200 text-xs md:text-sm placeholder-gray-400" id={`comment-box`} />
                                <button onClick={commentPost} className="p-2 bg-yellow-500 cursor-pointer rounded-full text-black transition text-xs md:text-sm disabled:opacity-50 w-8 h-8 flex items-center justify-center" disabled={commentLoading}>
                                    {commentLoading ? (<span className="loading loading-spinner text-black w-4 h-4"></span>) : (<IoSend size={18} />)}
                                </button>
                            </div>
                        </div>

                        <h1 className='my-2 text-lg font-semibold'>Showing Comments {`${comments.length}/${commentCount}`}</h1>

                        {loadingComments ? <CommentsSkeleton /> : (
                            <div className="space-y-4">
                                {comments.map((comment, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <img src="/shakib.png" alt="User" className="h-8 w-8 rounded-full" />
                                        <div className='bg-gray-800 p-3 rounded-lg'>
                                            <p className="text-sm font-semibold text-yellow-500">{comment.name}</p>
                                            <p className="text-sm text-gray-300">{comment.body}</p>
                                        </div>
                                    </div>
                                ))}
                                {comments.length === 0 && <p className='flex justify-center items-center gap-2 my-10'><FaCommentDots /> Be the first to comment</p>}
                                <div className='flex justify-between'>
                                    <button className='btn bg-yellow-500 text-black mt-10' onClick={handlePrevPage} disabled={!prevPage}><FaArrowLeft /></button>
                                    <button className='btn bg-yellow-500 text-black mt-10' onClick={handleNextPage} disabled={!nextPage}>Next Comments <FaArrowRight /></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default PostDetails;
