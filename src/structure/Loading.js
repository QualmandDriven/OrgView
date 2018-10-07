import React from 'react';

import { getAppIcon } from '../apiCalls';

function Loading(props) {
    return (
        <div>
            <img src={getAppIcon()} className="App-logo" alt="logo" /> Loading...
        </div>
    );
}

export default Loading;