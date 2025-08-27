import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";

export default async function Job() {

  const job = [
    {
      _id: 2,
      url: "#",
      logo: "https://st4.depositphotos.com/3867453/41389/v/600/depositphotos_413899548-stock-illustration-letter-logo-icon-design-template.jpg",
      name: "NITV Nepal",
      jobTitle: "Full Stack Developer",
      startDate: "01/10/2019",
      endDate: "16/07/2025",
      description: "I started my NITV journey as a laravel developer, and later worked on multiple projects and languages, specially python/django. Here I learned and worked with Nexjs, having experience with jQuery and Vuejs as well. Having been employed here for ardoun 5 years, i've come to acknowledge how a work environment can be tough and fun. And just like that, coding became more than just work for me."

    },
    {
      _id: 1,
      url: "#",
      logo: "https://st2.depositphotos.com/4263287/44917/v/450/depositphotos_449175198-stock-illustration-creative-blue-gradient-alphabet-letter.jpg",
      name: "MandalaTech",
      jobTitle: "Web Developer",
      startDate: "01/02/2018",
      endDate: "15/05/2019",
      description: "This place is where my professional work journey actually began. Mandala team were a great bunch. Energetic and fun. Like minded people who seeked growth in everyday chores. It was a great pleasure working with them and getting to learn so much when i was just starting."

    }];

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
      </div>

      <div className="flex flex-col gap-y-12">
        {job.map((data) => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
          >
            <a
              href={data.url}
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md relative"
            >
              <Image
                src={data.logo}
                className="object-cover"
                alt={`${data.name} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.jobTitle}</p>
              <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {data.startDate.toString()} - {data.endDate.toString()}
              </small>
              <p className="text-base text-zinc-400 my-4">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
