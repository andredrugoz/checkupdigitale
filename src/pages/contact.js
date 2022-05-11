import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="CheckupDigitale – Contatti" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Contatti"
                        excerpt="Per qualsiasi informazione o chiarimenti sul tuo checkup digitale non esitare a contattarci"
                        image="./images/contact/1.png"
                    />
                    <ContactContainer />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
