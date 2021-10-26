import React from 'react';

export default function Banner(props) {
    const headline = (props.section.headline);
    const actionButton = (props.section.actionButton)
    return (
        <div>
            <p>{headline}</p>
        </div>
    );
}
