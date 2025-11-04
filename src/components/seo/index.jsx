import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta httpEquiv="content-language" content="it" />
            <title>{title}</title>
            <meta name="robots" content="follow" />
            <meta
                name="description"
                content="Avvia un Check Up Digitale per la tua attività. Scopri le potenzialità di miglioramento della tua attività con Checkupdigitale!"
            />
            <meta
                name="keywords"
                content="Checkup, check-up, Digitale, CheckupDigitale, consulenza"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="author" content="Checkup Digitale" />
            <meta name="copyright" content="Checkup Digitale" />
            <meta name="page-type" content="Landing Page" />
            <meta name="audience" content="Everyone" />
            <meta property="og:title" content="Checkup Digitale" />
            <meta
                property="og:description"
                content="Avvia un Check Up Digitale per la tua attività. Scopri le potenzialità di miglioramento della tua attività con Checkupdigitale!"
            />
            <meta property="og:url" content="http://checkupdigitale.com" />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
};

export default SEO;
