import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";

export default async function Project() {
  // const projects: ProjectType[] = await getProjects();
  const projects = [
    {
      name: 'Dance Academy',
      slug: 'laravel',
      tagline: 'Did this in laravel 5.x back in 2018. Mostly worked with modules in laravel for this project. During this time, also learned how to make laravel packages.',
      _id: 0
    },
    {
      name: 'X Real States',
      slug: 'laravel',
      tagline: 'Did this in laravel 5.x back in 2019. This was my most hectic work schedule since the deadline was just over a week. So had to complete it in a week, which i actually accomplished.',
      _id: 1
    },
    {
      name: 'Mirai Life Insurance',
      slug: 'Django',
      tagline: 'This was a crm web site and dashboard to work with customers, subscriptions and payments.',
      _id: 2
    },
    {
      name: 'Payment Gateway Portal',
      slug: 'Django',
      tagline: 'Api project that included payment gateways such as esewa, khalti, prabhupay, imepay, stripe, paytm, etc. Collaborated with international teams in this one.',
      _id: 3
    },
    {
      name: 'CRM System (Laravel/Fastapi/Nextjs)',
      slug: 'laravel-fastapi',
      tagline: 'Initally worked with laravel for its old version but later swtched to FastApi and Nextjs for new system.',
      _id: 4
    },
  ]
  const colors = ['#e46ef8', '#7beca2', '#38bdf8', '#5ce5f8', '#fdb169']

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <span
            key={project._id}
            className="flex items-center gap-x-4 bg-[#1d1d20] border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            
            <div className={"min-w-[60px] min-h-[60px] rounded-md"} style={{backgroundColor: colors[project._id] }}></div>
            <div>
              <h2 className="font-semibold mb-1">{project.name}</h2>
              <div className="text-sm text-zinc-400">{project.tagline}</div>
            </div>
          </span>
        ))}
      </section>
    </main>
  );
}
