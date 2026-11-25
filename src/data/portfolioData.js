/**
 * Centralized portfolio data for Vishal Jadav (Editorial Minimal).
 * Update any field below to customize personal details, skills,
 * projects, education, and contact links.
 */

export const portfolioData = {
  brand: {
    initials: 'VJ',
    label: 'PORTFOLIO',
  },

  profile: {
    nameFirst: 'VISHAL',
    nameLast: 'JADAV',
    fullName: 'Vishal Jadav',
    rolePrimary: 'Cybersecurity Student',
    roleSecondary: 'Aspiring SOC Analyst',
    university: 'Shreyarth University',
    degree: 'BSc IT - Cybersecurity',
    heroStatement:
      'Studying defensive security systems, Linux administration, and centralized telemetry—building practical readiness for Security Operations Center (SOC) workflows.',
    heroMeta: [
      { label: 'Program', value: 'BSc IT - Cybersecurity' },
      { label: 'Institution', value: 'Shreyarth University' },
      { label: 'Focus', value: 'SOC & SIEM Monitoring' },
    ],
  },

  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],

  about: {
    index: '01',
    label: 'About',
    editorialLead:
      'Understanding how systems communicate, fail, and leave traces is the quiet craft behind defensive security.',
    paragraphs: [
      'I am pursuing a BSc IT in Cybersecurity at Shreyarth University with a clear focus on entering Security Operations Center (SOC) work. Rather than treating security as abstract theory, my goal is to understand the underlying operating systems, network paths, and log streams that analysts inspect every day.',
      'My current practice centers on setting up self-contained lab environments—connecting endpoint agents, observing how events travel across a network, and building fluency in Linux and foundational scripting.',
    ],
    facts: [
      { label: 'Discipline', value: 'Defensive Security & Monitoring' },
      { label: 'Institution', value: 'Shreyarth University' },
      { label: 'Approach', value: 'Lab-Driven Systems Study' },
    ],
  },

  projects: {
    index: '02',
    label: 'Selected Work',
    title: 'Practical Environment Studies',
    featured: {
      number: '01',
      category: 'Featured Lab Simulation',
      title: 'SOC Lab Simulation',
      titleAccent: 'using Wazuh',
      summary:
        'A hands-on monitoring environment built to observe how host and security telemetry are collected from an endpoint, ingested by a centralized SIEM manager, and reviewed for security event visibility.',
      scopeNote: 'Self-hosted lab environment focused on log ingestion and endpoint visibility.',
      architecture: [
        {
          step: '01',
          component: 'Ubuntu Server',
          role: 'Dedicated host operating system running the centralized SIEM stack.',
        },
        {
          step: '02',
          component: 'Wazuh SIEM',
          role: 'Core manager & dashboard layer for log aggregation and rule evaluation.',
        },
        {
          step: '03',
          component: 'Windows Endpoint Agent',
          role: 'Deployed endpoint agent forwarding host telemetry to the Wazuh manager.',
        },
        {
          step: '04',
          component: 'Security Event Monitoring',
          role: 'Observing real-time event streams, host status, and alert classification.',
        },
      ],
      repoUrl: '',
      writeupUrl: '',
    },
    upcomingSlot: {
      number: '02',
      status: 'Placeholder',
      title: 'Next Lab / Project Entry',
      note: 'Editable slot in src/data/portfolioData.js — reserved for future coursework or lab documentation.',
    },
  },

  skills: {
    index: '03',
    label: 'Technical Skills',
    title: 'Core Foundations & Tooling',
    groups: [
      {
        index: 'A',
        category: 'Systems & Infrastructure',
        items: [
          {
            name: 'Linux',
            proficiency: 'Core Foundation',
            detail: 'Command-line navigation, file permissions, service inspection, and Ubuntu Server operation.',
          },
          {
            name: 'Networking',
            proficiency: 'Core Foundation',
            detail: 'TCP/IP fundamentals, ports, protocols, DNS, and host-to-server communication paths.',
          },
        ],
      },
      {
        index: 'B',
        category: 'Security Operations',
        items: [
          {
            name: 'Wazuh',
            proficiency: 'Basic Hands-On Experience',
            detail: 'Manager deployment, Windows endpoint agent enrollment, and reviewing collected event logs.',
          },
          {
            name: 'SIEM Fundamentals',
            proficiency: 'Core Focus',
            detail: 'Centralized log collection concepts, telemetry visibility, and alert monitoring workflows.',
          },
        ],
      },
      {
        index: 'C',
        category: 'Scripting & Web',
        items: [
          {
            name: 'Python',
            proficiency: 'Beginner',
            detail: 'Foundational syntax, control flow, and introductory scripting concepts.',
          },
          {
            name: 'HTML, CSS and JavaScript',
            proficiency: 'Beginner',
            detail: 'Semantic document structure, responsive styling, and basic client-side behavior.',
          },
        ],
      },
    ],
  },

  education: {
    index: '04',
    label: 'Education',
    title: 'Academic Background',
    entries: [
      {
        id: 'shreyarth-bsc-it',
        status: 'Current Program',
        institution: 'Shreyarth University',
        degree: 'BSc IT - Cybersecurity',
        summary:
          'Undergraduate degree building structured knowledge across operating systems, computer networks, information security concepts, and foundational software development.',
        areas: ['Cybersecurity Foundations', 'Linux Systems', 'Computer Networking', 'Web Fundamentals'],
      },
    ],
  },

  contact: {
    index: '05',
    label: 'Contact',
    headline: 'Open to SOC learning opportunities and technical conversations.',
    note: 'Contact links below currently use clearly labeled placeholders. Update them in src/data/portfolioData.js when ready.',
    email: {
      value: 'vishal.jadav.placeholder@example.com',
      isPlaceholder: true,
    },
    links: [
      {
        id: 'github',
        label: 'GitHub',
        displayValue: 'github.com/your-username (Placeholder)',
        href: '',
        isPlaceholder: true,
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        displayValue: 'linkedin.com/in/your-profile (Placeholder)',
        href: '',
        isPlaceholder: true,
      },
    ],
  },
}
