import React from 'react';
import "./Nav.css";
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Nav = ({songLibraryStatus, setSongLibraryStatus}) => {
    return (
        <div className="nav">
            <h1>CM Radio</h1>
            <LibraryMusicIcon onClick={() => setSongLibraryStatus(!songLibraryStatus)} className="library-toggle" />
        </div>
    );
}

export default Nav;
