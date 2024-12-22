import { AnimatedCard } from '../shared/AnimatedCard';
import { SeeHereButton } from '../shared/SeeHereButton';

import { projects } from './data/projects';
import { SectionTitle } from '../shared/SectionTitle';

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-8 sm:gap-12 xl:gap-16">
     
      <div className="flex flex-col gap-8">
        <SectionTitle text="Projetos pessoais" animated />
        <div className="mb-4 flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <AnimatedCard
              key={index}
              className="min-w-full max-w-[600px] flex-1 lg:min-w-[400px]"
            >
              <div className="flex h-full flex-col justify-between gap-3">
                <div>
                  <h3 className="mt-1 text-2xl font-bold text-cyan-600">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-justify text-slate-100">
                    {project.description}
                  </p>
                </div>
                <SeeHereButton href={project.link} />
              </div>
            </AnimatedCard>
          ))}
        </div>
        <div>
          <p>
            * Para mais projetos acesse meu perfil no{' '}
            <a
              href="https://github.com/FabricioWashington"
              target="_blank"
              className="rounded-sm text-blue-500 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
