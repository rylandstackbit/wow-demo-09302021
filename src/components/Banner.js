import React from 'react';

export default function Banner(props) {
    const headline = (props.headline);
    
    return (
        <div>
            <p>{headline}</p>
        </div>
    );
}
