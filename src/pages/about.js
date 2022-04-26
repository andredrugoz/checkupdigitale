import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ServiceListContainer from "../containers/service/service-list";
import IconBoxContainer from "../containers/global/icon-box";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TeamContainer from "../containers/global/team";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="CheckoutDigitale – Chi siamo" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Chi siamo"
                        excerpt="Scopri le incredibili qualità di checkup digitale e il suo team"
                        image="./images/banner/1.png"
                    />
                    <IconBoxContainer classOption="section-pt" />
                    <TeamContainer classOption="section-pt" />

                    {/* <TeampPageContainer /> */}
                    {/* <BrandContainer /> */}
                    {/* <AboutContainer /> */}
                    <ServiceListContainer />
                    {/* <TestimonialReverse /> */}
                    {/* <FunFactContainer classOption="mt-0 mt-lg-0" /> */}
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
