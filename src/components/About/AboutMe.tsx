import { SectionTitle } from '../shared/SectionTitle';

export function AboutMe() {
  return (
    <div className="mt-6 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:justify-between">
      <SectionTitle text="Sobre mim" className="lg:flex" />
      <p className="max-full text-pretty text-justify leading-6 text-slate-100 lg:w-3/5 lg:text-xl">
        Minha trajetória profissional começou como <b>Técnico em Informática no Exército Brasileiro</b>,
        onde adquiri experiência em manutenção e montagem de computadores, instalação e configuração de softwares,
        gerenciamento de redes e segurança de dados. Posteriormente, atuei como <b>Analista e Desenvolvedor de Sistemas na Ótica Optivisus</b>,
        desenvolvendo e mantendo sistemas com <b>Java Swing</b> e <b>Java</b>, além de gerenciar sites com <b>HTML5</b>, <b>CSS3</b> e <b>JavaScript</b>. Atualmente,
        como <b>Desenvolvedor Web Trainee na UITEC</b>, sou responsável por criar soluções inovadoras para sites, utilizando tecnologias
        como <b>Angular</b>, <b>PHP</b> e banco de dados <b>PostgreSQL</b>. Meu foco está em personalização avançada,
        design responsivo e desenvolvimento de sistemas modulares, garantindo a adição e configuração de componentes reutilizáveis.
        Também colaboro em projetos que utilizam metodologias ágeis, buscando otimizar processos e garantir a escalabilidade dos sistemas entregues.
      </p>
    </div>
  );
}
