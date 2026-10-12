import { useEffect, useState } from 'react'

const NAME = 'Ryan Andrei Obedientes'
const EMAIL = 'ryanandrei.obedientes@cvsu.edu.ph'
const GITHUB = 'https://github.com/dreixo-dev'
const INSTAGRAM = 'https://instagram.com/77kimchii'
const STATUS = 'Open to opportunities'

const projects = [
  {
    title: 'Full Stack E-Commerce',
    category: 'Full Stack',
    featured: true,
    slug: 'ecommerce',
    desc: 'A full-stack e-commerce application with user authentication, data storage and online payments.',
    highlights: [
      'Next.js and TypeScript frontend styled with Tailwind CSS',
      'Clerk for user authentication',
      'Node.js and Express.js backend with MongoDB for data storage',
      'Stripe for payment processing',
    ],
    groups: {
      Frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Clerk'],
      Backend: ['Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    },
    notes: { Clerk: 'Authentication', MongoDB: 'Data storage', Stripe: 'Payments' },
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Clerk', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    color: 'from-blue-500 to-violet-600',
    image: '/logo.png',
    live: '',
    repo: 'https://github.com/dreixo-dev/fullstack-e-commerce',
  },
  {
    title: 'Taskly',
    category: 'Web',
    slug: 'todo-list',
    desc: 'A to-do list app built with ReactJS and Tailwind CSS.',
    highlights: ['Built with ReactJS', 'Styled with Tailwind CSS', 'Add and manage your tasks'],
    tags: ['React', 'Tailwind CSS', 'npm', 'git'],
    color: 'from-emerald-500 to-teal-600',
    image: '/to-do.jpg',
    live: 'https://taskly-list.netlify.app/', 
    repo: 'https://github.com/dreixo-dev/taskly',
  },
  {
    title: 'Landing Page',
    category: 'Web',
    slug: 'landing-page',
    desc: 'A landing page built with ReactJS and Tailwind CSS.',
    highlights: ['Built with ReactJS', 'Styled with Tailwind CSS'],
    tags: ['React', 'Tailwind CSS'],
    color: 'from-amber-500 to-orange-600',
    image: '/landing.svg',
    live: '', 
    repo: 'https://github.com/dreixo-dev/modern-business-landing-page-react-tailwindcss',
  },
  {
    title: 'Admin Dashboard',
    category: 'Web',
    slug: 'admin-dashboard',
    desc: 'A modern and fully responsive admin dashboard built with React.js and Tailwind CSS, designed to provide a clean and intuitive interface for managing data and monitoring key information.',
    highlights: ['Built with HTML, CSS and JavaScript', 'Made from the fundamentals, no frameworks'],
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Git', 'npm'],
    color: 'from-rose-500 to-pink-600',
    image: '/admin-dashboard.svg',
    live: '', 
    repo: 'https://github.com/DevDomingoJohn/KIXO', 
  },
]

// Languages, frameworks and tools
const techGroups = {
  Languages: ['HTML', 'CSS', 'JavaScript'],
  Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  'Backend & Data': ['Node.js', 'Express.js', 'MongoDB'],
  Services: ['Clerk', 'Stripe'],
  Tools: ['Git', 'GitHub', 'npm', 'Figma'],
}
const allTechs = [...new Set(Object.values(techGroups).flat())]

const LOGOS = {
  "HTML": { vb: "0 0 24 24", c: "#E34F26", d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zm7.031 9.75-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157z" },
  "CSS": { vb: "0 0 384 512", c: "#1572B8", d: "m0 32 34.9 395.8L192 480l157.1-52.2L384 32zm313.1 80-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112z" },
  "JavaScript": { vb: "0 0 24 24", c: "#F7DF1E", d: "M0 0h24v24H0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179z" },
  "TypeScript": { vb: "0 0 24 24", c: "#3178C6", d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75q.918 0 1.627.111a6.4 6.4 0 0 1 1.306.34v2.458a4 4 0 0 0-.643-.361 5 5 0 0 0-.717-.26 5.5 5.5 0 0 0-1.426-.2q-.45 0-.819.086a2.1 2.1 0 0 0-.623.242q-.254.156-.393.374a.9.9 0 0 0-.14.49q0 .294.156.529.156.234.443.444c.287.21.423.276.696.41q.41.203.926.416.705.296 1.266.628.561.333.963.753.402.418.614.957.213.538.214 1.253 0 .986-.373 1.656a3.03 3.03 0 0 1-1.012 1.085 4.4 4.4 0 0 1-1.487.596q-.85.18-1.79.18a10 10 0 0 1-1.84-.164 5.5 5.5 0 0 1-1.512-.493v-2.63a5.03 5.03 0 0 0 3.237 1.2q.5 0 .872-.09.373-.09.623-.25.249-.162.373-.38a1.02 1.02 0 0 0-.074-1.089 2.1 2.1 0 0 0-.537-.5 5.6 5.6 0 0 0-.807-.444 28 28 0 0 0-1.007-.436q-1.377-.575-2.053-1.405t-.676-2.005q0-.92.369-1.582.368-.662 1.004-1.089a4.5 4.5 0 0 1 1.47-.629 7.5 7.5 0 0 1 1.77-.201m-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" },
  "React": { vb: "0 0 24 24", c: "#61DAFB", d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538 15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005 27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565" },
  "Next.js": { vb: "0 0 24 24", c: null, d: "M18.665 21.978A11.94 11.94 0 0 1 12 24C5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251zm-3.332-8.533 1.6 2.061V7.2h-1.6z" },
  "Tailwind CSS": { vb: "0 0 24 24", c: "#06B6D4", d: "M12.001 4.8q-4.8 0-6 4.8 1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12q4.8 0 6-4.8-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8m-6 7.2q-4.8 0-6 4.8 1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576q4.8 0 6-4.8-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12" },
  "Node.js": { vb: "0 0 24 24", c: "#5FA04E", d: "M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.28.28 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242l-8.791-5.072a.28.28 0 0 0-.271 0L3.075 6.68a.28.28 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.86 1.86 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.236a1.93 1.93 0 0 1 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247m7.101-10.007c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607a.254.254 0 0 0 .247.199h1.141a.26.26 0 0 0 .186-.081.26.26 0 0 0 .067-.196c-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742a.255.255 0 0 0-.253-.215h-1.137a.25.25 0 0 0-.254.253c0 1.482.806 3.248 4.655 3.248 2.788.001 4.386-1.096 4.386-3.013" },
  "Express.js": { vb: "0 0 24 24", c: null, d: "M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957 6.27 6.27 0 0 1-7.306-.933 6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" },
  "MongoDB": { vb: "0 0 24 24", c: "#47A248", d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A74 74 0 0 1 11.91 24h.481a29 29 0 0 1 .51-3.07c.417-.296.604-.463.85-.693a11.34 11.34 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218m-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405" },
  "Git": { vb: "0 0 24 24", c: "#F05032", d: "M23.546 10.93 13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.6 0 1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6 1.844 1.844 0 0 1-2.609 0 1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" },
  "GitHub": { vb: "0 0 24 24", c: null, d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
  "npm": { vb: "0 0 24 24", c: "#CB3837", d: "M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" },
  "Figma": { vb: "0 0 24 24", c: "#F24E1E", d: "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491M12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539m-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49m-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019z" },
  "Clerk": { vb: "0 0 24 24", c: "#6C47FF", d: "m21.47 20.829-2.881-2.881a.57.57 0 0 0-.7-.084 6.85 6.85 0 0 1-7.081 0 .576.576 0 0 0-.7.084l-2.881 2.881a.576.576 0 0 0-.103.69.6.6 0 0 0 .166.186 12 12 0 0 0 14.113 0 .58.58 0 0 0 .239-.423.58.58 0 0 0-.172-.453m.002-17.668-2.88 2.88a.57.57 0 0 1-.701.084A6.857 6.857 0 0 0 8.724 8.08a6.86 6.86 0 0 0-1.222 3.692 6.86 6.86 0 0 0 .978 3.764.57.57 0 0 1-.083.699l-2.881 2.88a.567.567 0 0 1-.864-.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637-.405.57.57 0 0 1 .232.418.57.57 0 0 1-.168.448m-7.118 12.261a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854" },
  "Stripe": { vb: "0 0 24 24", c: "#635BFF", d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305z" },
}

const interests = ['Web Development', 'UI Design', 'Mobile Coding', 'Open Source']

const education = [
  { period: 'Present', title: 'BS Information Technology', place: 'Cavite State University – Tanza', note: 'Currently taking DCIT 26: Application Development and Emerging Technologies.' },
]
const experience = [
  { period: '2026', title: 'Student Developer', place: 'School & personal projects', note: 'Building projects while gaining hands-on experience with modern web technologies.' },
]

const nav = [
  ['home', 'Home', 'home'],
  ['about', 'About', 'user'],
  ['work', 'Projects', 'folder'],
  ['resume', 'Resume', 'file'],
  ['contact', 'Contact', 'mail'],
]

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

.theme{
  --bg:#f8fafc; --card:#ffffff; --ink:#0f172a; --mute:#64748b; --line:rgba(15,23,42,.1);
  --accent:#2563eb; --accent2:#7c3aed; --accent-soft:rgba(37,99,235,.1); --on-acc:#ffffff;
  --glass:rgba(248,250,252,.78); --green:#16a34a;
  background:var(--bg); color:var(--ink); font-family:'Inter',system-ui,sans-serif;
  transition:background .3s,color .3s;
}
.theme[data-theme=dark]{
  --bg:#0a0e1a; --card:#111827; --ink:#f1f5f9; --mute:#94a3b8; --line:rgba(148,163,184,.16);
  --accent:#60a5fa; --accent2:#a78bfa; --accent-soft:rgba(96,165,250,.14); --on-acc:#0a0e1a;
  --glass:rgba(10,14,26,.75); --green:#4ade80;
}
.mono{font-family:'JetBrains Mono',ui-monospace,monospace}
.t-mute{color:var(--mute)} .t-acc{color:var(--accent)}
.b-line{border-color:var(--line)} .c-bg{background:var(--bg)}
.bg-acc{background:var(--accent);color:var(--on-acc)} .bg-acc-soft{background:var(--accent-soft)}
.glass{background:var(--glass);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.grad{background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent}
.pcard{background:var(--card);border:1px solid var(--line);border-radius:1.1rem;transition:background .3s,border-color .3s,transform .25s,box-shadow .25s}
.lift:hover{transform:translateY(-4px);box-shadow:0 18px 40px -18px rgba(37,99,235,.35);border-color:var(--accent)}

.btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border-radius:.8rem;padding:.8rem 1.35rem;font-weight:600;font-size:.875rem;transition:.2s;cursor:pointer}
.btn:active{transform:scale(.96)}
.btn-acc{background:linear-gradient(90deg,var(--accent),var(--accent2));color:#fff} .btn-acc:hover{filter:brightness(1.1)}
.btn-ghost{border:1px solid var(--line);background:var(--card)} .btn-ghost:hover{border-color:var(--accent);color:var(--accent)}
.chip{display:inline-flex;align-items:center;gap:.45rem;border:1px solid var(--line);background:var(--card);border-radius:9999px;padding:.38rem .85rem;font-size:.75rem;font-weight:500}
.pill{border-radius:.7rem;padding:.5rem 1rem;font-size:.8rem;font-weight:600;border:1px solid var(--line);background:var(--card);transition:.2s;cursor:pointer}
.pill:hover{border-color:var(--accent)} .pill.on{background:var(--accent);color:var(--on-acc);border-color:transparent}
.input{width:100%;border:1px solid var(--line);border-radius:.75rem;background:var(--bg);padding:.8rem 1rem;font-size:.9rem;outline:none;color:var(--ink);transition:.2s}
.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)} .input.err{border-color:#ef4444}
.input::placeholder{color:var(--mute);opacity:.6}
.hover-acc{transition:color .2s} .hover-acc:hover{color:var(--accent)}

.topnav a,.topnav button.lnk{position:relative;padding:.5rem .15rem;font-size:.875rem;font-weight:500;color:var(--mute);transition:color .2s;cursor:pointer}
.topnav .lnk:hover{color:var(--ink)} .topnav .lnk.on{color:var(--ink)}
.topnav .lnk::after{content:'';position:absolute;left:0;right:0;bottom:-2px;height:2px;border-radius:2px;background:linear-gradient(90deg,var(--accent),var(--accent2));transform:scaleX(0);transition:transform .25s}
.topnav .lnk.on::after{transform:scaleX(1)}

.tab{position:relative;display:grid;place-items:center;height:3.75rem;color:var(--mute);transition:color .2s}
.tab.on{color:var(--accent)}
.tab .bar{position:absolute;top:0;left:50%;width:2rem;margin-left:-1rem;height:3px;border-radius:0 0 4px 4px;background:var(--accent);transform:scaleX(0);transition:transform .25s}
.tab.on .bar{transform:scaleX(1)}

.grid-bg{background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:radial-gradient(ellipse at 50% 0%,#000 25%,transparent 72%);mask-image:radial-gradient(ellipse at 50% 0%,#000 25%,transparent 72%)}
.glow{background:radial-gradient(closest-side,var(--accent-soft),transparent)}
.tile{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.45rem;text-align:center;border:1px solid var(--line);background:var(--bg);border-radius:.9rem;padding:.85rem .4rem;transition:.2s}
.tile:hover{border-color:var(--accent);transform:translateY(-2px)}
.k{color:var(--accent2)} .s{color:var(--green)} .n{color:var(--accent)}
.ping{animation:ping 1.8s cubic-bezier(0,0,.2,1) infinite}
.float{animation:float 6s ease-in-out infinite}
.reveal{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease}
.reveal.in{opacity:1;transform:none}
.pop{animation:pop .25s ease both}
.rise{animation:rise .45s ease both}

@keyframes ping{75%,100%{transform:scale(2.2);opacity:0}}
@keyframes float{50%{transform:translateY(-8px)}}
@keyframes pop{from{opacity:0;transform:translateY(24px) scale(.97)}to{opacity:1;transform:none}}
@keyframes rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){ *{animation:none!important;transition:none!important} .reveal{opacity:1;transform:none} }
`

function Icon({ name, size = 18 }) {
  const p = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
  }
  const paths = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6" /></>,
    folder: <path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
    file: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h4" /><path d="M10 13h5M10 17h5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    github: <path d="M15 22v-4c0-1.2-.4-2-1-2.5 4-.5 6-2.5 6-6 0-1.3-.5-2.5-1.3-3.5.1-.3.5-1.7-.1-3.5 0 0-1-.3-3.6 1.3a12.5 12.5 0 0 0-6 0C6.4 4.2 5.4 4.5 5.4 4.5c-.6 1.8-.2 3.2-.1 3.5A5.4 5.4 0 0 0 4 9.5c0 3.5 2 5.5 6 6-.6.5-1 1.3-1 2.5v4" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    moon: <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    download: <><path d="M12 3v12M7 11l5 5 5-5" /><path d="M4 21h16" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    pin: <><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></>,
    cap: <><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" /></>,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
    external: <><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
  }
  return <svg {...p}>{paths[name]}</svg>
}

function Avatar() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Ryan avatar" style={{ display: 'block' }}>
      <rect width="120" height="120" fill="#7c9cff" />
      <circle cx="96" cy="26" r="26" fill="#9db4ff" />
      <path d="M12 126c2-28 22-40 48-40s46 12 48 40z" fill="#1e293b" />
      <rect x="51" y="68" width="18" height="18" rx="8" fill="#e8b48f" />
      <circle cx="60" cy="52" r="23" fill="#f3cca8" />
      <path d="M37 52C33 30 47 23 60 23c14 0 27 8 23 29-3-8-8-12-14-14-9 4-21 5-32 14Z" fill="#2a211c" />
      <circle cx="51" cy="55" r="2.2" fill="#2a211c" />
      <circle cx="69" cy="55" r="2.2" fill="#2a211c" />
      <path d="M52 63c4 4.5 12 4.5 16 0" stroke="#2a211c" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="46" cy="61" r="3.2" fill="#ff8a7a" opacity=".35" />
      <circle cx="74" cy="61" r="3.2" fill="#ff8a7a" opacity=".35" />
      <path d="M33 58C30 18 90 18 87 58" stroke="#0f172a" strokeWidth="4" fill="none" strokeLinecap="round" />
      <rect x="27" y="50" width="10" height="19" rx="5" fill="#3b82f6" />
      <rect x="83" y="50" width="10" height="19" rx="5" fill="#3b82f6" />
    </svg>
  )
}

function TechIcon({ name, size = 28 }) {
  const l = LOGOS[name]
  if (!l) {
    return (
      <span className="grid place-items-center rounded-md bg-slate-500 font-bold text-white" aria-hidden="true"
            style={{ width: size, height: size, fontSize: size * 0.58, lineHeight: 1 }}>{name[0]}</span>
    )
  }
  return (
    <svg width={size} height={size} viewBox={l.vb} fill={l.c || 'var(--ink)'} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d={l.d} />
    </svg>
  )
}

function TechTile({ name, note }) {
  return (
    <div className="tile" title={name}>
      <TechIcon name={name} size={30} />
      <span className="text-[11px] font-semibold leading-tight">{name}</span>
      {note && <span className="t-mute text-[10px] leading-tight">{note}</span>}
    </div>
  )
}

function TechChip({ name }) {
  return <span className="chip !py-1"><TechIcon name={name} size={14} />{name}</span>
}

function useInView() {
  const [el, setEl] = useState(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (!el) return
    if (!('IntersectionObserver' in window)) { setSeen(true); return }
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); o.disconnect() } }, { threshold: 0.05 })
    o.observe(el)
    return () => o.disconnect()
  }, [el])
  return [setEl, seen]
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, seen] = useInView()
  return (
    <div ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function Count({ to }) {
  const [ref, seen] = useInView()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!seen) return
    let i = 0
    const t = setInterval(() => {
      i++
      setN(Math.round((to * i) / 20))
      if (i >= 20) clearInterval(t)
    }, 40)
    return () => clearInterval(t)
  }, [seen, to])
  return <span ref={ref}>{n}</span>
}

function Section({ id, label, title, sub, children }) {
  return (
    <section id={id} className="scroll-mt-16 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mono t-acc text-xs font-medium">{label}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
          {sub && <p className="t-mute mt-3 max-w-xl leading-7">{sub}</p>}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

/* ============================================================
   SECTIONS
   ============================================================ */
function Home({ go, downloadCV }) {
  const code = [
    [0, <><span className="k">const</span> <span className="n">ryan</span> = {'{'}</>],
    [1, <>role: <span className="s">"Web Developer"</span>,</>],
    [1, <>school: <span className="s">"CvSU Tanza"</span>,</>],
    [1, <>stack: [<span className="s">"React"</span>, <span className="s">"Next.js"</span>, <span className="s">"Node"</span>],</>],
    [1, <>learning: <span className="k">true</span>,</>],
    [1, <>openToWork: <span className="k">true</span>,</>],
    [0, <>{'};'}</>],
  ]

  return (
    <section id="home" className="relative overflow-hidden scroll-mt-16 px-5 pb-16 pt-10 sm:px-8 md:pt-20 lg:px-10 lg:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="glow pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rise">
            <span className="chip">
              <span className="relative flex h-2 w-2">
                <span className="ping absolute inline-flex h-full w-full rounded-full" style={{ background: 'var(--green)' }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--green)' }} />
              </span>
              {STATUS}
            </span>

            <p className="mono t-mute mt-7 text-sm">👋 Welcome to my portfolio. Hello, I'm</p>
            <h1 className="mt-2 text-[clamp(2.6rem,7.2vw,5rem)] font-extrabold leading-[1.02] tracking-tight">
              Ryan Andrei
              <br />
              <span className="grad">Obedientes</span>
            </h1>
            <p className="mt-4 text-xl font-semibold sm:text-2xl">Aspiring Full-Stack Web Developer</p>
            <p className="t-mute mt-4 max-w-xl leading-8">
              I'm an Information Technology student at Cavite State University – Tanza. I design and build clean,
              responsive websites with ReactJS and Tailwind CSS, and I'm always learning the next thing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => go('work')} className="btn btn-acc">View projects <Icon name="arrow" size={16} /></button>
              <button onClick={downloadCV} className="btn btn-ghost"><Icon name="download" size={16} /> Download CV</button>
            </div>

            <div className="t-mute mt-7 flex items-center gap-4">
              <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover-acc"><Icon name="github" size={21} /></a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover-acc"><Icon name="instagram" size={21} /></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover-acc"><Icon name="mail" size={21} /></a>
            </div>
          </div>

          {/* code window + avatar */}
          <div className="float relative mx-auto w-full max-w-md pt-8">
            <div className="absolute -left-3 top-0 z-10 h-20 w-20 overflow-hidden rounded-2xl border-4 shadow-xl sm:-left-6" style={{ borderColor: 'var(--card)' }}>
              <Avatar />
            </div>
            <div className="pcard overflow-hidden shadow-2xl shadow-blue-500/10">
              <div className="c-bg flex items-center gap-1.5 border-b b-line px-4 py-3">
                <i className="h-2.5 w-2.5 rounded-full bg-red-400" /><i className="h-2.5 w-2.5 rounded-full bg-amber-400" /><i className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="mono t-mute ml-3 text-[11px]">ryan.js</span>
              </div>
              <div className="mono px-5 py-6 text-[13px] leading-7">
                {code.map(([indent, node], i) => (
                  <div key={i} className="flex">
                    <span className="t-mute w-6 shrink-0 select-none opacity-50">{i + 1}</span>
                    <span style={{ paddingLeft: `${indent * 1.25}rem` }}>{node}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="pcard absolute -bottom-4 right-2 flex items-center gap-2 px-3 py-2 text-xs font-semibold shadow-lg sm:-right-4">
              <span className="t-acc"><Icon name="pin" size={14} /></span> General Trias City, Cavite
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const rows = [
    ['pin', 'Location', 'General Trias, Cavite, Philippines'],
    ['cap', 'School', 'Cavite State University – Tanza'],
    ['bolt', 'Focus', 'Web Development, Software Development'],
    ['user', 'Status', STATUS],
  ]
  return (
    <Section id="about" label="// 01 — about" title="Building things, one project at a time." sub="A bit about who I am and what I work with.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <p className="text-lg leading-8">
            I'm a student developer who enjoys building websites, interfaces and small app ideas. I'm not trying to
            know everything yet. I focus on getting better by <span className="grad font-bold">actually making things</span>.
          </p>
          <p className="t-mute mt-4 leading-8">
            It taught me to be resourceful and patient. Outside the code, I like exploring design ideas and finding ways
            technology can make everyday tasks simpler.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {interests.map((i) => <span key={i} className="chip">{i}</span>)}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="pcard divide-y p-2" style={{ '--tw-divide-opacity': 1 }}>
            {rows.map(([icon, k, v], i) => (
              <div key={k} className="flex items-center gap-4 px-4 py-4" style={i ? { borderTop: '1px solid var(--line)' } : undefined}>
                <span className="bg-acc-soft t-acc grid h-10 w-10 shrink-0 place-items-center rounded-xl"><Icon name={icon} size={18} /></span>
                <div className="min-w-0">
                  <p className="mono t-mute text-[10px] uppercase tracking-widest">{k}</p>
                  <p className="truncate text-sm font-semibold">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* tech stack (icons) */}
      <Reveal className="mt-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techGroups).map(([group, items]) => (
            <div key={group} className="pcard p-5">
              <p className="mono t-acc text-xs font-medium">{group}</p>
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {items.map((s) => <TechTile key={s} name={s} />)}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

function Projects() {
  const cats = ['All', ...new Set(projects.map((p) => p.category))]
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)
  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  return (
    <Section id="work" label="// 02 — projects" title="Selected work." sub="Filter by category and open a project to see the details.">
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {cats.map((c) => <button key={c} onClick={() => setFilter(c)} className={`pill ${filter === c ? 'on' : ''}`}>{c}</button>)}
        <span className="mono t-mute ml-auto text-xs">{list.length}/{projects.length}</span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.title} delay={i * 70} className={p.featured && filter === 'All' ? 'lg:col-span-2' : ''}>
            <button onClick={() => setOpen(p)} className="pcard lift group flex h-full w-full flex-col overflow-hidden text-left">
              <div className="relative">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
                ) : (
                  <div className={`h-44 w-full bg-gradient-to-br ${p.color} p-4`}>
                    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-black/25 backdrop-blur-sm">
                      <div className="flex items-center gap-1 px-3 py-2">
                        <i className="h-1.5 w-1.5 rounded-full bg-white/70" /><i className="h-1.5 w-1.5 rounded-full bg-white/70" /><i className="h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span className="mono ml-2 truncate text-[10px] text-white/80">{p.slug}.vercel.app</span>
                      </div>
                      <div className="mx-3 mt-1 space-y-2">
                        <div className="h-2.5 w-2/3 rounded bg-white/50" />
                        <div className="h-2 w-full rounded bg-white/25" />
                        <div className="h-2 w-5/6 rounded bg-white/25" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="mono t-acc text-[11px] font-medium">{p.category}</span>
                  {p.live && (
                    <span className="mono flex items-center gap-1.5 text-[10px] font-medium" style={{ color: 'var(--green)' }}>
                      <i className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--green)' }} /> Live
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="t-mute mt-2 text-sm leading-6">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <TechChip key={t} name={t} />)}
                </div>
                <span className="t-acc mt-auto flex items-center gap-1 pt-5 text-sm font-semibold">
                  View details <span className="transition group-hover:translate-x-1"><Icon name="arrow" size={15} /></span>
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setOpen(null)}>
          <div onClick={(e) => e.stopPropagation()} className="pop pcard relative max-h-[90vh] w-full max-w-2xl overflow-y-auto !rounded-b-none p-6 sm:!rounded-b-[1.1rem] sm:p-8">
            <button onClick={() => setOpen(null)} aria-label="Close" className="btn-ghost absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border">
              <Icon name="close" size={15} />
            </button>
            <p className="mono t-acc text-[11px] font-medium">{open.category}</p>
            <h3 className="mt-1 pr-10 text-2xl font-extrabold tracking-tight">{open.title}</h3>
            <p className="t-mute mt-3 text-sm leading-7">{open.desc}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {open.live ? (
                <a href={open.live} target="_blank" rel="noreferrer" className="btn btn-acc !py-2.5">
                  Live demo <Icon name="external" size={15} />
                </a>
              ) : (
                <span className="chip t-mute">Live demo coming soon</span>
              )}
              {open.repo && (
                <a href={open.repo} target="_blank" rel="noreferrer" className="btn btn-ghost !py-2.5">
                  <Icon name="github" size={16} /> Source code
                </a>
              )}
            </div>
            <p className="mono t-mute mt-6 text-[11px] uppercase tracking-widest">Highlights</p>
            <ul className="mt-3 space-y-2">
              {open.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm"><span className="t-acc mt-0.5 shrink-0"><Icon name="check" size={16} /></span>{h}</li>
              ))}
            </ul>
            <p className="mono t-mute mt-6 text-[11px] uppercase tracking-widest">Tech used</p>
            {open.groups ? (
              <div className="mt-3 space-y-4">
                {Object.entries(open.groups).map(([g, items]) => (
                  <div key={g}>
                    <p className="mono t-acc text-xs font-medium">{g}</p>
                    <div className="mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {items.map((tt) => <TechTile key={tt} name={tt} note={open.notes?.[tt]} />)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
                {open.tags.map((tt) => <TechTile key={tt} name={tt} />)}
              </div>
            )}
          </div>
        </div>
      )}
    </Section>
  )
}

function Resume({ downloadCV }) {
  const [tab, setTab] = useState('Education')
  const items = tab === 'Education' ? education : experience

  return (
    <Section id="resume" label="// 03 — resume" title="Education & experience.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <div className="pcard p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="c-bg flex gap-1 rounded-xl border b-line p-1">
                {['Education', 'Experience'].map((t) => (
                  <button key={t} onClick={() => setTab(t)} className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${tab === t ? 'bg-acc' : 't-mute'}`}>{t}</button>
                ))}
              </div>
              <button onClick={downloadCV} className="btn btn-ghost !py-2.5"><Icon name="download" size={15} /> CV</button>
            </div>

            <div key={tab} className="rise b-line ml-2 mt-8 space-y-8 border-l-2 pl-7">
              {items.map((it) => (
                <div key={it.title} className="relative">
                  <span className="bg-acc absolute -left-[37px] top-1.5 h-3 w-3 rounded-full" style={{ boxShadow: '0 0 0 4px var(--card)' }} />
                  <p className="mono t-acc text-xs font-medium">{it.period}</p>
                  <h4 className="mt-1 text-lg font-bold">{it.title}</h4>
                  <p className="t-mute text-sm">{it.place}</p>
                  <p className="t-mute mt-2 text-sm leading-6">{it.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="pcard p-6 sm:p-8">
            <p className="mono t-acc text-xs font-medium">Skills & tools</p>
            <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-4">
              {allTechs.map((s) => <TechTile key={s} name={s} />)}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!v.name.trim()) e.name = 'Please enter your name.'
    if (!v.email.trim()) e.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
    if (!v.message.trim()) e.message = 'Please write a message.'
    else if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }
  const onChange = (e) => {
    setV({ ...v, [e.target.name]: e.target.value })
    setErr({ ...err, [e.target.name]: undefined })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    setErr(found)
    if (!Object.keys(found).length) {
      setSent(true)
      setV({ name: '', email: '', message: '' })
    }
  }

  const links = [
    ['mail', EMAIL, `mailto:${EMAIL}`],
    ['github', 'github.com/dreixo-dev', GITHUB],
    ['instagram', '@77kimchii', INSTAGRAM],
  ]

  return (
    <Section id="contact" label="// 04 — contact" title="Let's work together." sub="Have a project, an opportunity or just a question? Send me a message.">
      <div className="pcard grid overflow-hidden lg:grid-cols-[.8fr_1.2fr]">
        <div className="relative overflow-hidden p-6 sm:p-10" style={{ background: 'linear-gradient(135deg,var(--accent),var(--accent2))', color: '#fff' }}>
          <div className="mx-0 h-16 w-16 overflow-hidden rounded-2xl border-4 border-white/30"><Avatar /></div>
          <h3 className="mt-5 text-2xl font-extrabold tracking-tight">{NAME}</h3>
          <p className="mt-1 text-sm text-white/80">Aspiring Full-Stack Web Developer</p>
          <div className="mt-8 space-y-3">
            {links.map(([icon, label, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                 className="group flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium transition hover:bg-white/20">
                <Icon name={icon} size={17} /> <span className="break-all">{label}</span>
              </a>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-2 text-xs text-white/80"><Icon name="pin" size={14} /> General Trias, Cavite, Philippines</p>
        </div>

        <div className="p-6 sm:p-10">
          {sent ? (
            <div className="rise py-16 text-center">
              <span className="t-acc"><Icon name="check" size={52} /></span>
              <h3 className="mt-3 text-2xl font-extrabold">Message sent!</h3>
              <p className="t-mute mt-1 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              <button onClick={() => setSent(false)} className="btn btn-ghost mt-6">Send another</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold">Name</label>
                  <input name="name" value={v.name} onChange={onChange} placeholder="Your name" className={`input ${err.name ? 'err' : ''}`} />
                  {err.name && <p className="mt-1 text-xs text-red-500">{err.name}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold">Email</label>
                  <input name="email" type="email" value={v.email} onChange={onChange} placeholder="you@email.com" className={`input ${err.email ? 'err' : ''}`} />
                  {err.email && <p className="mt-1 text-xs text-red-500">{err.email}</p>}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold">Message</label>
                <textarea name="message" rows={6} value={v.message} onChange={onChange} placeholder="Tell me about your project..." className={`input resize-none ${err.message ? 'err' : ''}`} />
                {err.message && <p className="mt-1 text-xs text-red-500">{err.message}</p>}
              </div>
              <button type="submit" className="btn btn-acc w-full sm:w-auto">Send message <Icon name="arrow" size={16} /></button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  const [active, setActive] = useState('home')
  const [dark, setDark] = useState(() => {
    try {
      const s = localStorage.getItem('theme')
      if (s) return s === 'dark'
    } catch (e) {}
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
  })

  useEffect(() => {
    document.documentElement.style.background = dark ? '#0a0e1a' : '#f8fafc'
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) {}
  }, [dark])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { rootMargin: '-35% 0px -55% 0px' }
    )
    nav.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const go = (id) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    const lines = [
      NAME.toUpperCase(),
      'Aspiring Full-Stack Web Developer | Cavite, Philippines',
      `${EMAIL} | ${GITHUB} | ${INSTAGRAM}`,
      '',
      'EDUCATION',
      ...education.map((e) => `- ${e.title}, ${e.place} (${e.period})`),
      '',
      'EXPERIENCE',
      ...experience.map((e) => `- ${e.title}, ${e.place} (${e.period}): ${e.note}`),
      '',
      'SKILLS & TOOLS: ' + allTechs.join(', '),
    ]
    const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain' }))
    const a = document.createElement('a')
    a.href = url
    a.download = 'Obedientes_CV.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const themeBtn = (
    <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode" title="Toggle theme"
            className="btn-ghost grid h-10 w-10 place-items-center rounded-xl border transition active:scale-90">
      <Icon name={dark ? 'sun' : 'moon'} size={17} />
    </button>
  )

  const logo = (
    <button onClick={() => go('home')} className="flex items-center gap-2.5" aria-label="Home">
      <span className="h-9 w-9 overflow-hidden rounded-xl border b-line"><Avatar /></span>
      <span className="mono text-sm font-bold">dreixo<span className="t-acc">-dev</span></span>
    </button>
  )

  return (
    <div className="theme min-h-screen" data-theme={dark ? 'dark' : 'light'}>
      <style>{CSS}</style>

      {/* ===== TABLET / LAPTOP / DESKTOP: top navigation bar with text links ===== */}
      <header className="glass topnav fixed inset-x-0 top-0 z-50 hidden h-16 border-b b-line md:block">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 lg:px-10">
          {logo}
          <nav className="flex items-center gap-6 lg:gap-8">
            {nav.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className={`lnk ${active === id ? 'on' : ''}`}>{label}</button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {themeBtn}
            <button onClick={() => go('contact')} className="btn btn-acc hidden !py-2.5 lg:inline-flex">Hire me</button>
          </div>
        </div>
      </header>

      {/* ===== PHONE: slim top bar ===== */}
      <header className="glass fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b b-line px-4 md:hidden">
        {logo}
        {themeBtn}
      </header>

      {/* ===== PHONE: bottom icon menu ===== */}
      <nav className="glass fixed inset-x-0 bottom-0 z-50 border-t b-line md:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="grid grid-cols-5">
          {nav.map(([id, label, icon]) => (
            <button key={id} onClick={() => go(id)} aria-label={label} className={`tab ${active === id ? 'on' : ''}`}>
              <span className="bar" />
              <Icon name={icon} size={22} />
            </button>
          ))}
        </div>
      </nav>

      <main className="pb-20 pt-14 md:pb-0 md:pt-16">
        <Home go={go} downloadCV={downloadCV} />
        <About />
        <Projects />
        <Resume downloadCV={downloadCV} />
        <Contact />

        <footer className="mono t-mute border-t b-line px-5 py-8 text-center text-xs tracking-widest">
          © {new Date().getFullYear()} · <span className="t-acc font-bold">dreixo-dev</span>
        </footer>
      </main>
    </div>
  )
}

export default App
