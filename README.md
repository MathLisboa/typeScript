# VR - Projeto pratico automacao

## Instalação do projeto

- Clone o repositório em sua máquina:

```
$ git clone https://github.com/MathLisboa/typeScript.git
```

- Vá até o diretório contendo o projeto:

```
$ cd typeScript
```

- E instale todas a dependências:

```sh
$ npm install
```

## Variáveis de ambiente

Um arquivo .env (Que não deve ser versionado), deve ser criado na raiz do projeto seguindo o modelo abaixo:

```
ENVIRONMENT=<valor>

```

- `ENVIRONMENT`: É a variável de ambiente que armazena em qual ambiente os testes serão executados. Os valores válildos são:
  - `urlBase`
    - Default caso nenhum valor seja informado

## Extensões e configurações do VS Code

Para ajudar no desenvolvimento, é possível instalar algumas extensões no VS code:

- ESLint
- Prettier - Code formatter

E inserir o seguinte trecho no seu arquivo `settings.json`:

```json
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "typescript"],
```

Com as extensões instaladas e o arquivo de settings atualizado, o ESLint irá informar as ofensas no código, e corrigir automaticamente quando o arquivo sendo editado for salvo!

## Executando os testes

**Para abrir o console do cypress (útil enquanto estiver desenvolvendo testes):**

```
$ npm run cy:open
```

**Para executar todos os testes do projeto de forma sequencial:**

```
$ npm run cy:run
```

**Para executar testes em paralelo:**

```
$ npm run cy:parallel
```

**Para executar cenários que tenham uma tag específica:**

```
$ npx cypress run --env grepTags=@smoke
```

# Gerando os reports

Após uma execução utilizando o `cy:run` ou o `cy:parallel` é possível gerar um relatório com os dados dos testes. Para isso, execute o seguinte comando:

```sh
$ npm run report
```

Este comando irá juntar todos os arquivos de dados gerados, criar o html e anexar as fotos dos testes que falharam.

O html do relatório será criado na pasta `cypress/reports`
