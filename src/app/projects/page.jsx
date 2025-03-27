import Image from 'next/image';
import { IoChatbubbleEllipses } from 'react-icons/io5';
import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';
import logoAnimaginary from '@/images/logos/animaginary.svg';
import logoCosmos from '@/images/logos/cosmos.svg';
import logoHelioStream from '@/images/logos/helio-stream.svg';
import logoOpenShuttle from '@/images/logos/open-shuttle.svg';
import logoPlanetaria from '@/images/logos/planetaria.svg';
import logoFacebook from '@/images/logos/facebook.svg';
import logoChat from '@/images/logos/logoChat.png';
import logoEcommerce from '@/images/logos/logoEcommerce.png';
const projects = [
  {
    name: 'Multi-Vendor-Ecommerce Application (Frontend)',
    description:
      'I developed the front end for the Multi-Vendor-Ecommerce Application with using React and Tailwind CSS. The app includes both user, seller and admin interfaces where the users can buy products from sellers',
    link: {
      href: 'https://github.com/Panyala2305/Frontend-multivendor-ecommerce',
      label: 'Multi-Vendor-Ecommerce Application',
    },
    logo: logoEcommerce,
  },
  {
    name: 'Multi-Vendor-Ecommerce Application (Backend)',
    description:
      'I built the back end for the Multi-Vendor-Ecommerce Application using Node.js and Express.js, managing server-side logic and database interactions with an MongoDB database.',
    link: {
      href: 'https://github.com/Panyala2305/Backend-multivendor-ecommerce',
      label: 'Multi-Vendor-Ecommerce Application',
    },
    logo: logoEcommerce,
  },
  {
    name: 'Realtime Chat Application',
    description:
      'I developed the Real-Time Chat Application, a secure and responsive messaging platform, using ReactJS and TailwindCSS for the front-end. The app features user authentication with JWT for secure login, real-time messaging via WebSockets, and end-to-end message encryption with CryptoJS. On the back-end, I implemented a REST API using Node.js and ExpressJS, with MongoDB for efficient data storage. This application allows users to communicate securely and instantly across multiple devices.',
    link: {
      href: 'https://github.com/Panyala2305/Honor-Chat', // Replace with your GitHub link
      label: 'Realtime Chat Application',
    },
    logo: logoChat, // Replace with the logo of your project
  },
];
function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata = {
  title: 'Projects',
  description: 'Projects and Contributions',
};

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects and Contributions"
      intro="Here are some key projects I’m proud of. Many are open-source, so feel free to explore and contribute if you have ideas for improvements."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
