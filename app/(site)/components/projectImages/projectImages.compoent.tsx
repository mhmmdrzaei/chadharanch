
import { v4 as uuidv4 } from 'uuid';
import { Project } from '@/sanity/types/Project';
import PhotoAlbum from "react-photo-album";
import NextJsImage from '../nextjsimage/nextjsImage.component';

type PhotoType = {
  key: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  _type: string;
  
};


type HeaderProps = {
  project: Project;
};

export default function ProjectImages({ project }: HeaderProps) {
  const mainImage: PhotoType = {
    src: project.mainimage,
    width: 1200 as number,
    height: 1200 as number,
    key: uuidv4(),
    _type: '',
    alt: `${project.title} by Chadha Ranch in New York City`,
   
  };

  const additionalMedia: PhotoType[] = project.projectImages && project.projectImages.length > 0
    ? project.projectImages
      .map((media: { _type: string; url: string; attribution: string }) => {
        if (media._type === 'projectImage') {
          return {
            src: media.url,
            width: 1200,
            height: 1200,
            alt: media.attribution,
            key: uuidv4(),
            _type: media._type
          }
        } else if (media._type === 'project_video') {
          return {
            src: media.url,
            width: 800,
            height: 800,
            alt: media.attribution,
            key: uuidv4(),
            _type: media._type
          } 
        } else {
          // Handle other media types if needed
          return null;
        }
      })
      .filter((media: PhotoType | null) => media !== null)
    : [];

  

  const photos: PhotoType[] = [mainImage, ...additionalMedia];

  



  function openLightbox(index: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
    <PhotoAlbum layout="masonry" 
    photos={photos}
    renderPhoto={(props) => (
      <NextJsImage
      onClick={function (index: number): void {
        throw new Error('Function not implemented.');
      } } {...props}      
      />
    )}
    columns={window.innerWidth >= 700 ? 2 : 1} 
    spacing={10}
    />
      
    
    </>
  );
}