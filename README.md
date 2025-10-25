# Segundo Desafio

## Descrição

Este projeto foi desenvolvido com Next.js e TypeScript como parte de um desafio técnico. A aplicação permite buscar usuários do GitHub, favoritar perfis, visualizar favoritos e manter os dados entre sessões utilizando `localStorage`.

## Funcionalidades Implementadas

- Buscar usuários do GitHub
- Favoritar e desfavoritar perfis
- Exibição de modal de confirmação ao desfavoritar
- Exibição de mensagens de feedback via toast ao remover favoritos
- Persistência entre sessões com `localStorage`
- Interface responsiva para dispositivos móveis
- Deploy em produção via Vercel

## Arquitetura

- `Card`: componente que exibe dados do usuário
- `Context`: gerencia favoritos globalmente
- `FavoritosProviderClient`: sincroniza com `localStorage`
- `ModalDesfavorite`: confirma remoção de favorito
- `ToastProvider`: exibe mensagens de feedback

## Como Começar

1. Clonar o Repositório

git clone <URL_DO_REPOSITORIO>  
cd segundo_desafio

2. Instalar Dependências

npm install

3. Executar o Projeto

npm run dev

O projeto estará disponível em http://localhost:3000

## Deploy

Acesse a versão em produção: https://segundo-desafio-sandy.vercel.app/

## Observações

O projeto foi testado localmente e em produção. O `localStorage` é utilizado para garantir persistência entre sessões.

## Estratégia de Contexto Global

Para representar os dados exibidos nos cards, foi criado o seguinte modelo:

> ```ts
> type userGitHub = {
>   nome: string;
>   userName: string;
>   cargo: string;
>   favorite: boolean;
>   image: string;
> };
> ```

Com base nesse modelo, implementei um contexto global utilizando `useState`, que armazena um array de objetos do tipo `userGitHub`. O contexto também disponibiliza funções para adicionar e remover usuários dos favoritos. A função de inserção verifica se o registro já existe no array antes de adicioná-lo, evitando duplicações.

Além disso, foi criado o arquivo `contextClient.tsx`, responsável por sincronizar os dados entre o `localStorage` e o contexto global, garantindo persistência entre sessões e atualização automática do estado.
