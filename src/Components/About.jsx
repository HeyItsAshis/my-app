import React from 'react';
import { WebContext, SettingsContext } from '../App';
const About = () => {
    return (
        <div className="text-center">
            <h1>About</h1>
            <WebContext.Consumer>
            {
                (sitename) =>{
                    return (
                        <SettingsContext.Consumer>
                            {
                                (settingsObject) => {
                                    return (<p>Read all about {sitename} official website. This site is loaded using font {settingsObject.font}</p>)
                                }
                            }
                        </SettingsContext.Consumer>
                    )
                }
            }
            </WebContext.Consumer>
        </div>
    );
}

export default About;