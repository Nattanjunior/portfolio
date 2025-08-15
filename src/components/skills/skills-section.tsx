import { Card, CardContent } from '@/components/ui/card';

interface SkillCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const skillCategories: SkillCategoryProps[] = [
  {
    title: 'UI/UX Design',
    description: 'Creating user-centered designs that are intuitive, efficient, and delightful.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H9.01" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9H15.01" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications with modern technologies.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L22 12L16 6" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L2 12L8 18" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
  {
    title: 'Mobile App Design',
    description: 'Designing beautiful and functional mobile applications for iOS and Android.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 18H12.01" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
  {
    title: 'Graphic Design',
    description: 'Creating visual content to communicate messages through typography, color, and imagery.',
    icon: (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19L19 12L22 15L15 22L12 19Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 2L9.586 9.586" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          <h2 className="text-3xl font-bold mb-4">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I design products that are more than pretty. I make them shippable and usable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}