import { ButtonsMap } from '../Buttons';
import { GiftcardPromoBox } from '../PromoBoxes/Giftcard';
export function OfferCardTop(props) {
    const { disclaimer, promos, buttons, speed, price, image } = props;
    return (
        <div className="card-top">
            <div className="card-top-header">
                <img height="100" width="100" alt="" class="replay" src={image} />
                <div className="card-top-header-speed">
                    <span>
                        Internet
                        <br />
                        up to
                    </span>
                    <br />
                    <span className="card-top-header-speed-value ">{speed}</span>
                    <br />
                    <span>Mbps</span>
                </div>
            </div>
            <div className="card-top-price">
                {/* ${(speed * 19) / 100} */}
                {/* <span className="card-top-price-minor">99</span> */}
                {price}
            </div>
            <div className="card-top-disclaimer ">
                <p>{disclaimer}</p>
            </div>

            {promos?.filter((promo) => promo.type === 'giftcard').length ? (
                <>
                    {promos
                        ?.filter((promo) => promo.type === 'giftcard')
                        .map((promo) => (
                            <GiftcardPromoBox {...promo} />
                        ))}
                </>
            ) : (
                <div className="card-top-rc-ghost" />
            )}
            {buttons.map((button) => {
                const ResolvedButton = ButtonsMap[button.type];
                return <ResolvedButton {...button} />;
            })}
        </div>
    );
}
