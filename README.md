# Chat WebSocket com Express

Este é um simples chat utilizando WebSocket com Express, onde os usuários podem se conectar, enviar mensagens e visualizar as mensagens enviadas por outros usuários em tempo real.

## Funcionalidades

- As mensagens enviadas por um usuário são exibidas para todos os outros usuários conectados.

## Requisitos

Para executar este projeto localmente, você precisa ter o Node.js e o npm (ou yarn) instalados no seu sistema. 

## Como Usar

1. Clone este repositório:

```
git clone https://github.com/victorcarvalhods/websocket-chat.git
```

2. Instale as dependências do projeto:

```
cd websocket-chat
npm install
```

3. Inicie o servidor:

```
npm start
```

4. Abra seu navegador e acesse `http://localhost:3000` para entrar no chat.

5. Na página de chat, você pode enviar e receber mensagens em tempo real, abra múltiplas páginas do navegador para testar.

## Estrutura do Projeto

- `public/`: Contém os arquivos HTML, CSS e JavaScript para o frontend do aplicativo.
- `app.js`: Arquivo principal do servidor Express.

## Tecnologias Utilizadas

- Node.js
- Express
- WebSocket (ws)
- HTML
- CSS
- JavaScript

