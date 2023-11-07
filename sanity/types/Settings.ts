
export type HeroVisual = {
  hero_image: string;
  _key: string;
  hero_video: string;

}
export type Settings = {
  password: string;
  logo: string;
  _id: string;
  _createdAt: Date;
  title: string;
  email: string;
  latlong: string;
  seoTitle: string;
  seoDescription: string;
  seoImageUrl: string;
  cache: string;
  footerText: string;
  herovisual: HeroVisual[];
};


