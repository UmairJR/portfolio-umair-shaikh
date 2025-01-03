/* eslint-disable quotes */
/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} certificateUrl - Intership Certificate
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Octaware Technologies',
    position: 'Software Development Intern',
    url: 'https://octaware.com/',
    certificateUrl: 'https://drive.google.com/file/d/1jbcsmzZTulq2Y61kIifsiC4Gj606ormL/view?usp=sharing',
    startDate: '2022-06-01',
    endDate: '2022-07-30',
    summary: `Gained hands-on experience in MS PowerApps and extensive training on the SDLC lifecycle with industry experts. Contributed to defining and documenting system requirements.`,
    highlights: [
      'Acquired practical expertise in MS PowerApps through hands-on experience.',
      'Completed over 20 hours of intensive training on the SDLC lifecycle with industry experts.',
      'Collaborated with a team of 4 professionals to define and document system requirements for the Vendor Management System; the SRS is now utilized as a foundational reference for ongoing system enhancements.',
    ],
  },
  {
    name: 'Insys Technologies',
    position: 'Web Developer Intern',
    url: 'https://www.insystechnologies.in/',
    certificateUrl: 'https://drive.google.com/file/d/1deHzkygZo4V_WURROCw2CDdRWPzA97vt/view?usp=sharing',
    startDate: '2020-06-01',
    endDate: '2020-07-31',
    summary: `Designed and developed a responsive website using modern web technologies, integrating data retrieval from databases using REST APIs.`,
    highlights: [
      'Designed and built a responsive website using React.js, TailwindCSS, and PHP.',
      'Worked with REST APIs to retrieve and display data from databases.',
      'Acquired proficiency in AJAX and applied it effectively to enhance website functionality.',
    ],
  },
];

export default work;
