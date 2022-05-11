import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import CheckupForm from "../components/checkup-form";
// import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const CheckupPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="CheckupDigitale – Contatti" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Richiedi il tuo Checkup Digitale"
                        excerpt="Compila il form con le informazioni richieste 
                        per ricevere il tuo checkup digitale"
                        image="./images/contact/1.png"
                    />
                    <div className="container mt-5 pt-5">
                        <CheckupForm />
                    </div>
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default CheckupPage;
