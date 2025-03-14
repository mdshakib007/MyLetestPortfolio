import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BiWorld } from "react-icons/bi";
import { PiHandsClapping, PiShareFatLight } from "react-icons/pi";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiRead } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { handleClap, handleComment } from '../../utils/blogActions';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const BlogCard = ({ blogPost }) => {
    const { id, title, image, tags, reads, clap_count, comment_count, created_at } = blogPost;
    const [showCommentBox, setShowCommentBox] = useState(false);

    const [totalClaps, setTotalClaps] = useState(clap_count);
    const [comment, setComment] = useState("");
    const [commentCount, setCommentCount] = useState(comment_count);
    const navigate = useNavigate();

    const toggleCommentBox = (e) => {
        e.stopPropagation();
        setShowCommentBox((prev) => !prev);
    };

    const clapPost = async () => {
        try {
            const clapData = await handleClap(id);
            setTotalClaps(clapData.clap_count);
        } catch (error) {
            console.error("Error clapping post:", error);
        }
    };

    const commentPost = async () => {
        const commentBody = document.getElementById("comment-box").value;
        if (!commentBody) {
            toast.error("Please fill out the field");
            return;
        }
        try {
            const commentData = await handleComment(id, "Anonymous User", commentBody);
            document.getElementById("comment-box").value = "";
            setComment(commentData.body);
            setCommentCount(commentCount + 1);
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    }

    const copyPostLink = async () => {
        const url = `https://mdshakib007.vercel.app/posts/${id}`;
        try {
            await navigator.clipboard.writeText(url);
            toast.success("Post link copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy post link:", error);
            toast.error("Failed to copy post link.");
        }
    };

    const handleRedirect = () => {
        navigate(`/posts/${id}`);
    };

    return (
        <div className='bg-gray-700 shadow-lg shadow-black rounded-lg border border-black'>
            <div className='flex justify-between items-center p-3'>
                <div className='flex gap-4 items-center'>
                    <img src="shakib.jpeg" alt="shakib" className='h-14 w-14 rounded-full' />
                    <div>
                        <h4 className='text-lg font-bold'>MD Shakib Ahmed</h4>
                        <p className='text-sm text-gray-300 flex items-center gap-1'>
                            {created_at.slice(0, 10)} • <BiWorld />
                        </p>
                    </div>
                </div>
                <p className='flex items-center gap-1 text-gray-300 tooltip' data-tip='Total Reads'>
                    <CiRead /> {reads}
                </p>
            </div>

            <div 
            onClick={handleRedirect}
            className='cursor-pointer hover:text-yellow-500'>
                <div>
                    <img src={image} alt="Blog cover" />
                    <h1 className='text-2xl md:text-4xl font-bold p-3'>{title}</h1>
                </div>

                <div className='flex flex-wrap gap-2 m-3'>
                    {tags.map(tag => (
                        <span
                            key={tag.id}
                            className='badge bg-yellow-500 text-black rounded-full px-2 py-1'
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>

                <div className='px-3 text-gray-300 text-sm'>
                    <p>{totalClaps} Claps • {commentCount} Comments</p>
                </div>
            </div>

            <div className='flex justify-between m-3 border-y border-black py-2 text-gray-300 overflow-x-auto'>
                <button
                    className='btn btn-outline border-none flex gap-2 items-center text-lg md:text-xl'
                    onClick={clapPost}
                >
                    <PiHandsClapping /> Clap
                </button>
                <button
                    className='btn btn-outline border-none flex gap-2 items-center text-lg md:text-xl'
                    onClick={toggleCommentBox}
                >
                    <FaRegCommentAlt /> Comment
                </button>
                <button
                    className='btn btn-outline border-none flex gap-2 items-center text-lg md:text-xl'
                    onClick={copyPostLink}
                >
                    <PiShareFatLight /> Share
                </button>
            </div>

            {/* Conditionally render the comment box with a slide-down animation */}
            {showCommentBox && (
                <div className="animate-slideDown p-3 border-t border-gray-600">
                    <div className="flex items-center gap-2 mb-4">
                        <img src="shakib.png" alt="User" className="h-10 w-10 rounded-full" />
                        <div className="flex items-center bg-gray-800 rounded-full px-3 py-2 flex-1">
                            <input
                                type="text"
                                placeholder="Write a comment as anonymous..."
                                className="bg-transparent flex-1 outline-none text-gray-200 text-sm placeholder-gray-400"
                                id="comment-box"
                            />
                            <button
                                onClick={commentPost}
                                className="p-2 bg-yellow-500 cursor-pointer rounded-full text-black transition"
                            >
                                <IoSend size={18} />
                            </button>
                        </div>
                    </div>
                    {comment && (
                        <div className="space-y-4">
                            <div className="flex items-start gap-2">
                                <img src="shakib.png" alt="User" className="h-8 w-8 rounded-full" />
                                <div className='bg-gray-800 p-3 rounded-lg'>
                                    <p className="text-sm font-semibold text-yellow-500">Anonymous User</p>
                                    <p className="text-sm text-gray-300">{comment}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

BlogCard.propTypes = {
    blogPost: PropTypes.object.isRequired,
};

export default BlogCard;
