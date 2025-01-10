import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/UmairJR/portfolio-umair-shaikh/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'watchers_count',
    link: 'https://github.com/UmairJR/portfolio-umair-shaikh/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/UmairJR/portfolio-umair-shaikh/network',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  // {
  //   label: 'Open github issues',
  //   key: 'open_issues_count',
  //   link: 'https://github.com/UmairJR/portfolio-umair-shaikh/issues',
  // },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/UmairJR/portfolio-umair-shaikh/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    label: 'Lines of Javascript powering this website',
    value: 'Check out',
    link: 'https://github.com/UmairJR/portfolio-umair-shaikh',
  },
];

export default data;
