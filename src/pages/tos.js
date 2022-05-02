import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const Tos = () => {
    return (
        // prettier-ignore
        <React.Fragment>
            <Layout>
                <SEO title="CheckoutDigitale – Tos" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="TOS"
                        excerpt="A seguire i termini e condizioni accettati nel 
                        momento che si usufruisce dei servizi di checkupdigitale.com"
                        image="./images/faq/1.png"
                    />
                    <div className="container">
                        <h1>Privacy Policy</h1>

                        <h4>Termini e condizioni del servizio</h4>
                        <p>
                            Questi termini e condizioni, disciplinano il modo in
                            cui  checkupdigitale  raccoglie utilizza, conserva e
                            divulga le informazioni raccolte dagli utenti  del
                            sito
                        </p>
                        <p>www.checkupdigitale.com  </p>
                        <p>Questa informativa sulla privacy si applica al Sito e tutti i prodotti e servizi checkupdigitale</p>
                        <h4>Informazioni di identificazioni personali</h4>

                        <p>Possiamo raccogliere informazioni di identificazioni
                            personali dagli utenti in una varietà di modi, tra
                            cui, ma non limitatamente a, quando gli utenti
                            visitano il nostro sito, compilano un modulo, sia di
                            contatto che degli ordini, e in connessione con le
                            attività di altri servizi, caratteristiche o
                            risorse che mettono a disposizione sul nostro Sito.
                            In determinati casi, gli utenti potrebbero ricevere
                            richiesta per le suddette informazioni.
                            Gli utenti possono tuttavia visitare il nostro sito
                            in modo anonimo.
                            Raccoglieremo le informazioni di identificazione
                            personale da utenti solo se sottopongono
                            volontariamente tali informazioni a noi. Gli utenti
                            possono sempre rifiutarsi di fornire informazioni
                            personali di identificazione, salvo che questo
                            possa impedire loro di impegnarsi in determinate
                            attività correlate al sito.
                        </p>
                        <h4>Informazioni di identificazione non personali</h4>
                        <p>
                            Possiamo raccogliere informazioni di identificazione
                            non personali sugli utenti ogni volta che
                            interagiscono con il nostro sito. Informazioni di
                            identificazione non personali possono includere il
                            nome del browser, il tipo di computer e informazioni
                            tecniche sui mezzi di collegamento alla nostra
                            piattaforma , come ad esempio il sistema operativo
                            ed i fornitori di servizi Internet utilizzati e
                            altre informazioni simili.
                        </p>
                        <h4>Come vengono tutelati i tuoi dati</h4>
                        <p>
                            Adottiamo adeguate misure per le raccolte dei dati:
                            memorizzazione ed elaborazione pratiche, misure di
                            sicurezza per la protezione contro accessi non
                            autorizzati , alterazione, divulgazione o la
                            distruzione dei propri dati personali, username,
                            password, informazioni sulle transazioni e dei dati
                            memorizzati sul nostro sito. Lo scambio di dati
                            sensibili e privati tra il sito e i suoi utenti
                            avviene su un canale di comunicazione sicuro SSL.
                            Tali dati sono crittografati e protetti con le firme
                            digitali.
                        </p>
                        <h4>Accettazione dei termini</h4>
                        <p>
                            L’utilizzo di questo sito comporta l’ accettazione
                            di queste condizioni e termini di servizio. Se non
                            siete d’accordo con questi termini, siete pregati di
                            non utilizzare il nostro sito.
                        </p>
                        <h4>Per contattarci</h4>
                        <p>
                            Se avete domande sulla presente informativa sulla
                            privacy, le pratiche di questo sito, o sui rapporti
                            con questo sito, contattateci all’indirizzo :
                        </p>
                        <p>info@checkupdigitale.com</p>
                        <br />
                        <p>www.checkupdigitale.com</p>
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Tos;
