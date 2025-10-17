import { Experience, IconLink, Project } from './schemas'

export const skills = {
  js: { long: 'JavaScript', short: 'JS' },
  ts: { long: 'TypeScript', short: 'TS' },
  mern: { long: 'MongoDB, Express, React, Node', short: 'MERN Stack' },
  next: { short: 'NextJS' },
  mongo: { short: 'MongoDB' },
  express: { short: 'Express' },
  react: { short: 'React' },
  node: { short: 'Node' },
  canvas: { short: 'Canvas' },
  cp: { short: 'C++' },
  dx: { short: 'DirectX 11' },
  hlsl: { short: 'HLSL' },
  unity: { short: 'Unity' },
  cs: { short: 'C#' },
  unreal: { short: 'Unreal Engine' },
  maya: { short: 'Maya' },
  substance: { short: 'Substance Painter' },
  zb: { short: 'Z Brush' },
  tw: { short: 'Tailwind' }
} as const

export const links = [
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const

export const about = {
  title: "Hey I'm Samay",
  location: 'Rochester, NY | Open to relocation',
  content: `
    I am a Software Developer from Kenya, currently based in Rochester, NY. I enjoy learning new technologies and continuously improving my skills.
    `
} as const

export const career: Experience[] = [
  {
    name: 'Ritz RIT',
    href: 'https://www.rit.edu/dining/location/ritz',
    title: 'Student Worker',
    logo: '/images/career/ritz-logo.png',
    start: new Date('Sep 2024'),
    description: [
      'Delivered fast, friendly service in a high-pressure environment while balancing part-time work with full-time coursework'
    ]
  }
] as const

export const education: Experience[] = [
  {
    name: 'Rochester Institute of Technology',
    href: 'https://www.rit.edu/',
    title: 'BS in Game Design & Development',
    logo: '/images/education/rit-logo.png',
    start: new Date('Sep 2022'),
    description: [
      'currently pursuing BS in GDD',
      "4-time recepient of Dean's list award"
    ]
  }
] as const

export const socials: IconLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/samay-shah-98b912248',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/SamayRShah',
    icon: 'github'
  },
  {
    name: 'Email',
    href: 'mailto:samayrshah4@gmail.com',
    icon: 'mail'
  }
] as const

export const projects: Project[] = [
  {
    name: 'Unreal Engine basic Shaders',
    start: new Date('October 2025'),
    end: new Date('October 2025'),
    description: [
      `Created basic projection blending, distortion, ripple, volumetric and cloth shaders in Unreal Engine`
    ],
    image: '/images/projects/shooter-io.png',
    skills: [skills.mern, skills.js, skills.tw]
  },
  {
    name: 'Shooter.io',
    start: new Date('November 2024'),
    end: new Date('December 2024'),
    description: [
      `Developed an online shooter with online lobbies (Using socket.io), and html canvas-based rendering.`,
      `Integrated user authentication and account persistence using redis.`
    ],
    image: '/images/projects/shooter-io.png',
    skills: [skills.mern, skills.js, skills.tw]
  },
  {
    name: 'Revelations mystery game',
    start: new Date('February 2025'),
    end: new Date('May 2025'),
    description: [
      `Built a full stack interactive puzzle web app where users solve clues through code entry, post collaborative notes, and authenticate via Google`,
      `Prototyped puzzles iteratively based on user research, interviews, and testing.`,
      `Collaborated in a team of 5 using GitHub.`
    ],
    image: '/images/projects/revelations.png',
    skills: [skills.mern, skills.js, skills.tw]
  },
  {
    name: 'Portfolio Site',
    start: new Date('June 2025'),
    end: new Date('June 2025'),
    description: [
      `Built a portfolio website, using motion, and GSAP for animations`,
      `Used Zod with TypeScript for type safety`,
      `Styled with tailwind and components from shadcn`
    ],
    image: '/images/projects/portfolio.png',
    skills: [skills.next, skills.react, skills.tw]
  },
  {
    name: 'DirectX Graphics Engine',
    start: new Date('January 2025'),
    end: new Date('April 2025'),
    description: [
      `Built a custom rendering engine with PBR, shadow mapping, and post-processing effects`,
      `Wrote shaders for lighting, effects (box blur, chromatic aberration), PRB, and custom animated
      effects.`,
      `Created in-engine UI using ImGui to preview render stages, adjust settings, edit the scene,
      entities, materials, etc..`
    ],
    image: '/images/projects/graphics-engine.png',
    skills: [skills.cp, skills.hlsl, skills.dx]
  },
  {
    name: 'Herding game AI',
    start: new Date('Febuary 2025'),
    end: new Date('May 2025'),
    description: [
      `Implemented Goal-Oriented Behavior (GOB) model and flocking algorithms to control AI
       character movement and decision-making.`,
      `Used ScriptableObjects to build modular, reusable behavior systems.`,
      `Built tunable gameplay parameters to vary mob behavior and improve replayability`
    ],
    image: '/images/projects/herding-game-ai.png',
    skills: [skills.unity, skills.cs]
  },
  {
    name: 'Game Ready Character',
    start: new Date('April 2025'),
    end: new Date('April 2025'),
    description: [
      `Designed, modeled, UV unwrapped, textured, and rigged a game-ready character inspired by a
       Tamagotchi theme`,
      `Performed animation retargeting and implemented ragdoll physics in Unreal.`
    ],
    image: '/images/projects/game-ready-character.png',
    skills: [skills.maya, skills.unreal, skills.substance, skills.zb]
  }
] as const
