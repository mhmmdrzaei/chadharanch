"use client"
import { v4 as uuidv4 } from 'uuid';
import { Project } from '@/sanity/types/Project';
import PhotoAlbum from 'react-photo-album';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from 'react';
import { Fullscreen } from 'yet-another-react-lightbox/plugins';

type PhotoType = {
  mainImage: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  open: boolean;
  index: number;
  close: () => void;
  plugins: any[];
  additionalImages: {
    url: string;
    attribution: string;
  };
};

type HeaderProps = {
  project: Project;
};

export default function ProjectImages({ project }: HeaderProps) {
  const mainImage = {
    src: project.mainimage,
    width: "auto" as string,
    height: 1200 as number,
    key: uuidv4(),
    alt: `${project.title} front image`,
  };

  const additionalImages = project.projectImages && project.projectImages.length > 0
  ? project.projectImages
      .filter((image: { _type: string }) => image._type === "projectImage")
      .map((image: { url: string; attribution: string }) => ({
        src: image.url,
        width: "auto" as string,
        height: 1200 as number,
        alt: image.attribution,
        key: uuidv4(),
      }))
  : [];

  const photos: PhotoType[] = [mainImage, ...additionalImages];

  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="columns"
        targetRowHeight={150} // Adjust the height as desired
        // Use media query to dynamically adjust the number of columns
        columns={window.innerWidth >= 700 ? 2 : 1}
        onClick={({ index }) => setIndex(index)}
        padding={10}
        spacing={0}
      />
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