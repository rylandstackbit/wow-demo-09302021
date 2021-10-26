import React from 'react';

export default function Banner(props) {
    const headline = (props.section.headline);
    const actionButton = (props.section.action)
    return (
        <div>
            <p>{headline}</p>
        </div>
    );
}
