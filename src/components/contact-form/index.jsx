import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <Fragment>
            <form
                id="contactForm"
                className="row"
                action="https://getform.io/f/b2fc9957-7cc6-4878-85f4-acbd91bf6653"
                method="POST"
            >
                <input
                    type="hidden"
                    className="_gotcha"
                    style={{ display: "none!important;" }}
                />
                <div className="col-12 col-sm-6 mb-7">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Nome*"
                        ref={register({ required: "Inserisci il nome" })}
                        required
                    />
                    {errors.name && <p>{errors.name.message}</p>}
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
                    <textarea
                        className="form-control massage-control"
                        name="message"
                        id="massage"
                        cols="30"
                        rows="10"
                        placeholder="Messaggio"
                        ref={register({
                            required: "Il messaggio è richiesto",
                        })}
                        required
                    ></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
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

export default ContactForm;
