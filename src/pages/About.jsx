import { FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";
export const About = () => {
  return (
    <section className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <header className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="font-milonga text-5xl font-semibold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="font-caveat text-3xl font-bold text-gray-500 max-w-xl">
              OnlineMarkt is dedicated to providing the best online shopping
              experience. Our mission is to bring quality products to your
              doorstep with ease and trust.
            </p>
          </div>
          {/* <div className="hidden md:block">
            <img
              src="/about-hero.jpg"
              alt="About Us"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div> */}{" "}
        </header>

        {/* Core Values / Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="p-5 rounded-full bg-sky-100 text-sky-600">
              <FaUsers size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Our Team</h3>
            <p className="text-gray-500">
              A dedicated team of professionals committed to excellence.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="p-5 rounded-full bg-sky-100 text-sky-600">
              <FaLightbulb size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
            <p className="text-gray-500">
              Constantly evolving to bring innovative solutions to our
              customers.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="p-5 rounded-full bg-sky-100 text-sky-600">
              <FaGlobe size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Global Reach
            </h3>
            <p className="text-gray-500">
              Serving customers around the world with reliable service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
