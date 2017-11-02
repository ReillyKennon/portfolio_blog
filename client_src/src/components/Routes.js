import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from './Posts';
import About from './About';
import PostDetail from './PostDetail';
import WritePost from './WritePost';
import EditEntry from './EditEntry';
import Music from './Music';
import Projects from './Projects';

const Routes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ Posts } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/music' component={ Music } />
            <Route exact path='/projects' component={ Projects } />
            <Route exact path='/posts/write' component={ WritePost } />
            <Route exact path='/posts/edit/:id' component={ EditEntry } />
            <Route exact path='/posts/:id' component={ PostDetail } />
        </Switch>
    </main>
)

export default Routes;
