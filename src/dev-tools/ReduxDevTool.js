import React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import DockMonitor from 'redux-devtools-dock-monitor';
import DiffMonitor from 'redux-devtools-diff-monitor';
import SliderMonitor from 'redux-slider-monitor';

// createDevTools takes a monitor and produces a DevTools component
const ReduxDevTool = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h"
                 changePositionKey="ctrl-q"
                 changeMonitorKey="ctrl-m"
                 defaultIsVisible={false}>
        <DiffMonitor theme="tomorrow" />
        <SliderMonitor theme="tomorrow" />
    </DockMonitor>
);

export default ReduxDevTool;