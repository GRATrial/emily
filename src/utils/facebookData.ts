// Utility to generate specific Facebook profile data for Adeeb Khaja Mohamed
import { getFakeImageUrl } from './fakeImages';

export interface FacebookProfileData {
  name: string;
  friends: string;
  photos: number;
  posts: Array<{
    author: string;
    authorAvatar: string;
    time: string;
    content: string;
    likes: number;
    comments: number;
    shares?: number;
    image?: string;
  }>;
  about: {
    work?: string[];
    education?: string[];
    places?: string[];
    contact?: string;
    basic?: string[];
  };
  friendsList: Array<{
    name: string;
    avatar: string;
  }>;
  peopleYouMayKnow: Array<{
    name: string;
    avatar: string;
  }>;
}

export const generateFacebookProfile = (resultId: string): FacebookProfileData => {
  // If it's the specific Adeeb result, return exact data from screenshot
  if (resultId === 'adeeb1' || resultId === 'adeeb2' || resultId === 'adeeb3' || resultId.includes('adeeb')) {
    return {
      name: 'Adeeb Khaja Mohamed',
      friends: '31 friends',
      photos: 45,
      posts: [
        {
          author: 'Adeeb Khaja Mohamed',
          authorAvatar: 'adeeb-avatar',
          time: '5mo',
          content: '',
          likes: 90,
          comments: 15,
          image: 'adeeb-stranger-things' // Reference to the image in screenshot
        },
        {
          author: 'Adeeb Khaja Mohamed',
          authorAvatar: 'adeeb-avatar',
          time: '11 April 2002',
          content: 'Born on 11 April 2002',
          likes: 45,
          comments: 2,
          shares: 0
        }
      ],
      about: {
        work: ['Graduate Research Assistant at George Mason University'],
        education: ['George Mason University'],
        places: ['Washington D.C.'],
        basic: ['Born on April 11, 2002']
      },
      friendsList: [
        { name: 'Sarmad Talpur', avatar: 'sarmad' },
        { name: 'Mohammed Sajeed', avatar: 'mohammed' },
        { name: 'Emily Pan', avatar: 'emily' },
        { name: 'Saif Ali Khan', avatar: 'saif' },
        { name: 'Aryan Oberoi', avatar: 'aryan' },
        { name: 'Rayyan S Rnz', avatar: 'rayyan' },
        { name: 'Chirag Pm', avatar: 'chirag' },
        { name: 'Hammad Feroz', avatar: 'hammad' },
        { name: 'Ajay Kumar G', avatar: 'ajay' }
      ],
      peopleYouMayKnow: [
        { name: 'Person 1', avatar: 'p1' },
        { name: 'Person 2', avatar: 'p2' },
        { name: 'Person 3', avatar: 'p3' },
        { name: 'Person 4', avatar: 'p4' },
        { name: 'Person 5', avatar: 'p5' }
      ]
    };
  }

// Fallback for other Michael Johnson results (as previously implemented)
  return {
    name: 'Michael Johnson',
    friends: '1.2K friends',
    photos: 120,
    posts: [
      {
        author: 'Michael Johnson',
        authorAvatar: resultId,
        time: '2h',
        content: 'Just finished a great workout!',
        likes: 120,
        comments: 12,
        shares: 5
      }
    ],
    about: {
      work: ['Software Engineer at Tech Corp'],
      education: ['University of Washington'],
      places: ['Seattle, WA']
    },
    friendsList: [],
    peopleYouMayKnow: []
  };
};
