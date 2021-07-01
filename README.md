# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#npm start

-> We tried to create a experiment using "jspsych" (https://www.jspsych.org) in the form of timeline and uses plugins to define what to do at each point on the timeline. In this experiment we have displayed random set of images from the Open Affective Standardized Image Set (OASIS) (WARNING: explicit content) in every fraction of seconds and are limited what number of images we have set.

-> When you do npm start you will. small question mark sign(it shoud have displayed instructions) and press any key for second step. Second step is slideshow of images that we have in the static folder but now it displays just a black screen.

-> Errors are currently displayed at console with related to plugins. E.g.
  - No plugin loaded for trials of type "[object Object]"( this appears after npm start)
  - TypeError: undefined is not an object (evaluating 'a.plugins[e.type].info') ( this appears after you press any key in second step)
