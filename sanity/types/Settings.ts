import { PortableTextBlock } from "sanity"
export type Social = {
  social_name: string;
  _key: string;
  social_link: string;
  soc: string | import("url").UrlObject;
};
export type HeroVisual = {
  hero_image: string;
  _key: string;
  hero_video: string;

}
export type Settings = {
  password: string;
  _id: string;
  _createdAt: Date;
  title: string;
  email: string;
  latlong: string;
  social: Social[];  
  seoTitle: string;
  seoDescription: string;
  seoImageUrl: string;
  cache: string;
  footerText: string;
  herovisual: HeroVisual[];
};

