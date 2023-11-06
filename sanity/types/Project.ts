import { PortableTextBlock } from "sanity"

export type Project = {
  _id: string,
  name: string, 
  title: string,
  visibility: boolean,
  projectdescription:PortableTextBlock[],
  projectDate: string,
  projectLocation: string,
  projectMedium: string, 
  mainimage: string,
  slug: string,
};