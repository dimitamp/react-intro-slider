declare module 'Slide.d.ts' {
  import * as React from 'react';

  export interface SlideProps {
    title?: string;
    image?: string;
    descriptionStyle?: Object;
    titleStyle?: Object;
    description?: string;
    imageStyle?: Object;
    background?: string;
    active?: boolean;
  }

  const Slide: React.FC<SlideProps>;

  export default Slide;
}
