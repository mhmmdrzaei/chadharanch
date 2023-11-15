import Image from 'next/image';
import { useState } from 'react';

type NextJsImageProps = {
  photo: any;
  onClick?: () => void; // Add onClick prop
};


export default function NextJsImage({ photo, onClick }: NextJsImageProps) {
  return (
    <div style={{ position: 'relative' }} onClick={onClick}>
      {photo._type === 'projectImage' ? (
        <Image
          src={photo.src}
          placeholder={'blurDataURL' in photo ? 'blur' : undefined}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          {...{onClick }}
        />
      ) : photo._type === 'project_video' ? (
        <video no-controls autoPlay loop muted width={photo.width} height={photo.height}>
          <source src={photo.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={photo.src}
          placeholder={'blurDataURL' in photo ? 'blur' : undefined}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
        />
      )}
    </div>
  );
}
