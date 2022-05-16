import React from 'react';
import { myContext,location } from './index.js';
const C = () => {
    return (
        <div>
            <myContext.Consumer>
                {
                    (college)=>{
                        return (
                            <location.Consumer>
                                {
                                    (loc)=>{
                                         return <h3>my college name {college} and location {loc}</h3>
                                    }
                                }
                            </location.Consumer>
                        )
                    }
                }
            </myContext.Consumer>
        </div>
    );
};

export default C;