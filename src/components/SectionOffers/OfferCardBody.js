function Addons(props) {
    const { header, list } = props;
    return (
        <div className="card-body-addons">
            <h4>{header}</h4>
            <div className="card-body-addons-list">
                <ul>
                    {list.map((addon, index) => (
                        <li key={index}>{addon}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Features(props) {
    const { header, list } = props;
    return (
        <div className="card-body-features">
            <h4>{header}</h4>
            <div className="card-body-features-list">
                {list.map((feat, index) => (
                    <ul key={index}>
                        <li>
                            <strong>{feat}</strong>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

function Services(props) {
    const { services } = props;
    return (
        <div className="card-body-services">
            {services.map((service, index) => (
                <img src={service} alt="Service Img" key={index} />
            ))}
        </div>
    );
}

export function OfferCardBody(props) {
    const { features, addons, services } = props;
    return (
        <div className="card-body">
            <Features {...features}/>
            <Addons {...addons} />
            <Services services={services} />
        </div>
    );
}
