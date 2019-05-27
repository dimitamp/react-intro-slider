<h1 align="center">react-intro-slider</h1>

<p align="center">Easy-to-use yet very configurable app introduction slider</p>

```sh
npm i react-intro-slider --save
```
| | |
|-|-|
![Slider With Vertical Controller gif](images/Vertical-Controller.gif) | ![Slider with Horizontal Controller gif](images/Horizontal-Controller.gif)

## Table of contents
  * [Props and options](#props-and-options)
  * [Example](#example)
 

<h2 align="center">Props and options</h2>

### Configure looks

Name                  | Type       | Default                   | Description
----------------------|------------|---------------------------|--------------
size                  | `string`   | `small`                   | Size of slider. Possible values: `small`, `medium`,`large`,`fullscreen`
titleStyle            | `string`   | `null`                    | Styling for slide title
imageStyle            | `string`   | `null`                    | Styling for slide image
descriptionStyle      | `string`   | `null`                    | Styling for slide description
skipButtonStyle       | `style`    | `null`                    | Styling for skip button
nextButtonStyle       | `style`    | `null`                    | Styling for next button
controllerOrientation | `string`   | `vertical`                | Orientation of the control buttons. Possible values: `vertical`,`horizontal`
controllerIconStyle   | `style`    | `null`                    | Style of pagination dots


### Configure behavior

Name             | Type       | Default                   | Description
-----------------|------------|---------------------------|--------------
slides           | `array`    | No default, required      | An array of objects 
skipButton       | `boolean`  | `false`                   | Enable to show a skip button to the left of pagination dots 
nextButton       | `boolean`  | `true`                    | Disable to hide the next button

### Methods
Method Name | Description
------------|----------------
handleDone  | Callback function triggered when user presses done



<h2 align="center">Example</h2>

You can run the example Expo-app by cloning the repo:


```sh
git clone https://github.com/dimitamp/react-intro-slider.git
cd react-native-intro-slider 
npm install
npm start 
```
