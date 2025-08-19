import { Card, CardContent } from '@/components/ui/card';

interface SkillCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: 'Criação de Sites',
    description: 'Transformo suas ideias em um site profissional e atrativo, focado em transmitir sua mensagem de forma clara e eficaz.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
  {
    title: 'Criação de Landing Pages',
    description: 'Crio páginas de destino impactantes e otimizadas para converter visitantes em clientes, utilizando técnicas comprovadas de design e persuasão.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 7H7V17H9V7Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 7H15V13H17V7Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
  {
    title: 'Otimização de SEO',
    description: 'Maximizo a visibilidade do seu site nos mecanismos de busca, implementando estratégias avançadas de SEO para aumentar o tráfego orgânico e melhorar seu ranking.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 8V14" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 11H14" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
  {
    title: 'Conexão/Consumo de REST APIs',
    description: 'Integro e consumo APIs de forma eficiente para proporcionar funcionalidades avançadas ao seu site ou aplicativo, garantindo uma experiência de usuário dinâmica e interativa.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H15" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H15" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15H12" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
];

function SkillCategory({ category }: { category: SkillCategoryProps }) {
  return (
    <Card className="bg-card backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/5 font-poppins" data-aos="fade-up">
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
    <section id="about" className="py-20 relative overflow-hidden font-poppins">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4 font-poppins">O que eu faço?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desenvolvo soluções tecnológicas que agregam valor real aos projetos e clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}