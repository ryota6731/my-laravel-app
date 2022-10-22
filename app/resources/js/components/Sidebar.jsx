import React from 'react';
import ReactDOM from 'react-dom';

function Sidebar() {
    return (
        <div id='sidebar-wrap'>
            <div><img id='icon' className='mt20' src="{{ asset('images/tibetto.jpg') }}" /></div>
            <div id='introduce'>
                <h1>サービスのご案内</h1>
                <p>はじめての方へ</p>
            </div>
        </div>
    );
}

export default Sidebar;

if (document.getElementById('sidebar')) {
    ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
}