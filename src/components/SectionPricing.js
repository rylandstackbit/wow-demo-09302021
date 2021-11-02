import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import CtaButtons from './CtaButtons';
import classNames from '../utils/classNames';

export default function SectionPricing(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const background = _.get(section, 'background', 'gray');
    const title = _.get(section, 'title');
    const subtitle = _.get(section, 'subtitle');
    const pricingPlans = _.get(section, 'pricing_plans');

    return (
        <section id={sectionId} className={`block pricing-block bg-${background} outer`}>
            <div className="block-header inner-small">
                {title && <h2 className="block-title">{title}</h2>}
                {subtitle && <p className="block-subtitle">{subtitle}</p>}
            </div>
            {pricingPlans && (
                <div className="inner">
                    <div className="grid">
                        {_.map(pricingPlans, (plan, index) => (
                            <PricingPlan key={index} {...plan} />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

function PricingPlan(plan) {
    const highlight = _.get(plan, 'highlight');
    const title = _.get(plan, 'title');
    const subtitle = _.get(plan, 'subtitle');
    const price = _.get(plan, 'price');
    const details = _.get(plan, 'details');
    const actions = _.get(plan, 'actions');
    return(
        <div class="card-container">
				<div class="card-wrapper">
											<div class="special-offer">
							<span class="offer-details"></span>
						</div>
										<div class="card-div">
						<div class="card-top">
							<div class="card-top-social">
								<div class="card-social-wrapper">
																												<div class="optIconText animated">
											<div class="avatar">
												<img height="100" width="100" alt="" class="replay" src="https://www.wowway.com/themes/custom/wowway/images/100.gif">
												<div class="copy">
													<span class="copy_Internet-up-to">
														Internet<br>
														up to
													</span><br>
													<span class="copy_speed">100</span><br>
													<span class="copy_unit">Mbps</span>
												</div>
											</div>
										</div>
																	</div>
							</div>
							<div class="top-info-detail-link"></div>
							<div class="card-pricing">
								<div class="main-price">
									<span class="dollar">$19</span>
									<div class="details">
										<span class="cent">99</span>
									</div>
								</div>
								<div class="disclaimer">
									<p>*With enrollment in AutoPay &amp; paperless billing. Equipment &amp; speed availability vary by area. Additional charges of up to $50 for data allowance overages.</p>

								</div>
							</div>

															<div class="gift-card-container">
																	</div>
							
															<button type="button" class="btn btn--blue offer-button" style="width:100%;" data-bundle="282" data-ol-has-click-handler="" tabindex="0">
																			<a href="https://sales.wowway.com" onclick="window.dataLayer = window.dataLayer || []; window.dataLayer.push({'event': 'ctaClick', 'ctaInfo': {'page': 'home', 'location':'offer card | upper', 'text':'Check Availability',}});" tabindex="0">Check Availability</a>
																	</button>
													<div class="chat-link" data-ol-has-click-handler="">Chat with a live person</div></div>
						<div class="card-body__wrapper">
							<div class="card-body features">
								<h4>Offer includes:</h4>
								
            <div class="clearfix text-formatted field field--name-field-field-internet-inc-list field--type-text-long field--label-hidden field__item"><ul>
	<li><span class="text_color-blue--persian"><strong>First-Month Free</strong></span></li>
</ul>

<ul>
	<li><span class="text_color-blue--persian"><strong>$20 Off for 24 Months on Regular Rate of $39.99</strong></span></li>
</ul>

<ul>
	<li><strong><span class="text_color-blue--persian">Free Modem Rental for 24 Months</span></strong></li>
</ul>

<ul>
	<li><strong><span class="text_color-blue--persian">Free Self-Install Kit</span></strong></li>
</ul>

<ul>
	<li><strong><span class="text_color-blue--persian">No Contracts</span></strong></li>
</ul>

<ul>
	<li><strong><span class="text_color-blue--persian">30-Day Money-Back Guarantee</span></strong></li>
</ul>

<ul>
	<li><strong><span class="text_color-blue--persian">Data Allowance up to 1.5TB per month</span></strong></li>
</ul>

<ul>
	<li class="text_color-white" span="">-</li>
</ul>
</div>
      
							</div>
							<div class="card-body add-ons">
								<h4>Add-ons:
								</h4>
								
            <div class="clearfix text-formatted field field--name-field-field-internet-add-on-list field--type-text-long field--label-hidden field__item"><ul>
	<li>Whole-Home WiFi for $9.99/month</li>
	<li>Home Phone for $9.99/month</li>
	<li>Service Protection Plan for $5/month</li>
	<li>Internet equipment</li>
	<li><span>Any of the following Streaming TV subscriptions: </span></li>
</ul></div>
      
							</div>
							<div class="card-services">
																	<img class="service-icon" src="/themes/custom/wowway/css/icons/youtubetv.svg" width="69" height="19" alt="Youtube TV" title="Youtube TV" loading="lazy" typeof="foaf:Image">

																	<img class="service-icon" src="/themes/custom/wowway/css/icons/fubotv.svg" width="51" height="24" alt="Fubo" title="Fubo" loading="lazy" typeof="foaf:Image">

																	<img class="service-icon" src="/themes/custom/wowway/css/icons/sling.svg" width="49" height="26" alt="Sling" title="Sling" loading="lazy" typeof="foaf:Image">

																	<img class="service-icon" src="/themes/custom/wowway/css/icons/philo.svg" width="46" height="26" alt="Philo" title="Philo" loading="lazy" typeof="foaf:Image">

															</div>
						</div>
						<div class="card-dropdown" data-ol-has-click-handler="">
							<span>View Details</span>
						</div>
						<div class="card-details details-expand card-dropdown--details-wrapper">
							<div class="details-container">
								<div class="details">
									<p><strong><span>Internet</span></strong></p>

<ul>
	<li>Up to 100Mbps Internet</li>
	<li>Upload speeds up to 10 Mbps</li>
</ul>
																			<div class="cta">
											<button type="button" class="btn hero__button--orange offer-button" data-bundle="282" data-ol-has-click-handler="" tabindex="0">
																									<a href="https://sales.wowway.com" onclick="window.dataLayer = window.dataLayer || []; window.dataLayer.push({'event': 'ctaClick', 'ctaInfo': {'page': 'home', 'location':'offer card | lower', 'text':'Check Availability',}});" tabindex="0">Check Availability</a>
																							</button>
										</div>
																		<div class="toggleDetailsView additional-details-button" data-ol-has-click-handler="">
										<span class="header">Additional Details
											<i class="offer-card-icon fas fa-caret-down" style="font-size: 26px;" aria-hidden="true"></i>
										</span>
									</div>
									<div class="additional-details-text-div">
										<div class="details-expand details--additional">
											<span class="text"><p><span><strong>Availability</strong></span></p>

<p><span>Limited time offer available to qualifying new residential, serviceable customers. All offers, prices and services subject to change.&nbsp;</span></p>

<p><span><strong>Service Terms and Policies</strong></span></p>

<p><span>All services are subject to terms and conditions and use policies, which you must accept in order to use the service. Before using the service, you should carefully review WOW!’s acceptable use, network management, copyright and other policies adopted by WOW!, as well as the terms and conditions of subscription (the “Terms”). The current Terms are available for your review online by simply clicking on the Terms &amp; Conditions section of the WOW! website. By establishing an account, installing, activating or using the service, or otherwise indicating your agreement to the Terms or intention to use the service, you agree to be bound by the Terms</span></p>

<p><span><strong>Pricing</strong> </span></p>

<p><span>Offer expires November 2, 2021. Limited time offer available to new qualified residential, serviceable customers. $19.99/mo rate for Internet 100 (download wired speeds up to 100Mbps and upload wired speeds up to 10Mbps) requires enrollment in AutoPay and paperless billing. Rate without AutoPay discount will be $24.99/mo, which is subject to change. After 24 months, rate will adjust to regular rate (currently $39.99/mo or $44.99/mo without AutoPay), which is subject to change.</span></p>

<p><span><strong>Monthly Data Usage Allowances</strong></span></p>

<p><span>In some service areas, WOW! may offer usage-based Internet service packages, under which you will be charged additional fees once you consume a specified amount of data. WOW! may also offer Internet service packages that apply monthly data consumption thresholds. If you subscribe to an Internet service package with specified data limits and you exceed those limits, WOW! reserves the right to: (i) suspend, terminate or limit your service; (ii) require that you subscribe to a different service level or package that is more suitable to your data usage; and/or (iii) impose additional fees for use beyond the agreed-upon data usage limits. </span></p>

<p><span>Even if you subscribe to a plan without a specified data consumption limit, excessive or sustained bandwidth consumption may burden the network (in ways inconsistent with shared use of the network and services) and such usage may be limited or restricted by WOW!. The WOW! network for the provision of BIAS is designed for typical usage by a typical residential or small business computer user. Because we seek to provide the Service at a reasonable cost to the largest number of users, the use of our network is subject to certain general usage limitations. Users must ensure their activity does not improperly restrict, inhibit, or degrade any other user's use of the Service, nor represent (in the sole but reasonable judgment of WOW!) an unusually large burden on the network itself. In addition, users must ensure that their activity does not improperly restrict, inhibit, disrupt, degrade or impede WOW!'s ability to deliver the Service to others and monitor the Services, backbone, network nodes, and/or other network services.</span></p>

<p><span><strong>Whole-Home WiFi Add-on Pricing</strong> </span></p>

<p><span>The Whole-Home WiFi Package includes two eero WiFi devices. Depending upon home size and other factors, additional eero WiFi devices may be required at $5.99/mo each. Whole-Home WiFi requires wireless modem for $14/mo from WOW! or compatible customer-owned modem. Whole-Home WiFi services may not work as described if compatibility requirements have not been met or equipment is not properly placed in the home to achieve complete coverage. All Whole-Home WiFi eero equipment must be returned by customer if WOW! Whole-Home WiFi service is disconnected for any reason.&nbsp;</span></p>

<p><span><strong>eero Secure and Secure+</strong> </span></p>

<p><span>eero Secure and Secure+ service is available through WOW! to Whole-Home WiFi customers. The product is provided by a third party not affiliated with WOW! and is subject to its own terms, conditions and policies. WOW! is not responsible for your access to or use of such third-party products and services, their content, features, pricing, equipment requirements, terms and policies, or any other aspect of the third-party product or service. WOW!’s provision of links or other direct access to such a third-party service provider does not imply affiliation with the provider, even if the product or service is billed to you by WOW! on behalf of the third party.</span></p>

<p><span><strong>Home Phone Add-on Pricing</strong> </span></p>

<p><span>WOW! Home Phone service provides one line of service for $9.99 per month. WOW!’s broadband enabled phone service (including access to 911) may not be available if you lose power or your broadband connection. Home Phone is sold with 100 Minutes of long distance for all domestic long distance calls including calls to Canada. A per minute long distance rate applies once the 100 minutes is reached</span></p>

<p><span><strong>Robocall Blocking</strong> </span></p>

<p><span>The Robocall Blocking feature automatically blocks calls that are deemed fraudulent, solicitous or SPAM, before they reach your Home Phone or Home Phone Plus services. If you do not want Robocall Blocking enabled with your service, please call us and we will be happy to assist you. For more information on Robocall Blocking, go to the support menu on our website, select Phone and enter "Robocall" in the search bar.</span></p>

<p><span><strong>Discounts</strong> </span></p>

<p><span>Offers not valid with any other discount unless expressly approved in writing by WOW!. Offers and services subject to change without notice.&nbsp;</span></p>

<p><span><strong>Money-Back Guarantee</strong> </span></p>

<p><span>For eligibility and terms of money-back guarantee, view WOW! Terms and Conditions.</span></p>

<p><span><strong>Taxes &amp; Fees Limitations</strong> </span></p>

<p><span>Prices and price guarantees exclude taxes, fees and other charges (e.g., equipment, installation, service call, usage-based or separately billed charges, and cost recovery fees like the sports surcharge and broadcast TV fee). Offers and services, along with rates, equipment pricing, taxes, fees and other charges, subject to change.&nbsp;</span></p>

<p><span><strong>AutoPay and Paperless Billing</strong> </span></p>

<p><span>Offer requires that you enroll in AutoPay and paperless billing. Failure to enroll in AutoPay will increase your monthly rate by $5. Failure to enroll in paperless billing (so that you receive paper statements) will result in a $2 per month Paper Statement Fee, but you may sign up for Paperless Statements within 3 months of installation after enrollment to not incur this fee. Fees are subject to change without notice.&nbsp;</span></p>

<p><span><strong>Self-Installation of Services</strong></span></p>

<p><span>If you have agreed to self-install equipment to be used in connection with WOW! services, you further agree that: (A) you will adhere to the self-installation requirements specified by WOW!, which will be provided to you, at WOW!’s discretion: (i) as written instructions included as part of the self-installation kit provided to Customer; and/or (ii) within an online, an email or other communication by WOW! to you. In this connection, you agree that WOW! may require that you provide to WOW! a valid email address (to receive communications from WOW!, including the self-installation instructions) and/or provide a telephone number so that a WOW! technician may assist in the installation process; and/or (iii) on WOW!’s website; and (B) WOW! has no responsibility for the condition, operation, functioning, compatibility, repair, maintenance or any other aspect of the equipment provided by you or others. You will be responsible for your customer provided equipment and any damages (to WOW! equipment, customer equipment or otherwise) that may be caused by you or otherwise result from your failure to adhere to the self-installation instructions; and (C) billing will begin when service is connected by WOW!, whether or not you have installed and activated the Service; and (D) your use of WOW! services is subject to WOW!’s terms of subscription, and acceptable use, network management and other policies that WOW! has implemented in connection with the services; and (E) installation and/or activation fees may apply. If you are unable for any reason to successfully install your equipment, please contact us and we will assist you in your installation, which may require an additional installation charge.</span></p>

<p><span><strong>Modem Requirement</strong> </span></p>

<p><span>Modem available from WOW! for lease at $14.00 per month. Free modem lease offer expires November 2, 2021. Regular rate of $14.00 per month after 24 month period. Certain WiFi services offered by WOW! requires wireless modem for $14/mo from WOW! or compatible customer-owned modem.</span></p>

<p><span><strong>Internet Speed Limitations</strong> </span></p>

<p><span>Internet speed reflects wired speeds that are provisioned up to the speed indicated. Internet speeds are not guaranteed and may vary by your equipment, number of users/devices and other factors outside of WOW!’s control. WiFi connection speeds are also subject to limitation of WiFi network protocols (currently up to roughly 650Mbps) and the capability of the device on the network. Internet use and speeds subject to WOW's! acceptable use and network management practices and may be restricted when network usage is heavy or otherwise exceeds normal use. 1 Gig is not available in some areas.&nbsp;</span></p>

<p><span><strong>Streaming TV </strong> </span></p>

<p><span>If you use your WOW! Internet service to access video programming or other content (“Streaming TV”), you agree and understand that Streaming TV providers are third parties not affiliated with WOW!, and may require additional subscription and/or payments to access, and may be subject to their own terms, conditions and policies. You understand and agree that WOW! is not responsible for your access to or use of such third-party Streaming Services, including their subscription or payment requirements, their content, terms and policies, or any other aspect of the third party Streaming TV, or for the use, storage or disclosure of information that you provide to a such a third party. You assume all risks associated with such third party Streaming TV.&nbsp;</span></p>

<p><span><strong>Phone Service Availability Limitation</strong> </span></p>

<p><span>Unless you provide backup battery power, WOW!’s broadband enabled phone service (including access to 911) may not be available if you lose power or your broadband connection. For certain WOW! phone service modems, new residential customers may purchase a battery backup from WOW!, which will provide power to the WOW! modem for a limited period of time in the event of a power outage. Home Phone is sold with 100 minutes of long distance plan for all domestic long distance calls including calls to Canada. A per minute long distance rate applies once the 100 minutes is reached.&nbsp;</span></p>

<p><span>Other terms and restrictions apply. See <a href="https://www.wowway.com/disclaimer" tabindex="0">WOW!’s terms and conditions</a> or call WOW! for further information regarding services and offers. If you contact us and provide us with a phone number or email address, you agree that we may call, text or email you, which might include autodialed calls and texts, and/or pre-recorded or artificial voice messages.</span></p></span>
											<br>
											<div class="cta">
												<button type="button" class="btn btn--orange offer-button" data-bundle="282" data-ol-has-click-handler="" tabindex="0">
																											<a href="https://sales.wowway.com" onclick="window.dataLayer = window.dataLayer || []; window.dataLayer.push({'event': 'ctaClick', 'ctaInfo': {'page': 'home', 'location':'offer card | lower', 'text':'Check Availability',}});" tabindex="0">Check Availability</a>
																									</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
    return (
        <div className="cell plan">
            <div className={classNames('card', { highlight: highlight })}>
                <div className="plan-header">
                    {title && <h1 className="plan-title">{title}</h1>}
                    {subtitle && <div className="plan-subtitle">{subtitle}</div>}
                    {price && <div className="plan-price">{price}</div>}
                </div>
                {details && (
                    <div className="plan-content">
                        <ReactMarkdown>{details}</ReactMarkdown>
                    </div>
                )}
                {actions && (
                    <div className="plan-footer block-buttons">
                        <CtaButtons actions={actions} />
                    </div>
                )}
            </div>
        </div>
    );
}
