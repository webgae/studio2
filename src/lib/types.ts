export interface PostImage {
  url: string;
}

export interface PostAuthor {
  id: string;
  displayName: string;
  url: string;
  image: {
    url: string;
  };
}

export interface Post {
  kind: string;
  id: string;
  blog: {
    id: string;
  };
  published: string;
  updated: string;
  url: string;
  selfLink: string;
  title: string;
  content: string;
  author: PostAuthor;
  replies: {
    totalItems: string;
    selfLink: string;
  };
  labels?: string[];
  images?: PostImage[];
}

export interface PostsList {
  kind: string;
  nextPageToken?: string;
  items: Post[];
}
