import React, { Component } from 'react';
import kpoplogo from './r-kpop-icon.png';
import githublogo from './GitHub-Mark-120px-plus.png'
import { Card } from "@mui/material";

function Introduction() {
    return (<div>
        <Card className='intro-header' elevation='4'>
            <img className='kpoplogo' src={kpoplogo} display='inline' />
            <h1>Demystifying <a href="https://www.reddit.com/r/kpop/">r/kpop</a></h1>
        </Card>

        <Card className='description' elevation='4'>
            In the Korean Pop Music (<a href="https://en.wikipedia.org/wiki/K-pop">K-Pop</a>) community, there is constant debate between fans about the popularity of their favorite groups. Which are more popular? Which are less? Who gets talked about the most? How are they perceived by the those in the community at large?
            <br /><br />
            This multi-part project attempts to answer some of these questions by organizing and analyzing data from one of the largest gathering places of the K-Pop community on the internet: the subreddit r/kpop, home to over 1.7 million members.
            <br /><br />
            By downloading and parsing every post from the subreddit's inception on July 5th, 2009 to July 1st, 2022, certain trends in who K-Pop fans are talking about and how well it is being received begin to emerge. The end goal is then to take these trends and visualize them in a way that is interesting and easily accessible in an interactive web app.
            New statistics will be added over time.
            <br /><br />
            Begin by exploring the list of K-Pop groups on the left, or search for your favorite one!
        </Card>

        <Card className='github' elevation='4'>
            <img src={githublogo} /> <a href="https://github.com/swulsy/r-kpop-website">Repository for this Website</a><br />
            <img src={githublogo} /> <a href="https://github.com/swulsy/r-kpop-analysis">Repository for the Data Collection Behind It</a>
        </Card>

    </div>);
}

export default Introduction;