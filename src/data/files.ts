export interface IFiles {
  type: string;
  name: string;
  extension?: string;
  parentFolder?: string;
  createdAt: string;
  updatedAt?: string;
  filesInside?: number;
  kind: "file";
}

export const files: IFiles[] = [
  // Folders
  {
    type: "folder",
    name: "Marketing Assets",
    parentFolder: "Root",
    createdAt: "2025-06-12T10:22:41Z",
    updatedAt: "2025-08-03T07:15:10Z",
    filesInside: 38,
    kind: "file",
  },
  {
    type: "folder",
    name: "Q3 Reports",

    parentFolder: "Root",
    createdAt: "2025-07-01T09:05:11Z",
    filesInside: 12,
    kind: "file",
  },
  {
    type: "folder",
    name: "Design System",

    parentFolder: "Marketing Assets",
    createdAt: "2025-05-19T14:12:03Z",
    updatedAt: "2025-07-26T18:44:29Z",
    filesInside: 24,
    kind: "file",
  },
  {
    type: "folder",
    name: "Product Videos",

    parentFolder: "Root",
    createdAt: "2025-03-08T12:30:00Z",
    filesInside: 7,
    kind: "file",
  },
  {
    type: "folder",
    name: "Event Photos",

    parentFolder: "Marketing Assets",
    createdAt: "2025-08-02T06:40:52Z",
    filesInside: 154,
    kind: "file",
  },
  {
    type: "folder",
    name: "Archived Decks",

    parentFolder: "Q3 Reports",
    createdAt: "2024-12-22T21:04:15Z",
    updatedAt: "2025-01-05T08:19:42Z",
    filesInside: 9,
    kind: "file",
  },

  // Presentations
  {
    type: "presentation",
    name: "Q3_Townhall",
    extension: "pptx",
    createdAt: "2025-07-28T16:12:59Z",
    updatedAt: "2025-08-01T11:00:00Z",
    kind: "file",
  },
  {
    type: "presentation",
    name: "Brand_Guidelines_v2",
    extension: "key",
    createdAt: "2025-05-04T09:22:41Z",
    kind: "file",
  },
  {
    type: "presentation",
    name: "Investor_Update_Aug",
    extension: "pdf",
    createdAt: "2025-08-14T08:17:25Z",
    updatedAt: "2025-08-20T19:22:10Z",
    kind: "file",
  },

  // Videos
  {
    type: "video",
    name: "Product_Demo_v1",
    extension: "mp4",
    createdAt: "2025-06-02T07:30:00Z",
    kind: "file",
  },
  {
    type: "video",
    name: "Webinar_Replay_July",
    extension: "mov",
    createdAt: "2025-07-19T18:41:03Z",
    updatedAt: "2025-07-20T10:05:47Z",
    kind: "file",
  },
  {
    type: "video",
    name: "Launch_Teaser_15s",
    extension: "mp4",
    createdAt: "2025-08-29T05:12:31Z",
    kind: "file",
  },

  // Images
  {
    type: "image",
    name: "hero_banner_dark",
    extension: "png",
    createdAt: "2025-06-15T11:11:11Z",
    kind: "file",
  },
  {
    type: "image",
    name: "team_photo_rooftop",
    extension: "jpg",
    createdAt: "2025-08-03T09:55:02Z",
    updatedAt: "2025-08-03T10:12:45Z",
    kind: "file",
  },
  {
    type: "image",
    name: "logo_square",
    extension: "svg",
    createdAt: "2025-04-22T22:05:40Z",
    kind: "file",
  },
  {
    type: "image",
    name: "ad_creative_v4",
    extension: "webp",
    createdAt: "2025-08-27T13:20:00Z",
    kind: "file",
  },

  // More files (mixed)
  {
    type: "presentation",
    name: "Sales_Enablement_Kit",
    extension: "pptx",
    createdAt: "2025-05-30T06:45:12Z",
    updatedAt: "2025-06-01T09:30:00Z",
    kind: "file",
  },
  {
    type: "video",
    name: "Customer_Testimonial_Akash",
    extension: "mp4",
    createdAt: "2025-07-07T20:10:04Z",
    kind: "file",
  },
  {
    type: "image",
    name: "mockup_dashboard_v7",
    extension: "png",
    createdAt: "2025-08-10T04:01:59Z",
    kind: "file",
  },
  {
    type: "video",
    name: "AllHands_Clip_Intro",
    extension: "mkv",
    createdAt: "2025-06-25T12:03:33Z",
    updatedAt: "2025-06-25T13:47:20Z",
    kind: "file",
  },
];
