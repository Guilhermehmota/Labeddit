# LabEddit

### Link surge: royal-horses.surge.sh

## Ferramentas utilizadas 🔧

- React Js — Biblioteca Javascript para construir interfaces;
- Axios - Biblioteca para fazer requisições do navegador;
- Styled-component;
- React-router-dom;
- Postman

## Objetivo do Projeto 📌:

Implementar uma rede social com cadastro, login, posts, likes e comentários. Para isso, o projeto será baseado no **[reddit.com](https://reddit.com).**


### Requisitos: 

A rede social terá 4 páginas:

- Página de Login
- Página de Cadastro
- Página de Feed (Lista de Posts)
- Página do Post

### Funcionalidades:

- Página de login: esta página possui dois campos de texto: email e senha. Ao fazer o login, o usuário é redirecionado para a página de feed. A página possui também um botão "Cadastre-se aqui", que leva o usuário para a página de cadastro.

- Página de cadastro: A página de cadastro possui 3 campos: nome de usuário, email e senha. Após cadastrar, o usuário é redirecionado para a página de feed, já estando logado.

- Página de Feed: A página de feed mostra todos os posts, além de possibilitar a criação de um novo post através de um formulário. 
Essa página só pode ser acessada por um usuário logado. Caso o usuário não esteja logado, ele é redirecionado para a página de login. O formulário possui o campo de título e de texto do post. Cada post mostrará o nome de usuário que postou, o título, o texto do post, o número de votos (positivo ou negativo) e o número de comentários. Quando o usuário clicar no botão de ver comentários, ele é redirecionado para a página do respectivo post. 

- Página do Post: A página de um post mostrao mesmo card de post da página de feed, com o usuário, texto, curtidas e número de comentários. Essa página só pode ser acessada por um usuário logado. Caso o usuário não esteja logado, deverá ser redirecionado para a página de login. Esta página também possui um formulário para criação de novos comentários. 

