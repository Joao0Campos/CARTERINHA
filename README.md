# Carteirinha de estudante (prévia)

Esta página mostra uma **prévia** de uma carteirinha de estudante. Ela serve só para visualizar o layout e **não tem nenhuma validade oficial**.

## Ver no computador

Dê dois cliques no arquivo `index.html`. Ele abre no seu navegador, sem instalar nada.

## Simulação no portal do aluno

O arquivo `portal.html` mostra onde a carteirinha ficaria dentro do portal do aluno: um aviso na tela inicial e uma página própria no menu "Secretaria". É só uma simulação de proposta, não o site oficial. Abra em `https://<usuario>.github.io/<repositorio>/portal.html`.

## Publicar no GitHub Pages (pelo site do GitHub)

1. Entre em https://github.com e faça login.
2. Clique em **New** (novo repositório), dê um nome (por exemplo `carteirinha`) e marque **Public**. Crie o repositório.
3. Na página do repositório, clique em **Add file > Upload files**, arraste todos os arquivos desta pasta (inclusive o `.nojekyll` e o `favicon.svg`) e clique em **Commit changes**.
4. Vá em **Settings > Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch **main** e a pasta **/ (root)**, e clique em **Save**.
6. Espere um ou dois minutos. O link final será:

   `https://<usuario>.github.io/<repositorio>/`

   (troque `<usuario>` pelo seu usuário do GitHub e `<repositorio>` pelo nome do repositório).

## Alternativa: pela linha de comando

Crie antes o repositório vazio no GitHub e, dentro desta pasta, rode:

```
git init
git add .
git commit -m "Primeira versão"
git branch -M main
git remote add origin https://github.com/<usuario>/<repositorio>.git
git push -u origin main
```

Depois siga os passos 4 e 5 acima (Settings > Pages).

## Personalizar pelo link

Dá para mudar a carteirinha sem editar nada, colocando parâmetros no final do link:

```
https://<usuario>.github.io/<repositorio>/?uni=Minha%20Universidade&cor=%231f4fd8&nome=Maria%20Silva
```

- `uni`: nome da universidade
- `cor`: cor principal. O `#` precisa ser escrito como `%23` (por isso `%231f4fd8` para `#1f4fd8`)
- `nome`: nome do estudante

Espaços podem ser escritos como `%20`. Assim cada colega pode mandar o próprio link já personalizado.

## Privacidade da foto

Se você escolher uma foto, ela é lida e mostrada **apenas no seu navegador**. Ela nunca é enviada para nenhum servidor nem fica salva no GitHub.
