import React from 'react';
import { WebContext } from '../App';
const Blogs = () => {
    return (
        <WebContext.Consumer>
        {
            (sitename) => {
                return (
                    <div className="text-center">
                        <h1>Blog</h1>
                        <p>Read all latest technology blogs from {sitename}</p>
                    </div>
                );
            }
        }
        
        </WebContext.Consumer>
    );
}

export default Blogs;