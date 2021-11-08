export function GiftcardPromoBox(props) {
    const {icon, name, value} = props;
    return (
        <div className="card-top-rc">
            <div className="card-top-rc-icon">
                <div>
                    <img style={{backgroundImage:`url(${icon})`}}/>
                </div>
            </div>
            <span className="card-top-rc-value">{value}</span>
            <div className="card-top-rc-name">{name}</div>
        </div>
    );
}
