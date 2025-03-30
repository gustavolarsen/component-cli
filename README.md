# Component CLI

Uma ferramenta CLI simples para gerar arquivos de componentes React de forma rápida e eficiente.

## Descrição

Component CLI é uma ferramenta de interface de linha de comando que ajuda você a criar componentes React com uma estrutura padronizada. Ela gera automaticamente tanto o arquivo JSX do componente quanto seu arquivo CSS Module correspondente dentro do diretório `src/components` do seu projeto.

## Instalação

1. Clone este repositório
2. Navegue até o diretório do projeto
3. Execute o seguinte comando para criar um link global:

```bash
npm link
```

## Uso

Após a instalação, você pode usar a CLI em qualquer lugar em seus projetos React executando:

```bash
component-cli NomeDoComponente
```

Isso irá gerar:

- `src/components/NomeDoComponente/NomeDoComponente.jsx`
- `src/components/NomeDoComponente/NomeDoComponente.module.css`

## Exemplo

```bash
component-cli Botao
```

Irá criar:

```
src/
└── components/
  └── Botao/
    ├── Botao.jsx
    └── Botao.module.css
```

## Benefícios

- Criação rápida de componentes
- Estrutura de arquivos consistente
- Ferramenta que economiza tempo
- Mantém a organização do projeto

## Contribuições

Sinta-se a vontade para contribuir para melhorias da ferramenta.

---

Criado com ❤️ por Gustavo Larsen
