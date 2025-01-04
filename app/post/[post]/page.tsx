'use client';

import { get_post_by_id, request_dato } from '@/functions/datocms/request_dato';
import type { GetPostsResponse, Post } from '@/functions/datocms/types';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';


function Post(){
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();
  const postId = pathname.split('/').pop();
  console.log(postId);
  
  useEffect(() => {
      const fetchPosts = async () => {
        try {
          if (!postId){
            setError('Failed to fetch posts.');
            return;
          }
          const data: GetPostsResponse | null = await request_dato(get_post_by_id(postId));
          if (!data) {
            setError('Failed to fetch posts.');
            return;
          }
          setPost(data.data.post);
        } catch (error) {
          setError('Failed to fetch posts.');
          console.error('Fetch error:', error);
        }
      };
      fetchPosts();
    }, [postId]); 
  
    if (error || !post) {
      return <div>{error}</div>;
    }

  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
      <Image src={post?.capa.url} alt={post?.titulo} width={1080} height={1080} className="w-full h-full object-cover" />
      <h1 className=''>{post?.titulo}</h1>
      <h2>{post?.descricao}</h2>
      <div dangerouslySetInnerHTML={{ __html: post?.textHtml }} />
      <p className='pt-10'>{post?.autor.nome}</p>
    </div>
  );

} 

export default Post;
