import React from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Contact = () => {
    useGSAP(() => {
        gsap.fromTo('.contact-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power2.inOut' });
        gsap.fromTo('.contact-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.inOut' });
    });

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full">
                <div className="contact-title mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Get In Touch</h2>
                    <p className="text-white-50 text-center mt-2">Feel free to reach out for collaborations or just a friendly hello</p>
                </div>
                
                <div className="contact-content card-border rounded-xl p-8">
                    <form className="flex flex-col gap-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-white mb-2">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full bg-[#1c1c24] border border-[#2a2a35] rounded-lg p-3 text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white mb-2">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full bg-[#1c1c24] border border-[#2a2a35] rounded-lg p-3 text-white"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-white mb-2">Message</label>
                            <textarea 
                                id="message" 
                                rows="5" 
                                className="w-full bg-[#1c1c24] border border-[#2a2a35] rounded-lg p-3 text-white"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-4 self-start"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;