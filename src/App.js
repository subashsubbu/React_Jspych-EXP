import React from 'react'
import { Experiment } from 'jspsych-react';
import { timelineFactory } from './timeline';
import callbackImageKeyboardResponsePlugin from './callbackImageKeyboardResponsePlugin';



function App() {
    const callback = (targetID) => console.log(targetID);
    const timeline = timelineFactory(callback);
    return (
        <div>
            <Experiment
                settings={{ timeline }}
                plugins={{ callbackImageKeyboardResponsePlugin }}
            />

        </div>
    )
}
export default App

