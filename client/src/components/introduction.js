import React, { Component } from 'react';
import logo from './r-kpop-icon.png';

function Introduction() {
    return (<div>
        <div className='intro-title'>
            <img className='image' src={logo} display='inline' />
            <h1>Demystifying r/kpop</h1>
        </div>

        In the K-Pop community, there is constant debate between fans about the popularity of their favorite groups. Which are more popular? Less? Who gets talked about the most? How are they perceived by the those in the community at large?
        <br /><br />
        This multi-part project attempts to answer some of these questions by organizing and analyzing data from one of the largest gathering places of the K-Pop community on the internet: the subreddit r/kpop, home to over 1.7 million members.
        <br /><br />
        By downloading and parsing every post from the subreddit's inception on July 5th, 2009 to July 1st, 2022, certain trends in who K-Pop fans are talking about and how well it is being received begin to emerge. The end goal is then to take these trends and visualize them in a way that is interesting and easily accessible in an interactive web app.
    </div>);
}

export default Introduction;