'use client';

import { useState, useEffect } from 'react';
import { CardBig } from "@/components/all/cards";
import { request_dato, get_all_posts } from "@/functions/datocms/request_dato";
import { GetPostsResponse, Post } from '@/functions/datocms/types';



export default function Home() {
  // Inicialização do estado posts com o tipo Post[]
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data: GetPostsResponse | null = await request_dato(get_all_posts);
        if (!data) {
          setError('Failed to fetch posts.');
          return;
        }
        setPosts(data.data.allPosts);
      } catch (error) {
        setError('Failed to fetch posts.');
        console.error('Fetch error:', error);
      }
    };
    fetchPosts();
  }, []); 

  if (error) {
    return <div>{error}</div>;
  }
  console.log(posts);

  return (
    <>
      {posts.map((post) => (
        <CardBig
          id={post.id}
          key={post.id}
         imageSrc={post.capa.url}
         headline={post.titulo}
         description={post.descricao}
         autor={post.autor.nome}
         date={post._createdAt}
        />
      ))}
    </>
  );
}
