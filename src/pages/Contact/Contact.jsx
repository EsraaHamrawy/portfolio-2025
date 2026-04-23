
import React, { useRef, useState ,useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Socialmedia from "../../components/layout/socialmedia/socialmedia.component"
import { styles } from "../../styles.js";
import Alert from "../../components/general/alert/alert";
// import { EarthCanvas } from "../../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion.js";




const ContactMe = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const [loading, setLoading] = useState(false);
  
    const [alert, setAlert] = useState({
      show: false,
      type: "success", // success | error
      message: "",
    });

    useEffect(() => {
      if (alert.show) {
        const timer = setTimeout(() => {
          setAlert((prev) => ({ ...prev, show: false }));
        }, 3000);
    
        return () => clearTimeout(timer);
      }
    }, [alert.show]);

    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;
  
      setForm({
        ...form,
        [name]: value,
      });
    };
  
   

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!form.name || !form.email || !form.message) {
        setAlert({
          show: true,
          type: "warning",
          message: "Please fill in all fields before sending.",
        });
        return;
      }


      setLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Esraa",
            from_email: form.email,
            to_email: "esraa889675@gmail.com",
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )

        .then(
          () => {
            setLoading(false);
            
            setAlert({
              show: true,
              type: "success",
              message: "Thank you! I will get back to you as soon as possible.",
            });
  
            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
  
            setAlert({
              show: true,
              type: "error",
              message: "Something went wrong. Please try again.",
            });
          }
        );
    };
  
   
    
    return (
      <>
  
        <p className={`${styles.sectionSubText} text-center`}>Open to new opportunities</p>
        <h3 className={`${styles.sectionHeadText} text-center`}>Contact</h3>
      <div className={"flex justify-center sm:py-6 py-5 " }>
      <Socialmedia />
      </div>
         <div className='flex justify-center items-center '>
        <div className='relative mx-4 w-full max-w-md overflow-clip'>
          <h2 className='text-purple-600 text-accent font-semibold text-center text-2xl sm:px-16 px-6 sm:py-6 py-5 '>
            OR
          </h2>
          {/* Separator Lines */}
          <div className={'absolute top-1/2 left-1/2 translate-x-8 translate-y-1/2 w-1/2 h-px bg-transparent'} style={{ boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 0px 0 rgba(0, 0, 0, .08), 0 1px 0 -3px rgba(0, 0, 0, .05)" }}/>
          <div className='absolute top-1/2 right-1/2 -translate-x-8 translate-y-1/2 w-1/2 h-px bg-transparent' style={{ boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.15), inset 0 0px 0 rgba(0, 0, 0, .08), 0 1px 0 -3px rgba(0, 0, 0, .05) " }}/>
        </div>
      </div>
          <h2 className='text-accent font-semibold text-left mb-4 text-2xl flex justify-center sm:py-6 py-5'>
            Send a direct message
        </h2>
      
        <div
        className={` flex xl:flex-row justify-center flex-col-reverse gap-10 overflow-hidden`}
      >
        
    
        <motion.div
          variants={slideIn("center", "tween", 0.2, 1)}
          className={`${styles.formcontainer} flex-[0.75] `}
        >


          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-2  flex-col gap-8 '
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className='bg-[rgba(132,60,188,0.15)] mb-4 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className='bg-[rgba(132,60,188,0.15)] mb-4 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Message</span>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Tell me about your role, team, or project'
                className='bg-[rgba(132,60,188,0.15)] mb-4 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
  
            <button
              type='submit'
              disabled={loading} 
              className='mt-3
                      py-2 px-8
                      bg-[rgba(138,43,226,0.5)]
                      rounded-lg
                      text-white font-bold
                      inline-block
                      cursor-pointer
                      shadow-[0_0_3px_rgba(255,255,255,0.15),0_0_3px_rgba(138,43,226,0.3)]
                      transition-all duration-300 ease-in-out
                      hover:bg-transparent
                  '
            >
              {loading ? "Sending..." : "Send message" }
            </button>
          </form>
 

        </motion.div>
  
        {/* <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div> */}
                 <Alert
  show={alert.show}
  type={alert.type}
  message={alert.message}
  onClose={() => setAlert({ ...alert, show: false })}
/>
      </div>
      </>
    );
}

export default ContactMe;
