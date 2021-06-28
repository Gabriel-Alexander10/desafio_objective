<h1 align="center">
   <img src="./public/assets/logo.png" alt="Objective" width="200px" />
</h1>
<p align="center">
    <img src="https://img.shields.io/github/issues/Gabriel-Alexander10/desafio_objective" alt="issues" />
    <img src="https://img.shields.io/github/forks/Gabriel-Alexander10/desafio_objective" alt="forks" />
    <img src="https://img.shields.io/github/stars/Gabriel-Alexander10/desafio_objective" alt="stars" />
    <img src="https://img.shields.io/github/license/Gabriel-Alexander10/desafio_objective" alt="license" />
</p>

<p align="center">
 <a href="#about">About</a> • 
 <a href="#features">Features</a> •
 <a href="#techs">Techs</a> • 
 <a href="#author">Author</a>
</p>

## About

🚀 Desafio Frontend fornecido pela empresa Objective

## Features

- [x] Listagem dos heróis da marvel
- [x] Responsividade
- [x] Listagem dos detalhes do herói
- [x] Cache local da paginação
- [x] debounce na pesquisa de heróis
- [x] SSG (Static site generation) na build

## How it works
Baixe a aplicação e instale as dependencias:
> ```bash
> npm install
> # or
> yarn
> ```

Crie um arquivo .env.local e copie o conteudo do arquivo .env.example. Após isso coloque a sua chave publica e privada da API da marvel
```env
NEXT_PUBLIC_MARVEL_API_KEY=chave_publica
PRIVATE_MARVEL_API_KEY=chave_privada
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Após isso, inicie a aplicação:
> ```bash
> npm run dev
> # or
> yarn dev
> ```
> Abra [http://localhost:3000](http://localhost:3000) no seu navegador e veja o resultado.

## Techs

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/pt-BR/)
- [Testing-library](https://testing-library.com/docs/react-testing-library/cheatsheet/)
- [Styled-components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [React-query](https://react-query.tanstack.com/)
- [React-virtualized](https://bvaughn.github.io/react-virtualized/)

## Author

<a href="https://www.linkedin.com/in/gabriel-alexander-abb90a1b6/" >
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/D5635AQGYHyqB9uRwYw/profile-framedphoto-shrink_200_200/0/1624146647861?e=1624924800&v=beta&t=6RDFLa0uGehhUojj7gW7UDGilJnafgojmapSvu3XR7E" width="100px;" alt="Gabriel Alexander"/>
 <br />
 <sub><b>Gabriel Alexander</b></sub></a>    
 <br />
<a href="https://www.linkedin.com/in/gabriel-alexander-abb90a1b6/">
   <img src="https://img.shields.io/badge/Gabriel%20Alexander-blue?style=flat&logo=linkedin&link=https://www.linkedin.com/in/gabriel-alexander-abb90a1b6/" alt="LinkedIn badge"/> 
</a>
