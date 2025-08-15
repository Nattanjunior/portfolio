// import Image from 'next/image';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { ExternalLink, Github } from 'lucide-react';

// export interface ProjectProps {
//   title: string;
//   description: string;
//   imageSrc: string;
//   tags: string[];
//   liveUrl?: string;
//   githubUrl?: string;
// }

// export function ProjectCard({
//   title,
//   description,
//   imageSrc,
//   tags,
//   liveUrl,
//   githubUrl,
// }: ProjectProps) {
//   return (
//     <Card className="overflow-hidden transition-all hover:shadow-lg bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl">
//       <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
//         <Image
//           src={imageSrc}
//           alt={title}
//           fill
//           className="object-cover transition-transform hover:scale-105"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//       </div>
//       <CardHeader>
//         <CardTitle className="text-xl font-bold">{title}</CardTitle>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {tags.map((tag) => (
//             <span
//               key={tag}
//               className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </CardHeader>
//       <CardContent>
//         <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
//       </CardContent>
//       <CardFooter className="flex gap-2">
//         {githubUrl && (
//           <Button variant="outline" size="sm" asChild className="border-primary/20 hover:bg-primary/10 hover:text-primary">
//             <a href={githubUrl} target="_blank" rel="noopener noreferrer">
//               <Github className="mr-2 h-4 w-4" />
//               Code
//             </a>
//           </Button>
//         )}
//         {liveUrl && (
//           <Button size="sm" asChild className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground">
//             <a href={liveUrl} target="_blank" rel="noopener noreferrer">
//               <ExternalLink className="mr-2 h-4 w-4" />
//               LEARN MORE
//             </a>
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }