import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Htoo Htet Aung. I’m living in Thailand, where I shape my future as web and cloud solutions specialist.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage} 
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Htoo Htet Aung.
            I’m living in Thailand, where I shape my future as web and cloud solutions specialist.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things for as long as I can remember.
              Since my undergraduate days, I was fascinated by the computer science field, especially in web development and high performance computing.    
            </p>
            <p>
              Because I’m interested in informtion technology, I attended the University of Information Technology which is the highest ranking public computer university in Myanmar.
              In this university, I took a Knowledge Engineering major, as artificial intelligence subject keeps becoming a main trend in the latest technological advancements.
              After the four and half years of studying, I obtained a <Link href="https://www.uit.edu.mm/faculty-of-computer-science/knowledge-engineering" className='text-indigo-500 underline'>Bachelor of Computer Science in Knowledge Engineering</Link>.    
            </p>
            <p>
              Currently I’m attending the <Link href="https://en.mfu.ac.th/admission/programmes/masters-degree/school-of-information-technology/master-of-science-programme/master-of-science-programme-in-digital-transformation-technology.html" className='text-indigo-500 underline'>Master of Science Programme in Digital Transformation Technology</Link> in Mae Fah Luang University.
              The reason is I am eager to learn more about the digital transformation technology and I also like to meet international scholars, forming a network with them.
              This program focuses on several tech topics which are digital research methodology, cyber security, business and digital transformation and aritificial intelligence applications. 
            </p>
            <p>
              During my academic and working journeys, I got to know computer science related technologies and tools. 
              For web application development, I have experience in web frameworks such as React js, Next js, Vue js and Laravel.
              In cloud computing subject, I have a extensive knowledge of Amazon Web Services and Microsoft Azure.
              Moreover, I also have a decent understanding on containerization and orchestration tools like Docker and Kubernetes. 
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.facebook.com/htoohtet.aung.77" icon={FacebookIcon}>
              Follow on Facebook
            </SocialLink>
            <SocialLink href="https://www.instagram.com/ayme26699" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/HtooHtetAung666" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/htoo-htet-aung-0197bb254" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hhawork039@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hhawork039@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
