import React from 'react';
import Gif from './Gif';

const Content = ({gifs}) => {
    return (
        <div className="container">

            <div className="row text-center">
            {
                gifs.map((gif,i) => <Gif key={i} image={gif.image} title={gif.title}/>)
            }
               
            </div>

        </div>
    );
    
}


export default Content;
