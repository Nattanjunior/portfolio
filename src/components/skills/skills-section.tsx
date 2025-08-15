import { Card, CardContent } from '@/components/ui/card';

interface SkillCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: 'Desenvolvimento Web',
    description: 'Desenvolvendo aplicações web modernas, performáticas e escaláveis utilizando tecnologias como Node.js, NestJS, PostgreSQL e Next.js.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L2 12L8 18" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
];

function SkillCategory({ category }: { category: SkillCategoryProps }) {
  return (
    <Card className="bg-card backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/5">
      <CardContent className="p-6">
        {category.icon}
        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
        <p className="text-muted-foreground">{category.description}</p>
      </CardContent>
    </Card>
  );
}

export function SkillsSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">O que eu faço</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desenvolvo soluções tecnológicas que agregam valor real aos projetos e clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}