# Nattan Junior — Portfólio

Portfólio pessoal desenvolvido com **Next.js 14**, **TypeScript** e **Tailwind CSS**.

## Estrutura do Projeto

```
portfolio/
├── app/
│   ├── globals.css        # Estilos globais + Google Fonts
│   ├── layout.tsx         # Layout raiz com metadata
│   └── page.tsx           # Página principal
├── components/
│   ├── sections/          # Seções da página
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/                # Componentes reutilizáveis
│       ├── AnimatedSection.tsx
│       ├── Background.tsx
│       ├── Cursor.tsx
│       ├── ExperienceCard.tsx
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       ├── ProjectCard.tsx
│       └── Tag.tsx
├── data/
│   └── index.ts           # Todos os dados do portfólio
└── public/
```

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

Acesse: http://localhost:3000

## Deploy

Recomendado: [Vercel](https://vercel.com) — basta conectar o repositório.
