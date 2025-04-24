import React from 'react';

const PostListSkeleton = () => {
    return (
        <div className='flex flex-col gap-3'>
            {
                [...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-700 rounded-box shadow-md animate-pulse p-4 flex flex-col gap-4">
                        {/* Header Skeleton */}
                        <div className="flex items-center gap-4">
                            <div className="skeleton h-14 w-14 rounded-full"></div>
                            <div className="flex flex-col gap-2 flex-1">
                                <div className="skeleton h-4 w-32"></div>
                                <div className="skeleton h-3 w-24"></div>
                            </div>
                        </div>

                        {/* Image/Content Skeleton */}
                        <div className="skeleton h-48 w-full rounded-lg"></div>

                        {/* Tags Skeleton */}
                        <div className="flex flex-wrap gap-2">
                            <div className="skeleton h-6 w-16 rounded-full"></div>
                            <div className="skeleton h-6 w-16 rounded-full"></div>
                            <div className="skeleton h-6 w-16 rounded-full"></div>
                        </div>

                        {/* Stats Skeleton */}
                        <div className="skeleton h-4 w-24"></div>

                        {/* Action Buttons Skeleton */}
                        <div className="flex justify-between gap-2">
                            <div className="skeleton h-8 flex-1 rounded-lg"></div>
                            <div className="skeleton h-8 flex-1 rounded-lg"></div>
                            <div className="skeleton h-8 flex-1 rounded-lg"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PostListSkeleton;
