import React from "react";
import { useState, useEffect, useRef } from "react";
import downloadSvg from '@/public/download.svg'
import linkedin from '@/public/linkedin.png'
import github from '@/public/github.png'
import emailjs from '@emailjs/browser'

// import cv from '@/public/cv.pdf'; // Add path to cv

export default function Card(props) {
    const [nameLength, setNameLength] = useState(0);
    const [emailLength, setEmailLength] = useState(0);
    const [messageLength, setMessageLength] = useState(0);
    const cv = 'path/to/cv' // add path to cv, it should go in public directory in pdf

    // props.config
    const config = props.config;
    const contactForm = useRef();

    function sendEmail(e) {
        e.preventDefault();

        // Check if the input fields are not empty
        if (contactForm.current.name.value && contactForm.current.email.value && contactForm.current.message.value) {
            // Generate a random contact ID and set it on the form
            e.target.contact_id.value = Math.random() * 100000 | 0;

            emailjs.sendForm('service_rk3vign', 'template_pj20qie', contactForm.current, 'WFbcV8YLfEt9GC9ua')
            .then((result) => {
                console.log('Enviado!');
                alert('Mensaje enviado!');
                e.target.reset(); // Reset the form
            }, (error) => {
                console.log('Fallo el envío: ', error);
                alert(`Falló el envío, puedes escribirme directamente a jsateler1@uc.cl`);
            });
        } else {
            alert('Debes llenar los 3 campos de contacto para enviar un mensaje.');
        }
    }

    function buttonLayout(config) {
        switch (config.type) {
            // type is a string of types: hero|project|about|form|footer
            case 'hero':
                return <>
                        <div className="flex items-center justify-between w-[100%] gap-4">
                            <div className="flex gap-4">
                                <a href={cv} target="_blank" rel="noopener noreferrer">
                                    <button className={`flex items-center gap-2 max-h-9 bg-[#391597] hover:bg-[#4419B3] active:bg-[#1d1058] transition 300ms text-neutral-300 text-sm font-light py-2 px-6 rounded-full`} 
                                            style={{ 
                                                boxShadow: 'inset 0 0 5px #883FD4'
                                            }}>
                                        Curriculum
                                        <img src={downloadSvg} alt="Download" />
                                    </button>
                                </a>
                            </div>
                            <div className="md:flex flex-col items-end hidden">
                                <div className="flex gap-2">
                                    <a href="https://www.linkedin.com/in/joaqu%C3%ADn-sateler-villanueva/" target="_blank">
                                        <img src={linkedin} alt="" />
                                    </a>
                                    <a href="https://github.com/cacosat" target="_blank">
                                        <img src={github} alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="mailto:jsateler1@uc.cl" className=" underline text-neutral-600 font-semibold text-sm">
                                        jsateler1@uc.cl
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>;
            
            case 'project': // One button "Ver más", links to project page
                return <>
                    <div className="flex gap-4">
                        <a href={config.link} target="_blank">
                            <button className={`flex items-center gap-2 text-nowrap max-h-8 bg-[#0E0A1D] hover:bg-[#120D29] active:bg-[#1d1058] transition 300ms text-neutral-300 text-sm font-light py-2 px-6 rounded-full`} 
                                    style={{ 
                                        boxShadow: 'inset 0 0 5px #883FD4'
                                    }}>
                                Ver más
                            </button>
                        </a>
                    </div>
                </>
            
            case 'form': // form component to render for about me card
                return (
                    <form ref={contactForm} className="flex flex-col gap-4 w-full" onSubmit={sendEmail}> 
                        <div className="flex flex-col">
                            <input type="text" 
                                    name="name" 
                                    placeholder="Nombre" 
                                    maxLength="50" 
                                    className="py-2 px-3 border-[1px] bg-[#202020] focus:bg-[#404040] border-[#626262] focus:border-[#909090] rounded-xl w-full"
                                    onChange={(e) => setNameLength(e.target.value.length)}
                            />
                            <div className="text-xs text-gray-500 self-end">{nameLength}/50</div>
                        </div>
                        <div className="flex flex-col">
                            <input type="email" 
                                    name="email" 
                                    placeholder="Mail" 
                                    maxLength="50" 
                                    className="py-2 px-3 border-[1px] bg-[#202020] focus:bg-[#404040] border-[#626262] focus:border-[#909090] rounded-xl w-full" 
                                    onChange={(e) => setEmailLength(e.target.value.length)}
                            />
                            <div className="text-xs text-gray-500 self-end">{emailLength}/50</div>
                        </div>
                        <div className="flex flex-col">
                            <textarea name="message" 
                                    placeholder="Mensaje" 
                                    maxLength="500" 
                                    className="py-2 px-3 border-[1px] bg-[#202020] focus:bg-[#404040] border-[#626262] focus:border-[#909090] rounded-xl w-full" 
                                    style={{resize: 'vertical'}} 
                                    onChange={(e) => setMessageLength(e.target.value.length)}
                            />
                            <div className="text-xs text-gray-500 self-end">{messageLength}/500</div>
                        </div>
                        <input type="submit" 
                                value="Enviar"
                                className={`flex items-center justify-center gap-2 self-end max-h-9 max-w-24 bg-[#0E0A1D] hover:bg-[#120D29] active:bg-[#1d1058] transition 300ms text-neutral-300 text-sm font-light py-2 px-6 rounded-full`} 
                                    style={{ 
                                        boxShadow: 'inset 0 0 5px #883FD4'
                                    }}
                        />
                        <input type="hidden" name="contact_id" />
                    </form>
                );
        
            case 'footer': // footer renders name - mail
                return (
                    <div className="w-full flex justify-between">
                        <a href="https://www.linkedin.com/in/joaqu%C3%ADn-sateler-villanueva/" className="text-neutral-500" target="_blank">
                            Joaquín Sateler
                        </a>
                        <a href="mailto:jsateler1@uc.cl" className="underline text-neutral-500 font-semibold text-sm">
                            jsateler1@uc.cl
                        </a>
                    </div>
                );
            
            default: // about returns nothing
                break;
        }
    }

    return <>
    {/* JSX */}
        <div className={`shadow-xl ${props.className} h-full w-full`}>
            <div className={`flex items-end justify-center rounded-2xl relative h-full w-full bg-cover `} 
                style={{
                    backgroundImage: `${config.primaryBg.split('')[0] != "#" ? `url(${config.primaryBg})` : ''}`,
                    backgroundPosition: 'center',
                    backgroundColor: `${config.primaryBg.split('')[0] != "#" ? '' : `${config.primaryBg}99`}`
                }}
                >
                {/* handles purple gradient */}
                <div
                    className="absolute inset-0 bg-gradient-to-tr from-[#0d0d0d] via-[#0d0d0de5] via-15% bg-opacity-0 rounded-2xl backdrop-blur-[8px] border-[1px] border-[#313131]"
                    style={{
                    // mixBlendMode: 'darken',
                    }}
                ></div>
                {/* Content here, make sure this comes after the overlay div so it's on top */}
                <div className="flex flex-col items-start gap-4 m-6 lg:m-8 z-10 opacity-100 w-[100%]">
                    <div className="flex flex-col gap-2">
                        <h1 className={`${config.type === 'hero' ? 'text-[64px] font-semibold' : 'text-sm sm:text-xl md:text-2xl'}  text-neutral-50`}>
                            {config.title}
                        </h1>
                        <p className={`text-[12px] text-neutral-500 font-semibold`}>
                            {config.fecha}
                        </p>
                    </div>
                    {/* TODO toggle for description */}
                    <p className={`${config.type === 'hero' ? 'flex max-w-[45ch]' : config.type === 'about' ? 'flex' : 'hidden sm:flex'} font-light text-[14px] text-neutral-300 tracking-wide`}>
                        {config.descripcion}
                    </p>
                    <div className="w-full">
                        {/* container for 3 diferent button layouts, only one rendered via a */}
                        {/* switch statement of prop.config.type === hero|project|about|form|footer; */}
                        {/* about and footer return empty, project one button, hero buttons plus socials, */}
                        {/* and forms the contact form */}
                        {buttonLayout(config)}
                    </div>
                </div>
            </div>
        </div>
    </>
}