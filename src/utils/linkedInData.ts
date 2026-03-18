// Utility to generate specific LinkedIn profile data for Adeeb Khaja Mohamed
import { getFakeImageUrl } from './fakeImages';

export interface LinkedInProfileData {
  name: string;
  headline: string;
  location: string;
  link: string;
  followers: string;
  connections: string;
  about?: string;
  analytics: {
    profileViews: number;
    postImpressions: number;
    searchAppearances: number;
  };
  activity: Array<{
    type: 'post' | 'comment';
    content: string;
    likes: number;
    comments: number;
    time: string;
    image?: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    location?: string;
    logo?: string;
    description?: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    field?: string;
    years?: string;
  }>;
  skills: string[];
  suggestedProfiles: Array<{
    name: string;
    title: string;
    company: string;
    seed: string;
  }>;
}

export const generateLinkedInProfile = (resultId: string): LinkedInProfileData => {
  if (resultId.includes('adeeb')) {
    return {
      name: 'Adeeb Khaja Mohamed',
      headline: 'Graduate Research Assistant @ George Mason University | Data Analytics Engineering',
      location: 'Fairfax, Virginia, United States · Contact info',
      link: 'https://www.adeebkm.in/',
      followers: '875',
      connections: '500+',
      about: 'Currently pursuing a Master of Science in Data Analytics Engineering at George Mason University, I contribute as a Graduate Research Assistant at the Costello College of Business. My work emphasizes data analysis, AI-driven methodologies, and web application development. The role builds upon prior experience in urban air mobility research, where I developed collision-avoidance systems and scalable web applications integrating real-time data processing.',
      analytics: {
        profileViews: 28,
        postImpressions: 32,
        searchAppearances: 19
      },
      activity: [
        {
          type: 'post',
          content: "I'm happy to share that I'm starting a new position as Graduate Research Assistant at George Mason University - Costello College of Business!",
          likes: 90,
          comments: 15,
          time: '5mo',
          image: 'starting-new-position'
        },
        {
          type: 'post',
          content: "Participated in my first hackathon. Gained a lot of knowledge through this hackathon. Hoping to participate in further hackathons. ...more",
          likes: 47,
          comments: 1,
          time: '3yr',
          image: 'hackathon'
        }
      ],
      experience: [
        {
          title: 'Graduate Research Assistant',
          company: 'George Mason University - Costello College of Business · Full-time',
          duration: 'Aug 2025 - Present · 7 mos',
          location: 'Fairfax, Virginia, United States · On-site',
        },
        {
          title: 'Research Intern',
          company: 'Department of Electronic Systems Engineering (DESE, Formerly CEDT), IISc · Internship',
          duration: 'Oct 2023 - Jul 2024 · 10 mos',
          location: 'Bengaluru, Karnataka, India · On-site',
          description: [
            'Contributed to an AI-driven urban air mobility project funded by Boeing at IISc.',
            'Developed collision-avoidance mechanisms using the A* algorithm for air traffic management.'
          ]
        },
        {
          title: 'App Developer',
          company: 'Journyz · Internship',
          duration: 'Jan 2023 - Apr 2023 · 4 mos',
          location: 'Chicago, Illinois, United States'
        },
        {
          title: 'Under 25 Universe · Internship',
          company: 'Internship · 11 mos',
          duration: 'Bengaluru, Karnataka, India',
          description: [
            'Student Leader (Dec 2022 - Mar 2023 · 4 mos)',
            'As a Student Leader, I was responsible for leading a team of hustlers and managing various aspects of the festival. The festival had over 35k+ students attending and featured 7 stages with more than 50C ...see more',
            'Snapchat Opinion Leader (May 2022 - Jan 2023 · 9 mos)',
            'Snapchat Opinion Leaders are students who are at the forefront of building a culture of Augmented Reality (AR) and Snapifying campuses across India. They are some of the smartest minds in the country.'
          ]
        }
      ],
      education: [
        {
          school: 'George Mason University',
          degree: 'Master of Science - MS',
          field: 'Data Analytics Engineering',
          years: 'Aug 2024'
        },
        {
          school: 'Ramaiah Institute Of Technology',
          degree: 'Bachelor of Engineering - BE',
          field: 'Information Science and Engineering',
          years: '2020 - 2024'
        }
      ],
      skills: ['Graphic Design', 'Augmented Reality (AR)', 'Data Analytics', 'Python', 'Machine Learning', 'AI'],
      suggestedProfiles: [
        { name: 'Ayush Daga', title: 'Aspiring Data Analytics & ML Enthusiast | Graduate...', company: '3rd+', seed: 'ayush' },
        { name: 'Akhilesh Kotegar', title: 'Aspiring Software developer |Java Backend Developer |...', company: '3rd+', seed: 'akhilesh' },
        { name: 'Amartya Shome', title: 'Student at George Mason University', company: '3rd+', seed: 'amartya' },
        { name: 'Prothoma Islam', title: 'Student at George Mason University', company: '3rd+', seed: 'prothoma' },
        { name: 'Marisa Parikh', title: 'Former Legal Intern | George Mason University Honors...', company: '3rd+', seed: 'marisa' }
      ]
    };
  }

// Fallback for Michael Johnson
  return {
    name: 'Michael Johnson',
    headline: 'Senior Software Engineer',
    location: 'Seattle, WA',
    link: 'https://linkedin.com/in/mjohnson',
    followers: '1.2K',
    connections: '500+',
    about: 'Experienced software engineer with a passion for building scalable applications and solving complex technical challenges.',
    analytics: { profileViews: 120, postImpressions: 450, searchAppearances: 35 },
    activity: [],
    experience: [],
    education: [],
    skills: [],
    suggestedProfiles: []
  };
};

export const getCompanyLogoUrl = (company: string, size: number = 40) => {
  const domainMap: Record<string, string> = {
    'George Mason University': 'gmu.edu',
    'University of Michigan': 'umich.edu',
    'Midwest Capital Advisors': 'midwestcapital.com',
    'Great Lakes Financial Services': 'greatlakesfinancial.com',
    'Chicago Financial Group': 'chicagofinancial.com',
    'Microsoft': 'microsoft.com',
    'Amazon': 'amazon.com',
    'Google': 'google.com',
    'Apple': 'apple.com',
    'Meta': 'meta.com',
    'Salesforce': 'salesforce.com',
    'Oracle': 'oracle.com',
    'IBM': 'ibm.com',
    'Deloitte': 'deloitte.com'
  };
  
  const domain = domainMap[company] || 'linkedin.com';
  return `https://logo.clearbit.com/${domain}?size=${size}`;
};
