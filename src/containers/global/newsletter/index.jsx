import React from "react";
import Newsletter from "../../../components/newsletter";
import SectionTitle from "../../../components/section-title";

const NewsletterArea = () => {
    return (
        <div className="news-letter-section section-pb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xl-6 mx-auto">
                        <SectionTitle
                            classOption="title-section mb-10 text-center"
                            subTitle="NEWSLETTER"
                            title="Iscriviti alla <span class='text-primary'>Newsletter</span> 
                            <br class='d-none d-xl-block' />Scopri le novità..."
                        />
                    </div>
                    <div className="col-xl-8 col-lg-10 mx-auto">
                        <Newsletter mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterArea;
