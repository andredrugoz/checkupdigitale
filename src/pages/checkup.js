import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const CheckupPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="CheckoutDigitale – Contatti" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Richiedi il tuo Checkup Digitale"
                        excerpt="Compila il form con le informazioni richieste 
                        per ricevere il tuo checkup digitale"
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

export default CheckupPage;
