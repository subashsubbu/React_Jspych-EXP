import { jsPsych } from 'jspsych-react'
//import callbackImageKeyboardResponsePlugin from "./callbackImageKeyboardResponsePlugin.js"


const post_trial_gap = function () {
  return Math.floor(Math.random() * jitter) + iti;
};
const stim_duration = 200;
const iti = 300;
const jitter = 200;
//const plugin_name = callbackImageKeyboardResponsePlugin;

export function timelineFactory(callback) {
  const start_callback = function () {
    callback('start')
  };
  const stop_callback = function () {
    callback('stop')
  };
  let targets = [];
  var imageNumber;
  var fileName;
  var toPush;
  for (var i = 0; i < 10; i++) {
    imageNumber = Math.floor(Math.random() * (901 - 1) + 1);
    if (imageNumber <= 9) {
      fileName = "static/00000" + imageNumber + ".jpg";
      toPush = { 'stimulus': fileName };
    }
    else if (imageNumber > 9 && imageNumber <= 99) {
      fileName = "static/0000" + imageNumber + ".jpg";
      toPush = { 'stimulus': fileName };
    }
    else {
      fileName = "static/000" + imageNumber + ".jpg";
      toPush = { 'stimulus': fileName };
    }
    if (targets.includes(toPush)) {
      i -= 1;
    }
    targets.push(toPush);
  }
  // Create timeline
  const timeline = [];
  const welcome_block = {
    type: 'callbackImageKeyboardResponsePlugin',
    stimulus: "In this exercise, you will be shown a series of quickly moving pictures. In between each picture, you will see a <strong>+</strong>. Please focus on this when there is not an image on the screen. This exercise contains imagery that some may find disturbing. User beware. Press any key to begin.",
    post_trial_gap: 5000,
    on_start: start_callback
  };
  timeline.push(welcome_block);
  
  const test_trials = {
    stimulus: 'stimulus',
    type: 'callbackImageKeyboardResponsePlugin',
    timeline: targets,
    trial_duration: function () {
      return jsPsych.randomization.sampleWithoutReplacement([250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750], 1)[0];
    },
    stimulus_duration: stim_duration,
    post_trial_gap: post_trial_gap(),
    on_start: function () {
      console.log(this)
    }
  };
  timeline.push(test_trials);

  const end_block = {
    type: 'callbackImageKeyboardResponsePlugin',
    stimulus: "Thanks for participating!",
    post_trial_gap: 500,
    on_start: stop_callback
  };
  timeline.push(end_block);
  return timeline;
}





