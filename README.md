# clone-tabnews
Projeto usado como aprendizado do Curso.Dev

1  -  Crie o projeto com `npm init`
1.1 - Dê `ENTER` até o final mudando apenas a licença para `MIT`
2 - Instale o Next usando `npm install next@13.1.6`
3 - Instale o React usando `npm install react@18.2.0`
4 - INstale o React-Dom usando `npm install react-dom@18.2.0`
5 - Vá no manifesto do projeto e no campo `scripts`insira o comando `"dev": "next dev"`
6 - Crie uma pasta chamada `pages` e crie um arquivo `index.js`
6.1 - Crie a estrutura básica de componente nesse arquivo retornando o componente `Home`.
6.2 - Rode o projeto usando `npm run dev`
6.3 - Caso dê algum erro de `import and export ...` exclua a linha `"type: commonjs"`do manifesto. 
6.4 - A porta ficará privada, mas se vc for n aba "Portas" do terminal poderá mudar a visibilidade de privada para pública.