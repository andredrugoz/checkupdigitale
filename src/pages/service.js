import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TeamContainer from "../containers/global/team";
import TestimonialReverse from "../containers/global/testimonial-reverse";
import ServiceListContainer from "../containers/service/service-list";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ServicePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="CheckoutDigitale – Service" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Servizi"
                        excerpt="Elenchiamo i nostri servizi per presentare il nostro metodo di lavoro, contattaci per avere più informazioni"
                        image="./images/service/2.png"
                    />
                    <ServiceListContainer />
                    {/* <TestimonialReverse /> */}
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    <TeamContainer classOption="null" />
                    {/* <BrandContainer /> */}
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ServicePage;
