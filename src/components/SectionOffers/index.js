import React from 'react';
import { OfferCard } from './OfferCard';

export default function SectionOffers(props) {
    const { section, section_id, title, subtitle, background, offers } = props;

    return (
        <section id={section_id} className={`block pricing-block bg-${background ?? 'gray'} outer`}>
            <div className="block-header inner-small">
                {title && <h2 className="block-title">{title}</h2>}
                {subtitle && <p className="block-subtitle">{subtitle}</p>}
            </div>
            {offers?.length && (
                <div className="inner">
                    <div className="grid">
                        {offers.map((offer, index) => (
                            <OfferCard key={index} {...offer} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
