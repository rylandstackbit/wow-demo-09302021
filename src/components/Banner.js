import React from 'react';

import Action from './Action';

export default function Banner(props) {
    const headline = (props.section.headline);
    const actionButton = (props.section.action);
    return (
        <div>
            <p>{headline}
            <Action key={idx} action={actionButton} />
            </p>
        </div>
    );
}
