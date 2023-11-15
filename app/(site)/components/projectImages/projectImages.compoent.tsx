"use client"
import { v4 as uuidv4 } from 'uuid';
import { Project } from '@/sanity/types/Project';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from 'react';
// import Image from 'next/image';
import { Fullscreen } from 'yet-another-react-lightbox/plugins';
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
    width: 800 as number,
    height: 800 as number,
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
            width: 800,
            height: 800,
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
  const [index, setIndex] = useState(-1);
  const openLightbox = (index: number) => {
    setIndex(index);
  };

  const closeLightbox = () => {
    setIndex(-1);
  };



  return (
    <>
    <PhotoAlbum layout="masonry" 
    photos={photos}
    renderPhoto={NextJsImage}
    columns={window.innerWidth >= 700 ? 2 : 1} 
    // onClick={({ index }) => setIndex(index)}
    spacing={12}/>
      
      
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen]}
      />
    </>
  );
}