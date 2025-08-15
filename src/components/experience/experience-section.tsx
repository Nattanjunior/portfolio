import { Card, CardContent } from '@/components/ui/card';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStepProps[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'I conduct research to understand your business goals, target audience, and market landscape.',
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Define',
    description: 'I define the project scope, requirements, and create a strategic plan to achieve your objectives.',
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 17L12 22L22 17" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
  {
    number: '03',
    title: 'Design',
    description: 'I create wireframes, mockups, and prototypes to visualize the user interface and experience.',
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.6001 9H20.4001" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.6001 15H20.4001" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.5 3C9.81 7.59 9 12.79 9 18" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.5 3C14.19 7.59 15 12.79 15 18" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
  {
    number: '04',
    title: 'Develop',
    description: 'I transform designs into functional products using the latest technologies and best practices.',
    icon: (
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9L11 12L8 15" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 9L13 12L16 15" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="#7B4AE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
  },
];

function ProcessCard({ step }: { step: ProcessStepProps }) {
  return (
    <Card className="bg-card backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-md hover:shadow-primary/5">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            {step.icon}
          </div>
          <div className="mb-2">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{step.number}</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">How I Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My design process is structured to deliver exceptional results that meet your business objectives and user needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard key={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}