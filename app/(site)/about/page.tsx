import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

export default async function About() {
  const profile = [
    {
      _id: 1,
      fullBio: [
      {
        style: 'normal',
        _key: '9844a5f597a2',
        markDefs: [],
        children: [
          {
            text: 'I am driven by success and failures. The work i put in doing something is what gets me going everytime. Lazy days are my regrets as I contemplate it as a waste of limited time that we have.',
            _key: '7d870bf953b30',
            _type: 'span',
            marks: []
          }
        ],
        _type: 'block'
      },
      {
        markDefs: [],
        children: [ { _type: 'span', marks: [], text: '', _key: 'ab4a228eba2c0' } ],
        _type: 'block',
        style: 'normal',
        _key: 'dbcc998e0cdc'
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: "I believe that networking and connection with people helps us become more real and confident towards ourselves. Therefore whenever I get the opportunity to meet someone new, I never hesitate to interact with them.",
            _key: 'b3d23526845d0',
            _type: 'span'
          }
        ],
        _type: 'block',
        style: 'normal',
        _key: '3bf59b45cb7d'
      },
      {
        style: 'normal',
        _key: '9ecbf1aa195e',
        markDefs: [],
        children: [ { _type: 'span', marks: [], text: '', _key: 'ea0d5b2c9ca70' } ],
        _type: 'block'
      },
      {
        style: 'normal',
        _key: '91dd4f765a4f',
        markDefs: [],
        children: [
          {
            _key: 'cc33c57842750',
            _type: 'span',
            marks: [],
            text: "Besides programming, you can find me indulging in various physical pursuits that helps me and others. I believe that well-rounded lie outside the digital space is also necessary. I'd also like to point out that i love high altitude treks. Staring into the nearby mountain makes my eyes wet everytime."
          }
        ],
        _type: 'block'
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '\n' +
              "If you ever spot me in the wild, don't hesitate to say hello! Let's grab a cup of coffee and geek out over any topics. I'm not that much of a talker but with a nice company, I'm more. :) ",
            _key: '2b3554dffe9c0'
          }
        ],
        _type: 'block',
        style: 'normal',
        _key: 'fc9f4090a67a'
      }
    ],
    fullName: "Shiraj Pradhanang",
    email: "shirajpradhanang@gmail.com",
    location: "Pokhara, Nepal",
    socialLinks: {
      "gitlab" : "https://gitlab.com/ceeraazz",
      "linkedin" : "https://www.linkedin.com/in/shiraj-pradhanang-9731131b9/"
    },
    profileImage: {
      image: "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/284648531_10160475894004560_1339037228369483940_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=KoyQEj7pk8gAX9c2oHl&_nc_oc=AQnQ62XfykPsBbYE1V47LYniU4PwS0Q2go538APscWwtL8R_GqTmrnu6HukQmY2_W3Y&_nc_ht=scontent.fktm10-1.fna&oh=00_AfA8ge7cAxwrt3odq2FU3LSLqkZXkVmfL8Vt9SA8VAPusw&oe=65282F85",
      alt: "" 
    },
    resumeURL: "",
    skills: ['Python', 'Django', 'Fastapi', 'Php', 'Laravel', 'MySql', 'Bootstrap', 'TailwindCss', 'Javascript', 'Jquery', 'Nextjs']
  }];

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
                  I&apos;m {data.fullName}. I live in {data.location}, where I
                  design the future.
                </h1>

                <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
                  <PortableText value={data.fullBio} />
                </div>
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                    src="/user.jpg"
                    width={400}
                    height={400}
                    quality={100}
                    alt={data.profileImage.alt}
                  />

                  {/*<a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                    className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
                  >
                    <BiFile className="text-base" /> Download Resumé
                  </a>*/}
                </div>

                <ul>
                  <li>
                    <a
                      href={`mailto:${data.email}`}
                      className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                    >
                      <BiEnvelope className="text-lg" />
                      {data.email}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="font-semibold text-4xl mb-4">Expertise</h2>
              <p className="text-zinc-400 max-w-lg">
                I&apos;ve spent few years working on my skills. In no particular
                order, here are a few of them.
              </p>

              <ul className="flex flex-wrap items-center gap-3 mt-8">
                {data.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
    </main>
  );
}
