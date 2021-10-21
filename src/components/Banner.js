import React from 'react';

export default function Banner(props) {
    const action = _.get(props, 'action');
    
    if (newWindow) {
        attrs.target = '_blank';
    }
    if (newWindow || noFollow) {
        attrs.rel = [(newWindow ? 'noopener' : '') + (noFollow ? 'nofollow' : '')].join(' ');
    }

    return (
        <Link
            href={withPrefix(url)}
            {...attrs}
            className={classNames({
                button: actionStyle === 'primary' || actionStyle === 'secondary',
                secondary: actionStyle === 'secondary',
                'has-icon': !!actionIcon
            })}
        >
            {actionIcon && <Icon icon={actionIcon} />}
            <span className={classNames({ 'order-first': actionIconPos === 'right' })}>{label}</span>
        </Link>
    );
}
