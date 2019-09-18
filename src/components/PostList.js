import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  state={
    posts: [
      {
        id: 1,
        author: {
          name: 'Rocketseat',
          avatar: 'https://yt3.ggpht.com/a/AGF-l7_gRI0RdRC_VNg535o0C21ltP0eTFhi4rjRmw=s900-c-k-c0xffffffff-no-rj-mo',
        },
        date: '17 Set 2019',
        content: 'Faaala dev! Beleza? Nesse vídeo veremos como está ficando a parte mobile do app do RS/XP e faremos um code review das primeiras telas. Nós também conversaremos bastante sobre animações no react native e sobre algumas diferenças entre o funcionamento do app no android e no ios. Além disso tudo, nós discutiremos alguns pontos muito importantes sobre como resolver o desafio dos diferentes tamanhos de telas no desenvolvimento de apps mobile. Partiu para o código!',
        comments: [],
      },
      {
        id: 2,
        author: {
          name: 'Ítala Xavier',
          avatar: 'https://i.ibb.co/h7gcsZr/itala.jpg',
        },
        date: '10 Jun 2019',
        content: 'MEDICINA UESB 2019.2!!!!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Manoel Prado',
              avatar: 'https://i.ibb.co/94DTqs6/manoel.jpg',
            },
            content: 'Parabéns!!!!! Minha Feicidade por ti nesse momento nem cabe no peito, transborda! MedGata!',
          },
          {
            id: 2,
            author: {
              name: 'Lara Thairine',
              avatar: 'https://i.ibb.co/wwJWKX8/lara.jpg',
            },
            content: 'Parabéns amiga!!! A MedGata mais top!! Te amo!!',
          },
          {
            id: 3,
            author: {
              name: 'Rayane Tamires',
              avatar: 'https://i.ibb.co/gD4ptyp/rayane.jpg',
            },
            content: 'Sabia!!! Te amo amiga, vc merece! Pode preparar um plano de graça pra mim qnd montar seu consultório!',
          },
        ]
      },
      {
        id: 3,
        author: {
          name: 'Lucas José',
          avatar: 'https://i.ibb.co/vq4x1H7/lucas.jpg',
        },
        date: '28 Jan 2019',
        content: 'Só não apaguei o facebook ainda por causa dos posts do Paulo Vitor CS',
        comments: [
          {
            id: 4,
            author: {
              name: 'Paulo Vitor CS',
              avatar: 'https://i.ibb.co/hDYk05N/paulo.jpg',
            },
            content: 'É nois, bro <3',
          },
          {
            id: 5,
            author: {
              name: 'Paulo Vitor CS',
              avatar: 'https://i.ibb.co/hDYk05N/paulo.jpg',
            },
            content: 'Pode sempre contar comigo pra postar shitpost',
          },
          {
            id: 6,
            author: {
              name: 'Ana Elizia',
              avatar: 'https://i.ibb.co/7JXw2xy/anaelizia.jpg',
            },
            content: 'E pq vc ainda não atualizou seu status de relacionamento pra namorando cmg...kkkkkkkkk',
          },
        ],
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return(
      <div className="postlist">
      {posts.map(post =>(
        <PostItem key={post.id} {...post}/>
      ))}
      </div>
    );
  }
}

export default PostList;