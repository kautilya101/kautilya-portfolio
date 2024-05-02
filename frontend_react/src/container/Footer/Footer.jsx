import React from "react";
import "./Footer.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { images } from "../../constants";
import { SocialMedia } from "../../components";

const Footer = () => {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm();


  const handleFormSubmit = (e,data) => {
    const {name,email,message} = data.target
    console.log(name,email,message);
    if (name.value && email.value && message.value) {
      setLoading(true);

      const contact = {
        _type: "contact",
        name: name.value,
        email: email.value,
        message: message.value,
      };

      client.create(contact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    }
  };

  return (
    <>
      <h2 className="head-text">
        Lets Grab A <span>Tea</span> and <span>Chat</span>
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.mail} alt="email" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kautilya101001@gmail.com"
            className="p-text "
          >
            kautilya101001@gmail.com
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="app__footer-form-child app__footer-form-flex ">
            <div className="app__footer-form-flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="name"
                {...register("name",{ required: true,message: "required"})}
              />
              {errors.name && <span className="app__form_error">This field is required</span>}
            </div>
            <div className=".app__footer-form-flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                
                {...register("email",{ required: true})}
              />
              {errors.email && <span className="app__form_error">This field is required</span>}
            </div>
            <div className=".app__footer-form-flex">
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
                {...register("message",{ required: true})}
              />
              {errors.message && <span className="app__form_error">This field is required</span>}
            </div>
            <button className="p-text" type='submit' >
              {loading ? "Sending" : "Send Greetings"}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text"> Thank You for getting in touch.</h3>
        </div>
      )}
      <SocialMedia styleClass={"app__social-min"} />
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
