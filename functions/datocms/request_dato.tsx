import { GetPostsResponse } from "./types";


export async function request_dato(query: string): Promise<GetPostsResponse | null> {
    const url = 'https://graphql.datocms.com/';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_DATO_API_TOKEN
        },
        body: JSON.stringify({ query })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return null; // Retorna null em caso de erro
    }
  }
  
export const get_all_posts = `{
    allPosts {
      id
      titulo
      _createdAt
      textHtml
      descricao
      autor {
        nome
      }
      capa {
        url
      }
    }
  }`;

export const get_post_by_id = (id: string) =>`{
  post(filter: {id: {in: "${id}"}}) {
    _createdAt
    capa {
      url
    }
    autor {
      nome
    }
    descricao
    textHtml
    titulo
  }
}`;