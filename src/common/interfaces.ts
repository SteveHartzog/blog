export type ContentType = 'post' | 'page';
export type ContentStatus = 'published' | 'draft' | 'scheduled' | 'pending-review';

export interface SiteConfigInterface {
  siteTitle?: string | null;
  siteBlurb?: string | null;
  siteName?: string;
  siteDescription?: string;
}

export interface FirebaseConfigInterface {
  apiKey?: string;
  authDomain?: string;
  databaseURL?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
}

export interface ContentInterface {
  title: string;
  category?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  views?: number;
  type: ContentType;
  status: ContentStatus;
  created_at?: number;
  updated_at?: number;
}

export interface AuthorInterface {
  name: string;
  avatar?: string;
}

export interface CategoryInterface {
  name: string;
  description?: string | null;
  parentCategory?: string | null;
  isDefault?: boolean;
}

export interface ISocial {
  twitter: string;
  github: string;
  googleplus: string;
  linkedin: string;
}
