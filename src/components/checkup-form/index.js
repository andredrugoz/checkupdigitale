import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const CheckupForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <Fragment>
            <form
                id="CheckupForm"
                className="row"
                action="https://getform.io/f/b2fc9957-7cc6-4878-85f4-acbd91bf6653"
                method="POST"
            >
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="piva"
                        name="piva"
                        placeholder="P.IVA*"
                        ref={register({
                            required: "Inserire una p.iva valida",
                        })}
                        required
                    />
                    {errors.piva && <p>{errors.piva.message}</p>}
                </div>
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email*"
                        ref={register({
                            required: "Inserire una email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Inserisci una email valida",
                            },
                        })}
                        required
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="col-12 mb-9">
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Telefono*"
                        ref={register({
                            required: "Inserire un numero di telefono",
                            pattern: {
                                value: /^[0-9]{10}/i,
                                message: "Inserisci un numero valido",
                            },
                        })}
                        required
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </div>
                <div className="col-12 mb-9">
                    <input
                        type="text"
                        className="form-control"
                        id="sitoweb"
                        name="sitoweb"
                        placeholder="Sito web*"
                        ref={register({
                            required: "Inserire un sitoweb",
                            pattern: {
                                message: "Inserisci un numero valido",
                            },
                        })}
                        required
                    />
                    {errors.sitoweb && <p>{errors.sitoweb.message}</p>}
                </div>
                <div className="col-12 mb-9">
                    <h5>Seleziona il tuo obbiettivo</h5>
                    <div id="goals">
                        <label>
                            <input type="checkbox" name="work_days" value="1" />
                            <span>Aumentare le vendite</span>
                        </label>
                        <label>
                            <input type="checkbox" name="work_days" value="2" />
                            <span>Migliorare il mio brand</span>
                        </label>
                    </div>
                </div>
                <div className="col-12 mb-9">
                    <textarea
                        className="form-control massage-control"
                        name="social"
                        id="social"
                        cols="30"
                        rows="10"
                        placeholder="Inserire i link dei social utilizzati"
                        ref={register({
                            required: "Inserire almeno un link di un social",
                        })}
                        required
                    ></textarea>
                    {errors.social && <p>{errors.social.social}</p>}
                </div>
                <div className="col-12">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn btn-dark btn-hover-dark"
                        data-complete-text="Well Done!"
                    >
                        Invia
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default CheckupForm;
