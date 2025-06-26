import { useState } from "react";
import { Send } from "lucide-react";
import Squares from "../../../Tools/Squares";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "6283156980314";
    const text = `Halo, saya *${name}* (${email}) ingin menyampaikan:\n\n_Subject:_ ${subject}\n\n${message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden p-6 flex items-center justify-center"
    >
      {/* Background Squares */}
      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.4}
          squareSize={50}
          direction="up"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Contact Card */}
      <div className="grid lg:grid-cols-2 items-start gap-10 p-8 max-w-5xl w-full bg-[#0f0f0f] rounded-xl border border-neutral-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-sm">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-white">Let's Talk</h2>
          <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
            Have an idea, project, or collaboration in mind? Let’s connect and
            discuss how we can work together to make something awesome.
          </p>

          {/* Social */}
          <div className="mt-10">
            <h3 className="text-base font-semibold text-white mb-3">Socials</h3>
            <ul className="flex gap-4">
              {[
                {
                  href: "https://github.com/Shibarkan",
                  svg: (
                    <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.23c-3.338.725-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.933 0-1.31.467-2.382 1.235-3.22-.124-.302-.535-1.52.117-3.167 0 0 1.007-.322 3.3 1.23a11.54 11.54 0 0 1 3.003-.403 11.54 11.54 0 0 1 3.003.403c2.29-1.552 3.296-1.23 3.296-1.23.654 1.647.243 2.865.12 3.167.77.838 1.232 1.91 1.232 3.22 0 4.61-2.807 5.63-5.478 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.218.694.825.576C20.565 22.296 24 17.8 24 12.5 24 5.873 18.627.5 12 .5z" />
                  ),
                },
                {
                  href: "https://instagram.com/si_shuu",
                  svg: (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.863.247 2.3.415a4.602 4.602 0 0 1 1.675 1.09 4.602 4.602 0 0 1 1.09 1.675c.168.437.36 1.094.415 2.3.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.247 1.863-.415 2.3a4.602 4.602 0 0 1-1.09 1.675 4.602 4.602 0 0 1-1.675 1.09c-.437.168-1.094.36-2.3.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.863-.247-2.3-.415a4.602 4.602 0 0 1-1.675-1.09 4.602 4.602 0 0 1-1.09-1.675c-.168-.437-.36-1.094-.415-2.3-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.206.247-1.863.415-2.3a4.602 4.602 0 0 1 1.09-1.675 4.602 4.602 0 0 1 1.675-1.09c.437-.168 1.094-.36 2.3-.415 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 5.773.13 4.773.322 3.963.593a6.56 6.56 0 0 0-2.37 1.51A6.56 6.56 0 0 0 .593 4.473C.322 5.283.13 6.283.072 7.562.014 8.842 0 9.251 0 12c0 2.749.014 3.158.072 4.438.058 1.279.25 2.279.521 3.089a6.56 6.56 0 0 0 1.51 2.37 6.56 6.56 0 0 0 2.37 1.51c.81.271 1.81.463 3.089.521C8.842 23.986 9.251 24 12 24c2.749 0 3.158-.014 4.438-.072 1.279-.058 2.279-.25 3.089-.521a6.56 6.56 0 0 0 2.37-1.51 6.56 6.56 0 0 0 1.51-2.37c.271-.81.463-1.81.521-3.089.058-1.28.072-1.689.072-4.438 0-2.749-.014-3.158-.072-4.438-.058-1.279-.25-2.279-.521-3.089a6.56 6.56 0 0 0-1.51-2.37 6.56 6.56 0 0 0-2.37-1.51c-.81-.271-1.81-.463-3.089-.521C15.158.014 14.749 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  ),
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="bg-[#1a1a1a] hover:bg-[#2a2a2a] h-10 w-10 rounded-full flex items-center justify-center transition"
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      {item.svg}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            {
              id: "name",
              label: "Name",
              value: name,
              setValue: setName,
              type: "text",
            },
            {
              id: "email",
              label: "Email",
              value: email,
              setValue: setEmail,
              type: "email",
            },
            {
              id: "subject",
              label: "Subject",
              value: subject,
              setValue: setSubject,
              type: "text",
            },
          ].map((input) => (
            <div key={input.id} className="relative">
              <input
                type={input.type}
                id={input.id}
                value={input.value}
                onChange={(e) => input.setValue(e.target.value)}
                required
                className="peer w-full bg-transparent text-white rounded-md pt-5 pb-2.5 px-4 border border-neutral-700 text-sm outline-none focus:border-blue-500"
                placeholder=" "
              />
              <label
                htmlFor={input.id}
                className="absolute left-4 top-2.5 text-sm text-neutral-400 transform scale-100 transition-all
                peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 
                peer-focus:top-2.5 peer-focus:scale-90 peer-focus:text-blue-400"
              >
                {input.label}
              </label>
            </div>
          ))}

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="peer w-full bg-transparent text-white rounded-md pt-5 pb-2.5 px-4 border border-neutral-700 text-sm outline-none focus:border-blue-500 resize-none"
              placeholder=" "
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-2.5 text-sm text-neutral-400 transform scale-100 transition-all
              peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 
              peer-focus:top-2.5 peer-focus:scale-90 peer-focus:text-blue-400"
            >
              Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium px-4 py-2 transition"
          >
            <Send size={16} /> Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
