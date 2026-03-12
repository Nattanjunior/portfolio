export const NAV_LINKS = ["sobre", "experiência", "projetos", "skills", "contato"];

export const EXPERIENCES = [
  {
    role: "Desenvolvedor Full Stack Pleno",
    company: "Vagas Livre Tecnologia",
    period: "out/2025 – atual",
    items: [
      "Desenvolvimento e manutenção de APIs REST para plataforma SaaS com Node.js, ElysiaJS e Bun",
      "Integrações com sistemas externos, provedores e APIs de terceiros",
      "Decisões técnicas do backend, definição de padrões arquiteturais e refatorações contínuas",
      "Implementação de regras de negócio e controles de segurança em fluxos sensíveis",
      "Interfaces front-end com React e Next.js integradas ao backend",
    ],
  },
  {
    role: "Desenvolvedor Full Stack Junior",
    company: "Digienge",
    period: "jan/2025 – abr/2025",
    items: [
      "Backend para sistema CRM com Node.js, NestJS e PostgreSQL",
      "Integrações com APIs externas, validações e regras de negócio",
      "Otimização de queries reduzindo tempo de resposta em ~20%",
      "Liderança na construção de MVP com definição de arquitetura e principais funcionalidades",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Notifications Service",
    description:
      "Microsserviço de notificações em tempo real com WebSocket, REST API e CI/CD automatizado rodando em produção na AWS EC2.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Socket.IO", "Docker", "AWS EC2", "GitHub Actions"],
    highlights: [
      "Deploy em produção na AWS EC2 com containerização Docker",
      "Notificações em tempo real via WebSocket.IO",
      "CI/CD automatizado com GitHub Actions + self-hosted runner",
      "100% de cobertura de testes nos casos de uso principais",
      "Documentação interativa com Swagger/OpenAPI",
    ],
    github: "https://github.com/Nattanjunior/notifications-service",
    live: "http://3.145.34.134:8080/docs",
    stars: 2,
  },
  {
    name: "Auth API",
    description:
      "Sistema completo de autenticação com JWT, OAuth 2.0 (Google & GitHub) e controle de acesso granular baseado em roles (RBAC) com CASL.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT", "OAuth 2.0", "CASL", "Passport.js"],
    highlights: [
      "Autenticação híbrida: local + OAuth Google/GitHub",
      "RBAC com 4 níveis de acesso: ADMIN, EDITOR, WRITER, READER",
      "Autorização granular por recurso e ação com CASL",
      "Senhas com hash bcrypt e tokens JWT assinados",
      "Deploy em produção no Render com Swagger disponível",
    ],
    github: "https://github.com/Nattanjunior/auth_api",
    live: "https://auth-api-i05f.onrender.com/docs",
    stars: 0,
  },
];

export const SKILLS: Record<string, string[]> = {
  "Back-end": ["Node.js", "TypeScript", "NestJS", "ElysiaJS", "Fastify", "Express.js"],
  "APIs & Integrações": ["REST APIs", "Webhooks", "Sistemas Externos"],
  "Banco de Dados": ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
  "Arquitetura": ["Microservices", "RabbitMQ", "Processamento Assíncrono"],
  "Infraestrutura": ["Docker", "AWS", "CI/CD"],
  "Front-end": ["React", "Next.js", "Tailwind CSS"],
  "Testes": ["Jest", "Git"],
};

export const CONTACT_LINKS = [
  { label: "fnatanieljunior@gmail.com", href: "mailto:fnatanieljunior@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nattanjunior" },
  { label: "GitHub", href: "https://github.com/nattanjunior" },
  { label: "(82) 99650-6043", href: "https://wa.me/5582996506043" },
];
