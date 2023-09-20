import React from "react";
import Header from "../layouts/header";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Layout from "../layouts/index";

const Promo = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="CheckupDigitale – Promozioni" />
                <Header />
                <div className="wrapper">
                    <script>{(window.location = "https://promo.checkupdigitale.com")}</script>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Promo;
