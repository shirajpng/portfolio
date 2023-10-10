import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroSvg from "./icons/HeroSvg";
import Job from "./components/Job";

export default async function Home() {
  const profile = [{
    _id: 1,
    socialLinks: {
      "gitlab" : "https://gitlab.com/ceeraazz",
      "linkedin" : "https://www.linkedin.com/in/shiraj-pradhanang-9731131b9/"
    } 
  }];

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[900px] min-w-full">
                Passionate Software Engineer,<br/> Coding for simplicity
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                I&apos;m Shiraj Pradhanang, a passionate software developer specializing in Python/Django and Php/Laravel, mostly. With a knack for problem-solving, I love creating efficient and user-friendly applications, constantly seeking innovative ways to improve myself and the world at large. Currently im getting my hands dirty with Nextjs. As they say, learning is a never ending process.
              </p>
              <ul className="flex items-center gap-x-6 my-10">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
                      >
                        {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        <HeroSvg />
      </section>
      <Job />
    </main>
  );
}
