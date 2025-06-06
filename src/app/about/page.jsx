import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait1.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata = {
  title: 'About',
  description: 'I’m Akash Reddy Panyala, I live in Hyderabad City.',
};

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
            I’m Akash Reddy Panyala, I live in Hyderabad City.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a Full Stack Developer with a strong background in building
              scalable and dynamic web applications. My expertise lies in
              working with modern web technologies, including React.js, Next.js,
              Node.js, Express.js, and MongoDB, to develop high-performance
              solutions.
            </p>
            <p>
              At Dropac, I played a key role in developing a custom CMS,
              integrating role-based authentication, and connecting the
              company’s main website with Contentful CMS for seamless content
              management. Additionally, I enhanced user authentication workflows
              and implemented a live chat support feature for Goat Network,
              optimizing real-time interactions.
            </p>
            <p>
              Previously, at Dropac, I contributed to frontend development,
              improving user experience by designing intuitive UI components
              with React.js and Tailwind CSS. My optimizations led to a 5%
              reduction in bounce rate and a 10% improvement in page load
              speeds, ensuring a smooth and efficient user experience.
            </p>
            <p>
              My portfolio includes a Multi-Vendor Ecommerce Platform with
              role-based access control, Stripe payment integration, and
              optimized state management using Redux Toolkit. I also developed a
              Real-Time Chat Application featuring WebSocket-based
              communication, end-to-end encryption, and scalable backend
              architecture with Node.js and MongoDB.
            </p>

            <p>
              My educational background With a B.Tech in Computer Science from
              Chandigarh University, I am deeply passionate about
              problem-solving, innovation, and building user-centric
              applications. I am always eager to leverage my skills in
              full-stack development to create impactful digital solutions.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="{https://github.com/Panyala2305"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/panyala-akash-reddy-636295197/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:akashreddy2305@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              akashreddy2305@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
