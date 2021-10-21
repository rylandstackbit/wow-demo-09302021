import React from 'react';

export default function Banner(props) {
    const headline = _.get(props, 'headline');
    
    return (
        <div>
            {headline}
        </div>
    );
}
