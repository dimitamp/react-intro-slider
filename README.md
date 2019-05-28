<h1 align="center">react-intro-slider</h1>

<p align="center">Easy-to-use yet very configurable app introduction slider</p>

```sh
npm i react-intro-slider --save
```
| | |
|-|-|
![Slider With Vertical Controller gif](images/Vertical-Controller.gif) | ![Slider with Horizontal Controller gif](images/Horizontal-Controller.gif)

## Table of contents
  * [What's New](#whats-new)
  * [Props and options](#props-and-options)
    * [Configure behaviour](#configure-behaviour)
    * [Configure looks](#configure-looks)
    * [Methods](#methods)
  * [Example](#example)
 
<h2 align="center">What's New in v1.0.8</h2>

### What's New

- Added slider overlay
- Added styling props for controller's icons
- Added styling prop for slider
- Fixed controller centering bug
- Added close slider method

<h2 align="center">Props and options</h2>

### Configure looks

Name                       | Type       | Default                   | Description
---------------------------|------------|---------------------------|--------------
size                       | `string`   | `small`                   | Size of slider. Possible values: `small`, `medium`,`large`,`fullscreen`
titleStyle                 | `string`   | `null`                    | Styling for slide title
imageStyle                 | `string`   | `null`                    | Styling for slide image
descriptionStyle           | `string`   | `null`                    | Styling for slide description
skipButtonStyle            | `style`    | `null`                    | Styling for skip button
nextButtonStyle            | `style`    | `null`                    | Styling for next button
controllerActiveIconStyle  | `style`    | `null`                    | Style of active pagination dots
controllerInactiveIconStyle| `style`    | `null`                    | Style of inactive pagination dots
sliderStyle                | `style`    | `null`                    | Style of slider container


### Configure behavior

Name                  | Type       | Default                   | Description
----------------------|------------|---------------------------|--------------
slides                | `array`    | No default, required      | An array of objects 
skipButton            | `boolean`  | `false`                   | Enable to show a skip button to the left of pagination dots 
nextButton            | `boolean`  | `true`                    | Disable to hide the next button
closeOnOverlayClick   | `boolean`  | `true`                    | Disable to keep slider open 
controllerOrientation | `string`   | `vertical`                | Orientation of the control buttons. Possible values: `vertical`,`horizontal`

### Methods
Method Name | Description
------------|----------------
handleDone  | Callback function triggered when user presses done
handleClose | Callback function triggered when slider closes because of overlay click or skip button press



<h2 align="center">Example</h2>

You can run the example Expo-app by cloning the repo:


```sh
git clone https://github.com/dimitamp/react-intro-slider.git
cd react-intro-slider 
npm install
npm start 
```
