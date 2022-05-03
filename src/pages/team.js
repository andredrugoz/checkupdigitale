import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const TeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="CheckoutDigitale – Team" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Il Nostro Team"
                        excerpt="Siamo lieti di presentare il nostro team di professionisti e innovatori del digitale"
                        image="./images/team/team.png"
                    />
                    <TeampPageContainer />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default TeamPage;
