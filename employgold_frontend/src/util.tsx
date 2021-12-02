export const setToken = () => {};

export const getToken = () => {};

export const removeToken = () => {};

const jobNames: string[] = [
  'Administration',
  'Airline',
  'Automotive',
  'Business services',
  'Biotech',
  'Childcare',
  'Cleaning',
  'Community',
  'Computer science',
  'Construction',
  'Customer service',
  'Customer success',
  'Disability services',
  'Driving motor vehicles',
  'Finance',
  'Food service',
  'Graphic design',
  'Government',
  'Healthcare',
  'Home improvement',
  'Human Resources',
  'Interior design',
  'Landscaping',
  'Legal',
  'Marketing',
  'Manufacturing',
  'Operations',
  'Pharmaceutical',
  'Project management',
  'Psychology',
  'Real estate',
  'Retail',
  'Social work',
  'Software development',
  'Voiceover',
  'Writer',
];

const locations = [
  'San Dimas, CA',
  'Country Club, CA',
  'Downey, CA',
  'Larkfield-Wikiup, CA',
  'Imperial Beach, CA',
  'Perris, CA',
  'Redondo Beach, CA',
  'Monrovia, CA',
  'Daly City, CA',
  'Valley Center, CA',
  'Pleasanton, CA',
  'Tulare, CA',
  'Hawthorne, CA',
  'Rancho Palos Verdes, CA',
  'Morro Bay, CA',
  'Apple Valley, CA',
  'Auburn, CA',
  'Garnet, CA',
  'Eldridge, CA',
  'Reedley, CA',
];

export const generateRandomMatchedJobs = (numJobs: number) => {
  let matchedJobs: any[] = [];
  const id: number = parseInt((jobNames.length * Math.random()).toFixed(0), 10);
  for (let i = 0; i < numJobs; i++) {
    matchedJobs.push({
      id: `j${i}`,
      title: `${jobNames[id]} Job`,
      company: `${jobNames[id]} Co.`,
      location: locations[i % locations.length],
      score: (100 - 20 * Math.random()).toFixed(0),
      industries: [jobNames[id], jobNames[(i + 1) % jobNames.length]],
      type: 'Full time',
      date: new Date(),
      link: 'https://careers.google.com/jobs/results/81428638450229958-manager-executive-development/?category=DATA_CENTER_OPERATIONS&category=DEVELOPER_RELATIONS&category=HARDWARE_ENGINEERING&category=INFORMATION_TECHNOLOGY&category=MANUFACTURING_SUPPLY_CHAIN&category=NETWORK_ENGINEERING&category=PRODUCT_MANAGEMENT&category=PROGRAM_MANAGEMENT&category=SOFTWARE_ENGINEERING&category=TECHNICAL_INFRASTRUCTURE_ENGINEERING&category=TECHNICAL_SOLUTIONS&category=TECHNICAL_WRITING&company=Google&company=YouTube&q=',
    });
  }
  return matchedJobs;
};

export const generateRandomMatchedCandidates = (numJobs: number) => {
  let matchedJobs: any[] = [];
  const id: number = parseInt((jobNames.length * Math.random()).toFixed(0), 10);
  for (let i = 0; i < numJobs; i++) {
    const numCandidates: number = parseInt((10 * Math.random()).toFixed(0), 10);
    let matchedCandidates: any[] = [];
    for (let i = 0; i < numCandidates; i++) {
      matchedCandidates.push({
        id: `c${i}`,
        name: `Candidate${i}`,
      });
    }

    matchedJobs.push({
      id: `j${i}`,
      title: `${jobNames[id]} Job`,
      company: `${jobNames[id]} Co.`,
      location: locations[i % locations.length],
      score: (100 - 20 * Math.random()).toFixed(0),
      industries: [jobNames[id], jobNames[(i + 1) % jobNames.length]],
      type: 'Full time',
      date: new Date(),
      candidates: matchedCandidates,
      link: 'https://careers.google.com/jobs/results/81428638450229958-manager-executive-development/?category=DATA_CENTER_OPERATIONS&category=DEVELOPER_RELATIONS&category=HARDWARE_ENGINEERING&category=INFORMATION_TECHNOLOGY&category=MANUFACTURING_SUPPLY_CHAIN&category=NETWORK_ENGINEERING&category=PRODUCT_MANAGEMENT&category=PROGRAM_MANAGEMENT&category=SOFTWARE_ENGINEERING&category=TECHNICAL_INFRASTRUCTURE_ENGINEERING&category=TECHNICAL_SOLUTIONS&category=TECHNICAL_WRITING&company=Google&company=YouTube&q=',
    });
  }
  return matchedJobs;
};
