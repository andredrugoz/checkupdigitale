import Header from "../layouts/header";
import { Link } from "react-router-dom";
import SEO from "../components/seo";

export default function Nothing() {
    return (
        <>
            <SEO title="CheckupDigitale – Pagina non trovata" />
            <Header />

            <div className="help-container">
                <h1>404</h1>
                <p>
                    Sembra che non ci sia niente qui,
                    <br />
                    vai alla
                    <Link to="/"> home</Link>
                </p>
            </div>
        </>
    );
}
