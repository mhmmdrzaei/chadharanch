import { PortableTextBlock } from "sanity"

export type Project = {
  _id: string,
  name: string, 
  title: string,
  visible: boolean,
  projectdescription:PortableTextBlock[],
  projectDate: string,
  projectLocation: string,
  projectMedium: string, 
  mainimage: string,
  categoryName: string, 
  categorySlug: string,
  slug: string,
  projectImages:{
      filter: any;
      map: any; url: string;_key: string; _type: string; attribution: string;
}
};