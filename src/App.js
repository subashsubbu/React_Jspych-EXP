import React from 'react'
import { Experiment } from 'jspsych-react';
import { timelineFactory } from './timeline';
import callbackImageDisplay from './callbackImageKeyboardResponsePlugin';
import callbackHTMLDisplay from './callback_html_keyboard_response';



function App() {
    const callback = (targetID) => console.log(targetID);
    const timeline = timelineFactory(callback);
    return (
        <div>
            <Experiment
                settings={{ timeline: timeline }}
                plugins={{ callbackImageDisplay: callbackImageDisplay, callbackHTMLDisplay: callbackHTMLDisplay }}
            />

        </div>
    )
}
export default App

