# Bloco de tarefas
Este é um sistema CRUD para anotações de tarefas. Foi criado utilizando as tecnologias: JavaScript, NodeJS, ReactJS e MySql. 

# Funcionalidades
* Registro responsável
* Registro de tarefas
* Data final para a tarefas

# Requisitos
* Servidor web (Apache, Nginx, etc.)
* NodeJs
* ReactJS
* MySQL ou outro sistema de gerenciamento de banco de dados compatível

# Instalação
1. Clone este repositório para o diretório do seu servidor web.
2. Importe o arquivo SQL bd-tarefas.sql para criar o banco de dados e a tabela necessária.
3. Configure as credenciais do banco de dados no arquivo database.js
4. Abra o sistema no seu navegador ("npm start" no terminal dentro das pastas api e front-end) e teste.


# Estrutura do Projeto
* Pasta API: <br>
  Pasta controllers:<br>
    -user.js, arquivo utilizado para consultas ao banco. <br><br>
  Pasta routes:<br>
     -users.js, arquivo utilizado para definir as rotas do usuário. <br><br>
  -database.js: Arquivo utilizado para fazer a conexão com o banco de dados. <br>
  -index.js: Arquivo utilizado para criar um servidor web. <br>

* Pasta front-end:<br>
  Pasta components:<br>
    -Form.js: Arquivo utilizado para criar e estilizar a entrada de dados no formulário. <br>
    -Grid.js: Arquivo utilizado para estilizar e mostrar tarefas criadas. <br><br>
  Pasta styles:<br>
    -global.js: Arquivo para definir um estilo global para o projeto.<br><br>
  -App.js: Interface principal do arquivo.<br>
  -index.js: Aquivo utilizado para montar o componente principalna árvore DOM do navegador.<br><br>
  -bd-tarefas.sql: Banco de dados do projeto.  <br>
  -package.json: Arquivo utilizado para gerenciar o projeto e suas dependências.<br>
  


# Observações
Este projeto foi desenvolvido para fins didáticos.
##

Sinta-se à vontade para abrir um issue no repositório caso tenha alguma sugestão.
