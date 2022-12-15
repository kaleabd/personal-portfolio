import React, {useState, useRef} from 'react'
import contact from '../assets/contact.svg'
import emailjs from '@emailjs/browser'



function Contact() {
    const [messageSent, setMessageSent] = useState(false)
    const form = useRef();
 
   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_4c8b9t2', 'template_sj4b1xq', form.current, 'ulgJMQTw2Ma1hZsbV')
       .then((result) => {
           setMessageSent((prev) => prev = true)
           console.log(result.text);
       }, (error) => {
           setMessageSent((prev) => prev = false)
           console.log(error.text);
       });
   };
  return (
    <>
    <div class="lg:w-[1000px] md:w-[600px] px-4">
            <div class="bg-white relative p-8 sm:p-12 drop-shadow-xl rounded-lg">
               <form ref={form} onSubmit={sendEmail}>
                  <h1 className='lg:text-4xl font-bold mb-6 text-[#F37F14] text-2xl'>CONTACT ME</h1>
                  <p className=' font-bold mb-6'>Have an exciting project where you need some help?<br></br>Send me over a message, and let's chat.</p>
                  <div class="mb-6">
                     <input
                        type="text"
                        name="user_name" 
                        placeholder="Your Name"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[#F37F14]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-[#F37F14]
                        focus:ring-[#F37F14]
                        "
                        />
                  </div>
                  <div class="mb-6">
                     <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[#F37F14]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-[#F37F14]
                        focus:ring-[#F37F14]
                        "
                        />
                  </div>
                  <div class="mb-6">
                     <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        class="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[#F37F14]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-[#F37F14]
                        focus:ring-[#F37F14]
                        "
                        ></textarea>
                  </div>
                  <div>
                     <button
                        type="submit"
                        class={messageSent ? `
                        w-full
                        text-white
                        bg-green-500
                        rounded
                        p-3
                        transition
                        hover:bg-opacity-90
                        ` : `
                        w-full
                        text-white
                        bg-[#F37F14]
                        rounded
                        p-3
                        transition
                        hover:bg-opacity-90
                        `}
                        >
                     {messageSent ? "Message Sent" : "Send Message"}
                     </button>
                  </div>
               </form>
               </div>
               </div>
               
          {/* try to style the form components here */}
          <div className = "lg:flex lg:justify-center lg:w-full lg:h-auto md:hidden hidden">
            <img src={contact} alt="/" className="lg:w-[600px] md:w-[50%] lg:h-screen h-auto no-image"/>
          </div>
    </>
    
  )
}

export default Contact
