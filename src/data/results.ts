export type SimResult = {
  id: string;
  platform: string;
  displayName: string;
  snippet: string;
  urlLike: string;
  discoverability: "High" | "Low";
  footprint: "Present" | "Absent";
  race: "White American" | "African American";
  location?: string;
  imageKey?: string;
  missingNote?: string;
  currentRole?: string;
  currentCompany?: string;
  followers?: string;
  sideImageUrl?: string;
};

export const RESULTS_Emily_Smith: SimResult[] = [
  {
    id: "emily1",
    platform: "Facebook",
    displayName: "Emily Smith (@EmilySmithSongs)",
    snippet: "Emily Smith. 4,800 likes. Scottish folk singer, songwriter and multi-instrumentalist. Award-winning artist based in Edinburgh.",
    urlLike: "Facebook · Emily Smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "4.8K+",
    imageKey: "avatar1"
  },
  {
    id: "emily2",
    platform: "Wikipedia",
    displayName: "Emily Smith (singer)",
    snippet: "Emily Smith is a Scottish folk singer. She was the BBC Radio Scotland Young Traditional Musician of the Year in 2002. Her debut album A Day Like Today was ...",
    urlLike: "en.wikipedia.org › wiki › Emily_Smith_(singer)",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar2"
  },
  {
    id: "emily3",
    platform: "EMILY J. SMITH",
    displayName: "EMILY J. SMITH",
    snippet: "Emily J. Smith is a multidisciplinary artist and designer based in New York. Her work explores themes of identity, memory, and place through various media.",
    urlLike: "www.emjsmith.com",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "New York, NY",
    imageKey: "avatar3"
  },
  {
    id: "emily4",
    platform: "YouTube",
    displayName: "Emily Smith",
    snippet: "Welcome to my channel! I share music, covers, and original songs. New videos every week. Subscribe for more!",
    urlLike: "YouTube · Emily Smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "6.7K+",
    imageKey: "avatar4"
  },
  {
    id: "emily5",
    platform: "Milken Institute School of Public Health",
    displayName: "Emily R. Smith",
    snippet: "Emily R. Smith, ScD is an Associate Professor at the Milken Institute School of Public Health at George Washington University. Her research focuses on ...",
    urlLike: "publichealth.gwu.edu › departments › emily-smith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "Washington, DC",
    currentRole: "Associate Professor",
    currentCompany: "George Washington University",
    imageKey: "avatar5"
  },
  {
    id: "emily6",
    platform: "Instagram",
    displayName: "Emily Smith (@emilymadelinesmith) - Instagram",
    snippet: "Blogger | Lifestyle | Travel. Sharing my adventures and daily life. DM for collabs.",
    urlLike: "Instagram · emilymadelinesmith",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    followers: "38.2K+",
    imageKey: "avatar6"
  },
  {
    id: "emily7",
    platform: "People.com",
    displayName: "Steve Guttenberg Files for Divorce from Wife After ...",
    snippet: "Steve Guttenberg has filed for divorce from his wife Emily Smith after six years of marriage. The actor and journalist tied the knot in 2019.",
    urlLike: "people.com › ... › Celebrity Breakups",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar7"
  },
  {
    id: "emily8",
    platform: "emilysmith.org",
    displayName: "Emily Smith: Home",
    snippet: "Official website of Emily Smith - Scottish folk singer and songwriter. Tour dates, music, news, and more.",
    urlLike: "emilysmith.org",
    discoverability: "Low",
    footprint: "Absent",
    race: "White American",
    location: "",
    imageKey: "avatar8"
  },
];

export const SEARCH_RESULTS: Record<string, SimResult[]> = {
  Emily_Smith: RESULTS_Emily_Smith,
};
