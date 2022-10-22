import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
    return (
        <div id='header-wrap'>
            <a href='#' id='header-left'>オンラインカタログはこちら</a>
            
            <div id='header-right' className='mr10'>
                <div><a href='#' className='header-contents'>＞Do! earth & green について</a></div>
                <div><a href='#' className='header-contents'>＞ショールームのご案内</a></div>
                <div><a href='#' className='header-contents'>＞お問い合わせ</a></div>
            </div>
        </div>
    );
}

export default Header;

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}