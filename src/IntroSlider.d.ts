declare module 'IntroSlider.d.ts' {
  import * as React from 'react';

  export interface IntroSliderProps {
    sliderIsOpen?: boolean;
    descriptionStyle?: Object;
    titleStyle?: Object;
    imageStyle?: Object;
    slides?: any[];
    size?: string;
    nextButton?: boolean;
    skipButton?: boolean;
    handleDone: (...args: any[]) => any;
    skipButtonStyle?: Object;
    nextButtonStyle?: Object;
    controllerOrientation?: string;
    sliderOverlayStyle?: Object;
    sliderStyle?: Object;
    handleClose: (...args: any[]) => any;
    closeOnOverlayClick?: boolean;
    controllerIconActiveStyle?: Object;
    controllerIconInactiveStyle?: Object;
  }

  const IntroSlider: React.FC<IntroSliderProps>;

  export default IntroSlider;
}
