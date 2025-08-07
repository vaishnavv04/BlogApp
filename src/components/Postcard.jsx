 
 
import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredimage}) {

   


  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-lg postcard-hover">
            <div className="w-full justify-center mb-4">
                {featuredimage && (
                    <img src={appwriteService.getFilePreview(featuredimage)} alt={title} className="rounded-xl" />
                )}
            </div>
            <h2 className="text-xl font-bold text-black">{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard