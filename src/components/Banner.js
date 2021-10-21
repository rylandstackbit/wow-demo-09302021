import React from 'react';

export default function Banner(props) {
    const headline = .get(props.headline);
    
    return (
        <div>
            {headline}
        </div>
    );
}
