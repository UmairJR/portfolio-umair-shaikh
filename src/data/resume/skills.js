const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Ethereum',
    competency: 4,
    category: ['Blockchain'],
  },
  {
    title: 'Solidity',
    competency: 4,
    category: ['Languages', 'Blockchain'],
  },
  {
    title: 'Truffle',
    competency: 4,
    category: ['Blockchain'],
  },
  {
    title: 'Ganache',
    competency: 3,
    category: ['Blockchain'],
  },
  {
    title: 'Hardhat',
    competency: 2,
    category: ['Blockchain'],
  },
  {
    title: 'NFTs',
    competency: 3,
    category: ['Blockchain'],
  },
  {
    title: 'C',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages', 'Java'],
  },
  {
    title: 'Spring Boot 3',
    competency: 4,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Spring Cloud',
    competency: 3,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Eurekha',
    competency: 2,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Recoil',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Prisma',
    competency: 3,
    category: ['Web Development', 'Javascript', 'ORMs'],
  },
  {
    title: 'Mongoose',
    competency: 4,
    category: ['Web Development', 'Javascript', 'ORMs'],
  },
  {
    title: 'Next.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'TailwindCSS',
    competency: 4,
    category: ['Web Development', 'UI'],
  },
  {
    title: 'Chakra UI',
    competency: 4,
    category: ['Web Development', 'UI'],
  },
  {
    title: 'daisyUI',
    competency: 4,
    category: ['Web Development', 'UI'],
  },
  {
    title: 'Shadcn',
    competency: 2,
    category: ['Web Development', 'UI'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Deployment', 'Tools'],
  },
  {
    title: 'Netlify',
    competency: 4,
    category: ['Tools', 'Deployment'],
  },
  {
    title: 'Glitch',
    competency: 4,
    category: ['Tools', 'Deployment'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'OpenAI',
    competency: 4,
    category: ['AI'],
  },
  {
    title: 'Langchain',
    competency: 3,
    category: ['AI'],
  },
  {
    title: 'Hugging Face',
    competency: 3,
    category: ['AI'],
  },
  {
    title: 'Chainlit',
    competency: 3,
    category: ['AI', 'Python', 'Web Development'],
  },
  {
    title: 'Streamlit',
    competency: 4,
    category: ['Python', 'Web Development'],
  },
  {
    title: 'Pinecone',
    competency: 2,
    category: ['AI', 'Databases'],
  },
  {
    title: 'FAISS',
    competency: 4,
    category: ['AI', 'Databases'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  // {
  //   title: 'ElasticSearch',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  {
    title: 'PostgreSQL/MS SQL SERVER',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Languages'],
  },
  // {
  //   title: 'Data Mining',
  //   competency: 3,
  //   category: ['ML Engineering'],
  // },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  // {
  //   title: 'D3',
  //   competency: 2,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'Flask',
  //   competency: 3,
  //   category: ['Web Development', 'Python'],
  // },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  // {
  //   title: 'Kubernetes',
  //   competency: 2,
  //   category: ['Tools', 'Data Engineering'],
  // },
  // {
  //   title: 'Google Cloud Compute',
  //   competency: 2,
  //   category: ['Tools', 'Web Development'],
  // },
  // {
  //   title: 'AWS',
  //   competency: 3,
  //   category: ['Tools', 'Web Development'],
  // },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Cloud'],
  },
  // {
  //   title: 'AWS Lambda',
  //   competency: 3,
  //   category: ['Tools', 'Web Development'],
  // },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Python', 'ML Engineering'],
  },
  // {
  //   title: 'Numba',
  //   competency: 2,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  {
    title: 'Tensorflow',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  // {
  //   title: 'Ruby',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Ruby on Rails',
  //   competency: 3,
  //   category: ['Web Development', 'Languages'],
  // },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  // {
  //   title: 'Julia',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'R',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Data Visualization',
  //   competency: 3,
  //   category: ['Data Science', 'Javascript'],
  // },
  // {
  //   title: 'GraphQL',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  {
    title: 'Pandas',
    competency: 5,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['ML Engineering', 'Python'],
  },
  // {
  //   title: 'Spark',
  //   competency: 2,
  //   category: ['Data Engineering', 'ML Engineering'],
  // },
  // {
  //   title: 'Dagster',
  //   competency: 2,
  //   category: ['Data Engineering', 'Python', 'ML Engineering'],
  // },
  // {
  //   title: 'Mypy',
  //   competency: 3,
  //   category: ['Python'],
  // },
  // {
  //   title: 'Pylint',
  //   competency: 4,
  //   category: ['Data Engineering', 'Python'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
