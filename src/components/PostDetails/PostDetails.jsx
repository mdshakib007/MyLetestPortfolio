import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BiWorld } from "react-icons/bi";
import { PiHandsClapping, PiShareFatLight } from "react-icons/pi";
import { CiRead } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { handleClap, handleComment } from '../../utils/blogActions';
import toast from 'react-hot-toast';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { HashLoader } from 'react-spinners';


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PostDetails = () => {
    const { postId } = useParams();
    const [postDetails, setPostDetails] = useState({});
    const [totalClaps, setTotalClaps] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const clapPost = async () => {
        try {
            const clapData = await handleClap(postId);
            setTotalClaps(clapData.clap_count);
        } catch (error) {
            console.error("Error clapping post:", error);
        }
    };

    const commentPost = async () => {
        const commentBody = document.getElementById(`comment-${postId}-box`).value;
        if (!commentBody) {
            toast.error("Please fill out the field");
            return;
        }
        try {
            const commentData = await handleComment(postId, "Anonymous User", commentBody);
            document.getElementById(`comment-${postId}-box`).value = "";
            setComments([commentData, ...comments]);
            setCommentCount(commentCount + 1);
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    }

    const copyPostLink = async () => {
        const url = `https://mdshakib007.vercel.app/posts/${postId}`;
        try {
            await navigator.clipboard.writeText(url);
            toast.success("Post link copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy post link:", error);
            toast.error("Failed to copy post link.");
        }
    };

    useEffect(() => {
        setLoading(true);
        fetch(`${BACKEND_URL}/api/v1/blog/posts/${postId}/`)
            .then(res => res.json())
            .then(data => {
                setPostDetails(data);
                setTotalClaps(data.claps || 0);
                setComments(data.comments || []);
                setCommentCount(data.comments?.length || 0);
            })
            .catch(err => console.error("Error fetching post: ", err))
            .finally(() => setLoading(false));
    }, [postId]);


    return (
        <section id={`post-${postId}-details`} className='container mx-auto mt-24 items-center px-6 max-w-4xl'>
            {
                loading ? (
                    <div className="min-h-[50vh] flex justify-center items-center h-32">
                        <HashLoader color="#facc15" size={50} />
                    </div>

                ) : <div className='bg-gray-700 rounded-lg shadow-md shadow-gray-900'>
                    <div className='flex justify-between items-center p-3'>
                        <div className='flex gap-4 items-center'>
                            <img src="/shakib.jpeg" alt="shakib" className='h-14 w-14 rounded-full' />
                            <div>
                                <h4 className='text-lg font-bold'>MD Shakib Ahmed</h4>
                                <p className='text-sm text-gray-300 flex items-center gap-1'>
                                    {postDetails?.created_at?.slice(0, 10)} • <BiWorld />
                                </p>
                            </div>
                        </div>
                        <p className='flex items-center gap-1 text-gray-300 tooltip' data-tip='Total Reads'>
                            <CiRead /> {postDetails?.reads}
                        </p>
                    </div>

                    <div>
                        <div>
                            <h1 className='text-2xl md:text-4xl font-bold p-3'>{postDetails?.title}</h1>
                            {postDetails?.image && <img src={postDetails.image} alt="Blog cover" className="w-full object-cover" />}

                            <div className='prose prose-invert max-w-none'>
                                <Markdown remarkPlugins={[remarkGfm]}>{postDetails?.body}</Markdown>
                            </div>

                        </div>

                        <div className='flex flex-wrap gap-2 mx-3 my-5'>
                            {postDetails?.tags?.map(tag => (
                                <span
                                    key={tag.id}
                                    className='bg-yellow-500 text-black rounded-full px-2'
                                >
                                    # {tag.name}
                                </span>
                            ))}
                        </div>

                        <div className='px-3 text-gray-300 text-sm'>
                            <p>{totalClaps} Claps • {commentCount} Comments</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center m-3 border-y border-black py-2 text-gray-300'>
                        <button
                            className='flex-1 flex justify-center items-center btn btn-outline border-none text-sm md:text-lg px-2 py-1'
                            onClick={clapPost}
                        >
                            <PiHandsClapping /> Clap
                        </button>
                        <button
                            className='flex-1 flex justify-center items-center btn btn-outline border-none text-sm md:text-lg px-2 py-1'
                            onClick={copyPostLink}
                        >
                            <PiShareFatLight /> Share
                        </button>
                    </div>


                    {/* Conditionally render the comment box with a slide-down animation */}
                    <div className="animate-slideDown p-3 border-t border-gray-600 w-full max-w-full">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/shakib.png" alt="User" className="h-8 w-8 rounded-full" />
                            <div className="flex items-center bg-gray-800 rounded-full px-3 py-2 w-full">
                                <input
                                    type="text"
                                    placeholder="Write a comment as anonymous..."
                                    className="bg-transparent w-full outline-none text-gray-200 text-xs md:text-sm placeholder-gray-400"
                                    id={`comment-${postId}-box`}
                                />
                                <button
                                    onClick={commentPost}
                                    className="p-2 bg-yellow-500 cursor-pointer rounded-full text-black transition text-xs md:text-sm hover:scale-110"
                                >
                                    <IoSend size={18} />
                                </button>
                            </div>
                        </div>

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
                        </div>
                    </div>
                </div>
            }

        </section>
    );
};

export default PostDetails;