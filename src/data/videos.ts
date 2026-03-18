// ### PLACEHOLDER: Researcher will customize video data

export interface VideoResult {
  id: string;
  title: string;
  source: string;
  duration: string;
  views: string;
  thumbnailKey?: string;
}

// Fictional video results for research simulation
export const VIDEOS: VideoResult[] = [
  {
    id: "v1",
    title: "Emily Smith presents at Regional Teaching Conference ...",
    source: "YouTube · EdConnect",
    duration: "14:22",
    views: "Mar 15, 2025"
  },
  {
    id: "v2",
    title: "Emily Smith — PTA volunteer of the year acceptance speech",
    source: "YouTube · Westfield Schools",
    duration: "4:48",
    views: "Jun 5, 2024"
  },
  {
    id: "v3",
    title: "Emily Smith discusses early childhood education strategies",
    source: "YouTube · TeachersCorner",
    duration: "8:15",
    views: "Sep 20, 2024"
  }
];

