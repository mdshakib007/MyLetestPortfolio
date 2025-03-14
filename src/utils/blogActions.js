export const handleClap = async (postId) => {
    const clapRes = await fetch(`http://127.0.0.1:8000/api/v1/blog/posts/${postId}/clap/`, {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({})
    })
    const clapData = await clapRes.json();
    return clapData;
};

export const handleComment = async (postId, name, body) => {
    const commentRes = await fetch(`http://127.0.0.1:8000/api/v1/blog/posts/${postId}/comments/add/`,{
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({name: name, body: body})
    })
    const commentData = await commentRes.json();
    return commentData;
};
