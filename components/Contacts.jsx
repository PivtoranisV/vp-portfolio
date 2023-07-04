const Contacts = () => {
  return (
    <section>
      <h1 className="px-2 font-black text-gray-400 lg:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] mt-20 uppercase tracking-wider">
        Contacts
      </h1>
      <div className="mt-12 flex lg:flex-row flex-col gap-10">
        <div className="bg-tertiary opacity-70 p-8 rounded-2xl">
          <p>mobile</p>
          <p>address</p>
          <p>email</p>
        </div>
        <div className="flex-[0.75] bg-tertiary opacity-70 p-8 rounded-2xl">
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
    </section>
  );
};

export default Contacts;
