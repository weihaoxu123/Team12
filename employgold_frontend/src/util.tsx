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
export const generateRandomMatchedJobs = (n: number) => {
  let matchedJobs: any[] = [];
  const id: number = parseInt((jobNames.length * Math.random()).toFixed(0), 10);
  for (let i = 0; i < n; i++) {
    matchedJobs.push({
      id: `${i}`,
      title: jobNames[id],
      company: `Company Name`,
      location: locations[i % locations.length],
      score: (100 - 20 * Math.random()).toFixed(0),
      industry: [],
      date: '',
    });
  }
  return matchedJobs;
};
