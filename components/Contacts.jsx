import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import ZoomIn from './Motions/ZoomIn';
import FadeIn from './Motions/FadeIn';

const Contacts = () => {
  return (
    <section id="contacts">
      <h1 className="px-2 font-black text-gray-400 lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] mt-20 uppercase tracking-wider">
        Contacts
      </h1>
      <FadeIn>
        <div className="mt-12 flex md:flex-row justify-between flex-col gap-10 w-[96%] mx-auto">
          <address className="bg-tertiary opacity-70 p-8 rounded-2xl flex flex-col justify-center gap-4">
            <div className="flex gap-4 items-center lg:text-[30px] sm:text-[25px] text-[20px] text-gray-400">
              <IoLocationSharp className="text-secondary" />
              <a
                href="https://goo.gl/maps/PEfPLzY3pWiXsGXv8"
                target="_blank"
                className="hover:text-primary"
              >
                Lviv, Ukraine
              </a>
            </div>
            <div className="flex gap-4 items-center lg:text-[30px] sm:text-[25px] text-[20px] text-gray-400">
              <AiOutlineMail className="text-secondary" />
              <a
                href="mailto:pivtoranis87@gmail.com"
                className="hover:text-primary"
              >
                pivtoranis87@gmail.com
              </a>
            </div>
            <div className="flex gap-4 items-center lg:text-[30px] sm:text-[25px] text-[20px] text-gray-400">
              <AiFillLinkedin className="text-secondary" />
              <a
                href="https://www.linkedin.com/in/volodymyr-pivtoranis/"
                target="_blank"
                className="hover:text-primary"
              >
                volodymyr-pivtoranis
              </a>
            </div>
            <div className="flex gap-4 items-center lg:text-[30px] sm:text-[25px] text-[20px] text-gray-400">
              <AiFillGithub className="text-secondary" />
              <a
                href="https://github.com/PivtoranisV"
                target="_blank"
                className="hover:text-primary"
              >
                PivtoranisV
              </a>
            </div>
          </address>
          <div className="flex-[0.75] bg-tertiary opacity-70 p-8 rounded-2xl">
            <h3 className="text-center font-black text-secondary text-[35px] uppercase tracking-wider">
              What Can I Do For You?
            </h3>
            <form className="mt-12 flex flex-col">
              <label className="text-white font-medium"> Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="What's your good name?"
                className="py-4 px-6 placeholder:text-gray-400 text-secondary rounded-lg outline-none border-none font-medium mb-6"
              />
              <label className="text-white font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="What's your web address?"
                className="py-4 px-6 placeholder:text-gray-400 text-secondary rounded-lg outline-none border-none font-medium mb-6"
              />
              <label className="text-white font-medium">Your Message</label>
              <textarea
                rows={5}
                name="message"
                placeholder="What you want to say?"
                className="py-4 px-6 placeholder:text-gray-400 text-secondary rounded-lg outline-none border-none font-medium mb-6"
              />
              <button
                type="submit"
                className="py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-inner shadow-secondary"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contacts;
