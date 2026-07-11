import  { useRef } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'

function Contact() {

    const form = useRef()

        const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_4ldzxhs",
            "template_mfx9h47",
            form.current,
            "dy3zsVEJoC-lV8gTZ",
        )
        .then(
            (result) => {
            console.log("Message Sent:", result.text);
            alert("Message sent successfully!");
            form.current.reset();
            },
            (error) => {
            console.log("Error:", error.text);
            alert("Message failed to send.");
            },
        );
    };

    return (
        <motion.section
            className="bg-[#161b22] p-3 text-center mt-24 text-[#f8fafc] sm:p-5 sm:w-full lg:px-20 lg:py-10 xl:px-10 2xl:w-[1440px] 2xl:mx-auto 2xl:my-0 2xl:px-10 2xl:mt-[50px]"
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.h1
                className="mb-2.5 text-[20px] font-bold md:text-[36px] lg:text-[36px] xl:text-[36px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Contact <span className='text-[#8b5cf6]'>Me</span>
            </motion.h1>

            <motion.div
                className="flex w-full md:w-150 my-0 mx-auto flex-col lg:w-200 xl:w-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="text-[16px]">
                    If you'd like to collaborate or have any questions, feel free to
                    reach out!
                </h2>
                <div className="flex flex-col justify-between mt-2.5 sm:items-center sm:flex-row sm:justify-between">
                    <p className="flex items-center gap-2.5 text-[#94a3b8] text-[12px] sm:text-[16px]">
                        <FontAwesomeIcon className="text-[#8b5cf6]" icon={faEnvelope} />
                        ojonugwaatule@gmail.com
                    </p>
                    <p className="flex items-center gap-2.5 text-[#94a3b8] text-[12px] sm:text-[16px]">
                        <FontAwesomeIcon className="text-[#8b5cf6]" icon={faPhone} /> +234
                        70 8133 0495
                    </p>
                    <p className="flex items-center gap-2.5 text-[#94a3b8] text-[12px] sm:text-[16px]">
                        <FontAwesomeIcon
                            className="text-[#8b5cf6]"
                            icon={faLocationDot}
                        />{" "}
                        Abuja, Nigeria
                    </p>
                </div>
            </motion.div>

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="flex justify-center my-5 mx-auto flex-col gap-5 max-w-[800px] sm:my-2.5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
            >
                <div className="flex gap-5 items-center justify-center">
                    <input
                        type="text"
                        name="user_name"
                        className="w-full border-0 border-b-2 border-b-[#8b5cf6] text-[15px] pb-2.5 text-[#94a3b8] bg-transparent focus:outline-none placeholder:text-[#94a3b8] sm:p-5"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        className="w-full border-0 border-b-2 border-b-[#8b5cf6] text-[15px] pb-2.5 text-[#94a3b8] bg-transparent focus:outline-none placeholder:text-[#94a3b8] sm:p-5"
                        placeholder="Email"
                        required
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    className="w-full bg-transparent border-0 border-b-2 border-b-[#8b5cf6] text-[15px] pb-2.5 text-[#94a3b8] focus:outline-none placeholder:text-[#94a3b8] sm:p-5"
                    required
                ></textarea>
                <button
                    type="submit"
                    className="text-[#f8fafc] cursor-pointer p-2 bg-transparent rounded-[30px] w-[150px] border border-[#8b5cf6] self-end text-[15px] hover:bg-[#8b5cf6] transition ease-in-out duration-300 sm:p-2.5 lg:w-[200px] lg:text-[18px] xl:w-[220px]"
                >
                    Send Message
                </button>
            </motion.form>

            <motion.div
                className="flex items-center justify-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: true }}
            >
                <a
                    href="https://github.com/Atuleojonugwa"
                    className="decoration-0 text-[#8b5cf6] text-[22px] transition-transform duration-300 ease-in-out hover:scale-110"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/ojonugwa-atule-682160387/"
                    className="decoration-0 text-[#8b5cf6] text-[22px] transition-transform duration-300 ease-in-out hover:scale-110"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://x.com/ojay03077035?s=11"
                    className="decoration-0 text-[#8b5cf6] text-[22px] transition-transform duration-300 ease-in-out hover:scale-110"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
            </motion.div>
        </motion.section>
    )
}

export default Contact