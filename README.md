# ngGoogleMaps

Simplest Angular directive for Google Maps offering following features:

  - Road maps
  - Markers with customizable icons and event handlers
  - InfoWindow
  - Directions and waypoints

## Installation
#### Via npm
```sh
$ npm install ng-google-maps --save
```
#### Via bower
```sh
$ bower install ng-google-maps --save
```
#### Getting started
Include the module's script file in your HTML page
```html
<script defer src="https://maps.googleapis.com/maps/api/js?key=[YOUR_GOOGLE_MAPS_API_KEY]"></script>
<script src="bower_components/ngGoogleMaps/dist/ng-google-maps.min.js"></script>
```
Inject the module as a dependency into your main Angular module as below:
```javascript
angular.module('myApp', ['ngGoogleMaps']);
```
#### Directive
Now you can use the the Google Maps directive to display the basic google map in you web page as following:

HTML Example
```html
<ng-google-maps id="maps"></ng-google-maps>
```

CSS Example
```css
#maps {
    width: 100%;
    height: 400px;
}
```
