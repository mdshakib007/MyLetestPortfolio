const BASE_URL = import.meta.env.VITE_BACKEND_URL;


export const handleClap = async (postId) => {
    const clapRes = await fetch(`${BASE_URL}/api/v1/blog/posts/${postId}/clap/`, {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({})
    })
    const clapData = await clapRes.json();
    return clapData;
};

export const handleComment = async (postId, name, body) => {
    const commentRes = await fetch(`${BASE_URL}/api/v1/blog/posts/${postId}/comments/add/`,{
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name: name, body: body})
    })
    const commentData = await commentRes.json();
    return commentData;
};
