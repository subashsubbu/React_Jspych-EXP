import React from 'react'
import { Experiment } from 'jspsych-react';
import { timelineFactory } from './timeline';
// import { callbackHTMLDisplay, callbackImageDisplay } from "./plugins";
import callbackHTMLDisplay from './plugins/callbackHTMLDisplay';
import callbackImageDisplay from './plugins/callbackImageDisplay';


function App() {
    const callback = (targetID) => console.log(targetID);
    const timeline = timelineFactory(callback);
    return (
        <div>
            <Experiment
                settings={{ timeline: timeline }}
                plugins={{
                    "callbackHTMLDisplay": callbackHTMLDisplay,
                    "callbackImageDisplay": callbackImageDisplay
                }}
            />

        </div>
    )
}
export default App

