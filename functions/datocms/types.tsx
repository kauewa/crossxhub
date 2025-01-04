export type Post = {
    id: string;
    titulo: string;
    textHtml: string;
    descricao: string;
    _createdAt: string;
    capa: {
      url: string;
    };
    autor: Autor;
  };

export type Autor = {
  id: string;
  nome: string;
  foto: {
    url: string;
  }
  descricao: string;
}
  
export type GetPostsResponse = {
    data: {
      allPosts: Post[];
      post: Post;
    };
  };



  

