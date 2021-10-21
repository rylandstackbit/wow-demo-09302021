import React from 'react';

export default function Banner(props) {
    const headline = (props.section_headline);
    
    return (
        <div>
            <p>{headline}</p>
        </div>
    );
}
