"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface ClientImageProps extends Omit<ImageProps, 'onLoad'> {
  onLoadingComplete?: () => void;
  alt: string; // Make alt required
}

export default function ClientImage(props: ClientImageProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a placeholder div during SSR with the same dimensions
    return (
      <div
        className={props.className}
        style={{
          position: props.fill ? 'absolute' : 'relative',
          height: props.fill ? '100%' : props.height,
          width: props.fill ? '100%' : props.width,
        }}
        aria-label={props.alt} // Add aria-label for accessibility
      />
    );
  }

  // Only render the Image component on the client
  return <Image {...props} alt={props.alt} />;
}
