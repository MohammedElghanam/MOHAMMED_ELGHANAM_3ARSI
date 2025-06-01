import React from 'react'
import usePost from '../hooks/usePost'

export default function CardPosts() {

    const { posts } = usePost();
    return (
        <>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
                <div key={post.id} className="border rounded overflow-hidden">
                <img src={`http://127.0.0.1:8000/storage/${post.image}`} alt="Post" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <p className="text-sm text-gray-600 mb-2">{post.description}</p>
                    <p className="text-xs text-gray-400">Publié le {post.date}</p>
                </div>
                </div>
            ))}
            </div>
        </>
    )
}
