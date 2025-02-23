import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private listPost: Post[] = [
    { 
      id: 1, 
      author: 'Gabriel Rosa', 
      title: 'Integrando Angular e Java com Azure AI', 
      display_content: "Combine Angular, Java e Azure para soluções inteligentes.",
      content: 'Angular, Java e Azure formam uma poderosa combinação para criar aplicações inteligentes. Com o Angular no front-end, você pode construir interfaces interativas enquanto usa Java no back-end para processar dados. A integração com Azure AI permite adicionar recursos como reconhecimento de imagem e análise preditiva, elevando a experiência do usuário a um novo nível de inteligência.'
    },
    { 
      id: 2, 
      author: 'Gabriel Rosa', 
      title: 'Aplicações Inteligentes com Angular, Java e IA', 
      display_content: 'Use Angular, Java e Azure para IA e inovação.',
      content: 'Ao usar Angular para criar interfaces dinâmicas, Java para processar lógica e Azure AI para análises avançadas, você pode desenvolver aplicativos completos e inovadores. Azure Machine Learning e Cognitive Services trazem as ferramentas necessárias para treinar modelos e realizar tarefas como previsão de dados e personalização de conteúdo, tudo sem comprometer a performance.' 
    },
    { 
      id: 3, 
      author: 'Gabriel Rosa', 
      title: 'Criando Soluções de IA com Angular, Java e Azure',
      display_content: 'Angular, Java e Azure IA para aplicações inteligentes.',
      content: 'A integração de Angular no front-end e Java no back-end, juntamente com Azure AI, permite que você construa soluções de IA robustas. Azure oferece serviços como análise de sentimentos, tradução e reconhecimento de voz, que podem ser facilmente integrados às suas aplicações Angular/Java, criando uma experiência altamente interativa e inteligente para os usuários.' 
    },
  ];

  getPosts(): Post[] {
    return this.listPost;
  }

  getPostById(id: number): Post | undefined {
    return this.listPost.find(post => post.id === id);
  }
}