import React, { Component } from 'react';
import BlogData from '../blog.json';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <h2 className="mainHeader">Blog Posts</h2>
                <div className='blogPostContainer'>
                    <div className="blogDescription">
                        <Link to="/blog1"><h2>Blog Post 1</h2></Link>
                        <span>Date Written: July 2, 2019</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <Link to="/blog1"><img src={require('../BlogPostImages/cat.jpeg')} class="blogImg"/></Link>
                </div>
                <div className='blogPostContainer'>
                    <div className="blogDescription">
                        <Link to="/blog2"><h2>Blog Post 2</h2></Link>
                        <span>Date Written: July 6, 2019</span>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <Link to="/blog2"><img src={require('../BlogPostImages/dog.jpeg')} class="blogImg"/></Link>
                </div>
                <div className='blogPostContainer'>
                    <div className="blogDescription">
                        <Link to="/blog3"><h2>Blog Post 3</h2></Link>
                        <span>Date Written: July 19, 2019</span>
                        <p>Habemus invidunt probatus ei eos, ut luptatum qualisque has, ex soleat ullamcorper duo. Mea ut intellegat definitiones. Sed in brute detracto assueverit, no nam everti blandit. Ne ferri brute ocurreret mel. Id qui omnium vidisse constituam.</p>
                    </div>
                    <Link to="/blog3"><img src={require('../BlogPostImages/cow.jpeg')} class="blogImg"/></Link>
                </div>
                
            </div>
        );
    }
}

export default Main;