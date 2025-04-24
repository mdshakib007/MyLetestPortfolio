import React from 'react';

const PostDetailsSkeleton = () => {
    return (
        <section className='container mx-auto px-2 max-w-4xl animate-pulse'>
            <div className='bg-gray-700 shadow-md shadow-gray-900'>

                {/* Header - Author Info */}
                <div className='flex justify-between items-center p-3'>
                    <div className='flex gap-4 items-center'>
                        <div className='h-14 w-14 bg-gray-600 rounded-full'></div>
                        <div>
                            <div className='h-4 bg-gray-600 rounded w-32 mb-2'></div>
                            <div className='h-3 bg-gray-600 rounded w-48'></div>
                        </div>
                    </div>
                    <div className='h-3 w-16 bg-gray-600 rounded'></div>
                </div>

                {/* Title and Image */}
                <div className='p-3'>
                    <div className='h-8 bg-gray-600 rounded w-3/4 mb-4'></div>
                    <div className='h-64 bg-gray-600 rounded w-full mb-6'></div>

                    {/* Body content */}
                    <div className='space-y-4'>
                        <div className='h-4 bg-gray-600 rounded w-full'></div>
                        <div className='h-4 bg-gray-600 rounded w-5/6'></div>
                        <div className='h-4 bg-gray-600 rounded w-3/4'></div>
                        <div className='h-4 bg-gray-600 rounded w-2/3'></div>
                        <div className='h-4 bg-gray-600 rounded w-1/2'></div>
                    </div>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2 mx-3 my-5'>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className='h-5 bg-yellow-600 rounded-full px-4 w-20'></div>
                    ))}
                </div>

                {/* Clap and Comment count */}
                <div className='px-3 text-gray-300 text-sm'>
                    <div className='h-3 bg-gray-600 rounded w-40'></div>
                </div>

                {/* Action Buttons */}
                <div className='flex justify-between items-center m-3 border-y border-black py-2 text-gray-300'>
                    <div className='flex-1 h-10 bg-gray-600 rounded mx-1'></div>
                    <div className='flex-1 h-10 bg-gray-600 rounded mx-1'></div>
                </div>

                {/* Comment Box */}
                <div className='p-3 border-t border-gray-600'>
                    <div className='flex items-center gap-2 mb-4'>
                        <div className='h-8 w-8 bg-gray-600 rounded-full'></div>
                        <div className='h-10 bg-gray-600 rounded-full w-full'></div>
                    </div>
                </div>

                {/* Comments */}
                <div className='space-y-4 p-3'>
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className='p-3 bg-gray-800 rounded-xl'>
                            <div className='flex gap-3 items-start'>
                                <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
                                <div className='w-full'>
                                    <div className='h-3 bg-gray-600 rounded w-1/4 mb-2'></div>
                                    <div className='h-4 bg-gray-600 rounded w-3/4 mb-1'></div>
                                    <div className='h-4 bg-gray-600 rounded w-2/3'></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PostDetailsSkeleton;