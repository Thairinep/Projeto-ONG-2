Plataforma Web - ONG Amigo Fiel
O objetivo é construir uma plataforma web profissional para a "ONG Amigo Fiel", uma organização focada em cuidados e adoção de animais.

O foco foi a aplicação de CSS3 avançado para criar layouts responsivos com Grid e Flexbox, desenvolver componentes de UI interativos (cards, modais, formulários) e garantir uma arquitetura de CSS modular e organizada.

🔗 Visualizar: [Acesse o projeto online aqui](https://thairinep.github.io/Projeto-ONG-2/)

Páginas Implementadas
O projeto é composto por 3 páginas principais, todas utilizando o novo sistema de design customizado:

1. Página Inicial (index.html): Apresenta a ONG, sua missão e informações de contato.

2. Projetos (projetos.html): Detalha os projetos, o voluntariado e inclui componentes interativos como cards e modais.

3. Cadastro (cadastro.html): Um formulário complexo com estilização e validação visual customizadas.

🚀 Tecnologias Utilizadas
HTML5: Utilizado para a estrutura semântica de todo o conteúdo.

CSS3 (Puro): O núcleo desta entrega, substituindo o Bootstrap. Utilizado para:

Sistema de Design: Com variáveis CSS (:root) para uma paleta de 8 cores, 5+ tamanhos de fonte hierárquicos e um sistema de espaçamento modular.

CSS Grid Layout: Para a estrutura principal das páginas e a implementação de um grid de 12 colunas customizado.

Flexbox: Para alinhamento de componentes internos (navbar, cards, formulários).

Responsividade: Com 5 breakpoints customizados (@media queries) para total adaptação a dispositivos móveis, tablets e desktops.

JavaScript (Vanilla): Utilizado para toda a interatividade da página, sem dependências de frameworks.

Controle do menu hambúrguer (mobile).

Exibição e fechamento do Modal de Doação.

Script de validação visual dos formulários.

Máscaras de input (CPF, Telefone, CEP).

📂 Estrutura de Pastas
A estrutura foi atualizada para organizar os assets de CSS e JavaScript de forma modular:

/projeto-ong/
|
|-- /css/
|   |-- style.css       (Arquivo principal com o Design System e componentes)
|
|-- /js/
|   |-- main.js         (Arquivo com todo o JavaScript)
|
|-- /img/
|   |-- (Todas as imagens do projeto)
|
|-- index.html          (Página Inicial)
|-- projetos.html       (Página de Projetos)
|-- cadastro.html       (Formulário de Cadastro)
|
|-- README.md           (Este arquivo)
Como Executar
Sendo um projeto puramente front-end (HTML/CSS/JS), não é necessária nenhuma instalação.

Clone este repositório:

Bash

git clone https://github.com/Thairinep/Projeto-ONG.git
Navegue até a pasta do projeto:

Bash

cd Projeto-ONG
Abra qualquer um dos arquivos .html (começando pelo index.html) diretamente no seu navegador.