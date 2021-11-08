import { OfferCardBody } from './OfferCardBody';
import { OfferCardTop } from './OfferCardTop';

export function OfferCard(props) {
    const { top, body, details } = props;
    return (
        <div className="card-root">
            <OfferCardTop {...top} />
            <OfferCardBody {...body} />
            <div className="card-footer">
                <span>{details.opener_txt}</span>
            </div>
        </div>
    );
}
