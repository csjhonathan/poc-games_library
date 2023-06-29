
# Instruções de instalação

###### Para utilizar esta aplicação, siga as instruções abaixo:

1. Baixe o dump do banco e faça a restauração.
2. Crie um arquivo .env como instruído no arquivo .env.example (com as credenciais correspondentes para o seu ambiente local).
3. No terminal, rode o comando ```npm install``` para instalar as dependências.

# Para subir a aplicação:
1. Rode o comando ```npm run dev``` para subir a aplicação localmente em modo de desenvolvimento.
2. Para verificar se a aplicação subiu corretamente, busque pelo endpoint ```http://localhost:5000/health```

# Para uso:
  1. Leia com atenção cada uma das rotas disponíveis. Possuímos rotas para pegar as notas disponíveis, os jogos disponíveis, as plataformas disponíveis, os players disponíveis e as bibliotecas disponíveis (além de uma rota de inserção para cada uma dessas, é claro).

  2. Para o fluxo principal da aplicação, será necessário ler com atenção os players, notas, jogos e plataformas disponíveis. A partir daí, você poderá inserir, editar e excluir suas bibliotecas.

 3. Ao pesquisar por uma biblioteca, você pode filtrar também pelo nome dos jogos (leia como o parâmetro é recebido pela rota).