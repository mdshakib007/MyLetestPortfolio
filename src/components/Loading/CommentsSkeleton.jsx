import React from 'react';

const CommentsSkeleton = () => {
    return (
        <section className='container mx-auto px-2 max-w-4xl animate-pulse'>
            <div className='bg-gray-700'>
                {/* Comments */}
                <div className='space-y-4 p-3'>
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className='p-3 bg-gray-800 rounded-xl'>
                            <div className='flex gap-3 items-start'>
                                <div className='h-10 w-10 bg-gray-600 rounded-full'></div>
                                <div className='w-full'>
                                    <div className='h-3 bg-gray-600 rounded w-1/4 mb-2'></div>
                                    <div className='h-4 bg-gray-600 rounded w-3/4 mb-1'></div>
                                    <div className='h-4 bg-gray-600 rounded w-2/4 mb-1'></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommentsSkeleton;