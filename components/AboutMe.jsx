import Reveal from './Reveal';
import ZoomIn from './ZoomIn';
import { style } from '@/app/styles/styles';

const AboutMe = () => {
  return (
    <div>
      <h1 className="font-black text-gray-400 lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] text-center mb-20">
        Introduction
      </h1>

      <div>
        <Reveal width="w-fit">
          <h2 className={style.mainText}>A Love for Technology Ignites</h2>
        </Reveal>
        <ZoomIn>
          <p className={`${style.subText} text-center`}>
            Once upon a time, in the picturesque town of Lviv in western
            Ukraine, I discovered my deep-rooted love for technology. It all
            began when I laid my hands on my first PC, and from that moment, I
            was captivated by the world of programming.
          </p>
        </ZoomIn>
      </div>
      <div>
        <Reveal width="w-fit">
          <h2 className={style.mainText}>Following Passions Abroad</h2>
        </Reveal>
        <ZoomIn>
          <p className={`${style.subText} text-center`}>
            During my university years, I even took on part-time jobs setting up
            computers, fueling my passion for the digital realm. After
            completing my studies, I embarked on a career in the banking
            industry. However, a burning desire to build my own house propelled
            me to seek new opportunities abroad.
          </p>
        </ZoomIn>
      </div>
      <div>
        <Reveal width="w-fit">
          <h2 className={style.mainText}>Embracing Innovation at Apple</h2>
        </Reveal>
        <ZoomIn>
          <p className={`${style.subText} text-center`}>
            That&apos;s when I made the life-changing decision to move to Dubai,
            a vibrant city filled with endless possibilities. I initially found
            my place in the retail sector, but my heart yearned for something
            more, something that would truly allow me to immerse myself in the
            world of technology. Fortune smiled upon me when I landed a job at
            Apple, one of the most renowned companies in the world. Though I
            wasn&apos;t directly involved in programming at that time, I found
            myself surrounded by innovation and an unwavering passion for
            technology.
          </p>
        </ZoomIn>
      </div>
      <div>
        <Reveal width="w-fit">
          <h2 className={style.mainText}>From Hobby to Deep Interest</h2>
        </Reveal>
        <ZoomIn>
          <p className={`${style.subText} text-center`}>
            Last year, driven by my insatiable curiosity and passion for all
            things digital, I embarked on a self-learning journey to master the
            art of website development. With unwavering determination, I delved
            deep into HTML, CSS, and JavaScript, laying the foundation for my
            newfound love for web development.
          </p>
        </ZoomIn>
      </div>
      <div>
        <Reveal width="w-fit">
          <h2 className={style.mainText}>
            Creating Meaningful Experiences with Code
          </h2>
        </Reveal>
        <ZoomIn>
          <p className={`${style.subText} text-center`}>
            What started as a hobby soon evolved into a profound interest,
            propelling me to undertake various pet projects where I focused on
            mastering JavaScript and even ventured into the realms of React.js.
            I found immense joy and fulfillment in creating web applications
            from scratch, breathing life into my ideas and bringing them to
            fruition.
          </p>
        </ZoomIn>
      </div>
      <div>
        <Reveal width="w-fit">
          <h2 className={style.mainText}>Building a Promising Future</h2>
        </Reveal>
        <ZoomIn>
          <p className={`${style.subText} text-center`}>
            Today, I am confident in my ability to build robust websites using
            React.js and have expanded my skills to include Next.js. With each
            new project, I continue to push the boundaries of what I can
            achieve, always striving for excellence in every line of code. I
            invite you to explore my portfolio, where you&apos;ll witness the
            culmination of my passion and dedication to web development.
            Together, let&apos;s create meaningful and innovative experiences on
            the digital canvas.
          </p>
        </ZoomIn>
      </div>
    </div>
  );
};

export default AboutMe;
