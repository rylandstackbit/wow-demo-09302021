import React from 'react';

export default function Banner(props) {
    const action = _.get(props, 'action');
    const url = _.get(action, 'url');
    const label = _.get(action, 'label');
    const actionStyle = _.get(action, 'style', 'link');
    const actionIcon = _.get(action, 'icon');
    const actionIconPos = _.get(action, 'icon_position', 'left');
    const newWindow = _.get(action, 'new_window');
    const noFollow = _.get(action, 'no_follow');
    const attrs = {};
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
