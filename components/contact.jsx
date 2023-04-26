import Image from "next/image";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { GoMail } from "react-icons/go";
import { GrClose } from "react-icons/gr";

export default function Contact() {
  const [formCollapsed, setFormCollapsed] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({});
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && subject && message) {
      setForm({ state: "loading" });
      try {
        const res = await fetch("api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        });
        const { error } = await res.json();

        if (error) {
          console.log(error);
          setForm({
            state: "error",
            message: error,
          });
          return;
        }
        setForm({
          state: "success",
          message: "Thans for reaching out! Expect an answer very soon.",
        });
        setSent(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => {
          setSent(false);
          setFormCollapsed(true);
        }, 1000);
        setForm({});
      } catch (err) {
        setForm({ state: "error", message: err });
      }
    }
  };

  return (
    <>
      {formCollapsed && (
        <GoMail
          className="w-12 h-12 xl:w-16 xl:h-16 border-2 border-customblue fill-customblue rounded-full p-2 bg-white ease-in-out duration-150 hover:scale-105 hover:fill-customgold hover:border-customgold hover:-rotate-6 cursor-pointer fixed bottom-4 right-4"
          onClick={() => setFormCollapsed(false)}
          alt="Open contact form window."
        />
      )}
      <div className="fixed bottom-4 right-4 left-4 md:w-128 md:left-auto rounded-xl bg-white shadow-md">
        {!formCollapsed && (
          <div className="flex flex-col p-2">
            <GrClose
              className="self-end cursor-pointer w-6 h-6"
              onClick={() => setFormCollapsed(true)}
              alt="Close contact form window."
            />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col px-4 items-center"
            >
              <div className="flex flex-col w-11/12">
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  className="full outline-0 border-b-2 border-customblue focus:border-customgold bg-stone-50"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-11/12 mt-6">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  className="w-full outline-0 border-b-2 border-customblue focus:border-customgold bg-stone-50"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-11/12 mt-6">
                <label htmlFor="subject">Subject:</label>
                <input
                  id="subject"
                  className="w-full outline-0 border-b-2 border-customblue focus:border-customgold bg-stone-50"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-11/12 mt-6">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  className="w-full h-32 outline-0 border-b-2 border-customblue focus:border-customgold bg-stone-50"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="text-xl mt-6 mb-2 flex items-center">
                <div
                  className="mr-2 p-2 flex items-center shadow-lg rounded-lg cursor-pointer duration-150 ease-in-out"
                  onClick={handleSubmit}
                >
                  <span className="mr-1">Send</span>
                  {!sent ? (
                    <FaPaperPlane alt="" />
                  ) : (
                    <FaPaperPlane
                      className="animate-flyoff fill-customgold"
                      alt=""
                    />
                  )}
                </div>
              </div>
              {form.state === "loading" ? (
                <CgSpinner className="animate-spin text-3xl" />
              ) : form.state === "error" ? (
                <div>{form.message}</div>
              ) : (
                form.state === "success" && <div>Sent successfully</div>
              )}
            </form>
          </div>
        )}
      </div>
    </>
  );
}
