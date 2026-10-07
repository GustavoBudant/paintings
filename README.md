# Paintings 🎨

Portfólio de arte desenvolvido com **React** (Next.js) e **Tailwind CSS**, baseado em um layout do Figma.

## 🚀 Como rodar

Pré-requisitos: [Node.js](https://nodejs.org) 20.9 ou superior.

```bash
# instalar dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
npm run build      # gera o build de produção
npm run start      # roda o build de produção
npm run typecheck  # verifica os tipos (TypeScript)
npm run lint       # roda o ESLint
```

## 🧱 Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx      # layout raiz e metadados
│   ├── page.tsx        # página inicial (monta as seções)
│   └── globals.css     # tema e estilos globais
├── components/
│   ├── Header.tsx      # cabeçalho + navegação
│   ├── Hero.tsx        # banner principal
│   ├── Features.tsx    # destaques
│   ├── Portfolio.tsx   # seções do portfólio
│   ├── Blog.tsx        # blog
│   └── Footer.tsx      # rodapé
└── lib/
    └── site.ts         # todo o conteúdo/textos do site

public/img/             # imagens exportadas do Figma
```

> O conteúdo (textos, imagens, links) fica centralizado em `src/lib/site.ts`.
