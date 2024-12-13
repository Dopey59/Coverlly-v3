"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ContactUs: React.FC = () => {
  const [, setIsMessageSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_4yhoibk", // Service ID
        "template_wz8lzvh", // Template ID
        formRef.current, // Form reference
        "urNiZ08f4yXl5PT44" // Public Key
      )
      .then((result) => {
        console.log(result.text);
        if (result.status === 200) {
          setIsMessageSent(true);
          notify("Message envoyé 📩 !", "success");
        } else {
          notify("Oops ! Une erreur est survenue ❌", "error");
        }
      })
      .catch((error) => {
        console.error(error.text);
        notify("Oops ! Veuillez réessayer plus tard!", "error");
      });
  };

  const notify = (message: string, type: "success" | "error") => {
    toast(message, {
      type: type,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <section>
        <div className="h-screen p-6 sm:p-0 mx-auto lg:px-8 sm:flex sm:justify-center sm:flex-col gap-6 sm:items-center anim-contact">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Contactez-nous !
              </h2>
              <div>
                <p className="mt-2 text-lg leading-8 text-white">
                  Une question ? Un doute ? Notre équipe est là pour répondre à tous vos besoins,
                  dans un délai de 24h à 48h !
                </p>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mx-auto relative mt-6 max-w-xl bg-white p-6 rounded-md shadow-md z-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nom
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="from_lastname"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Prénom
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="from_firstname"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nom de l&apos;Entreprise
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="user_company"
                    id="company"
                    placeholder="Facultatif"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="email"
                    name="user_email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    placeholder="Vos articles sont vraiment chouettes !"
                    required
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Envoyer
              </button>
              <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
