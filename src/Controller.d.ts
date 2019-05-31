declare module 'Controller.d.ts' {
  import * as React from 'react';

  export interface ControllerProps {
    activeSlide?: number;
    slides?: number;
    nextButton?: boolean;
    nextSlide: (...args: any[]) => any;
    skipButton?: boolean;
    skipSlider: (...args: any[]) => any;
    skipButtonStyle?: Object;
    nextButtonStyle?: Object;
    orientation?: string;
    controllerIconActiveStyle?: Object;
    controllerIconInactiveStyle?: Object;
  }

  const Controller: React.FC<ControllerProps>;

  export default Controller;
}
