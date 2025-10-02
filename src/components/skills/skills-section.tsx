// import { Card, CardContent } from '@/components/ui/card';
// import { Code, Layout, Search, Server, Database, Layers } from 'lucide-react';

// interface SkillCategoryProps {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// const skillCategories: SkillCategoryProps[] = [
//   {
//     title: 'Desenvolvimento Frontend',
//     description: 'Criação de interfaces modernas e responsivas utilizando React, Next.js e outras tecnologias avançadas.',
//     icon: (
//       <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
//         <Layout className="text-blue-500" size={24} />
//       </div>
//     ),
//   },
//   {
//     title: 'Desenvolvimento Backend',
//     description: 'Construção de APIs robustas e escaláveis com Node.js, Express, NestJS e integração com diversos bancos de dados.',
//     icon: (
//       <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
//         <Server className="text-blue-500" size={24} />
//       </div>
//     ),
//   },
//   {
//     title: 'Banco de Dados',
//     description: 'Modelagem e otimização de bancos de dados relacionais e NoSQL, com foco em performance e segurança.',
//     icon: (
//       <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
//         <Database className="text-blue-500" size={24} />
//       </div>
//     ),
//   },
//   {
//     title: 'Conexão/Consumo de REST APIs',
//     description: 'Integro e consumo APIs de forma eficiente para proporcionar funcionalidades avançadas ao seu site ou aplicativo, garantindo uma experiência de usuário dinâmica e interativa.',
//     icon: (
//       <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           <path d="M9 9H15" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           <path d="M9 12H15" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           <path d="M9 15H12" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </div>
//     ),
//   },
// ];

// function SkillCategory({ category }: { category: SkillCategoryProps }) {
//   return (
//     <Card className="bg-card backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 font-poppins" data-aos="fade-up">
//       <CardContent className="p-6">
//         {category.icon}
//         <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
//         <p className="text-muted-foreground">{category.description}</p>
//       </CardContent>
//     </Card>
//   );
// }

// export function SkillsSection() {
//   return (
//     <section id="about" className="py-20 relative overflow-hidden font-poppins">
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="mb-16 text-center">
//           <h2 className="text-3xl font-semibold mb-4 font-poppins">O que eu faço?</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Desenvolvo soluções tecnológicas que agregam valor real aos projetos e clientes.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
//           {skillCategories.map((category, index) => (
//             <SkillCategory key={index} category={category} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }