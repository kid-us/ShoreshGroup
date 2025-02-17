import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Footer from "../components/Footer/Footer";
import { contact } from "../assets";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useEffect, useState } from "react";

const schema = z.object({
  email: z.string().email({ message: "Email address required" }),
  location: z.string().min(3, { message: "Email address required" }),
  address: z.string().min(3, { message: "Email address required" }),
  message: z.string().min(10, { message: "Email address required" }),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [title] = useState<string>("Contact US");
  useDocumentTitle(title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      <Navbar bg />

      <div className="pt-20">
        <Container>
          <p className="text-sm uppercase text-gray-500 pt-8">Contact us</p>
          <div className="grid lg:grid-cols-5 mt-10 gap-x-20">
            <div className="lg:col-span-3">
              <h1 className="font-semibold lg:text-4xl text-3xl lg:mb-10">
                Get in Touch with Shoresh Group:
              </h1>

              <p className="text-gray-800 font-medium">
                We’re here to answer your questions, discuss investment
                opportunities, and explore ways to collaborate. Whether you're
                an investor, partner, or just looking to learn more about
                Shoresh Group, we’d love to hear from you.
              </p>

              <div className="mt-5">
                <p className="mb-1">
                  <span className="font-semibold text-lg bi-geo-alt-fill">
                    Address :
                  </span>{" "}
                  1230 E.Kiowa Street Colorado Springs, CO 80909
                </p>
                <p className="mb-1">
                  <span className="font-semibold text-lg bi-building-fill">
                    {" "}
                    Office :
                  </span>{" "}
                  #:(248)-450-4836
                </p>
                <p className="mb-1">
                  <span className="font-semibold text-lg bi-envelope-fill">
                    {" "}
                    Email :
                  </span>{" "}
                  @shoresh-group.com
                </p>

                <img
                  src={contact}
                  alt="Contact"
                  className="lg:mt-10 mt-5 rounded-xl"
                />
              </div>
            </div>

            <div className="lg:col-span-2 lg:mt-0 mt-8">
              <p className="text-lg mb-5 text-gray-800">
                Fill out the form below, and we’ll get back to you as
                soon as possible.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    className="px-5 w-full h-13 rounded-lg mt-2 focus:outline-none border border-gray-500"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div className="mb-3">
                  <label
                    htmlFor="location"
                    className="block text-sm text-gray-600"
                  >
                    Location
                  </label>
                  <input
                    {...register("location")}
                    type="location"
                    name="location"
                    className="px-5 w-full h-13 rounded-lg mt-2 focus:outline-none border border-gray-500"
                  />
                  {errors.location && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.location.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label
                    htmlFor="address"
                    className="block text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    {...register("address")}
                    type="text"
                    name="address"
                    className="px-5 w-full h-13 rounded-lg mt-2 focus:outline-none border border-gray-500"
                  />
                  {errors.address && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="">
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="px-5 w-full rounded-lg mt-2 focus:outline-none border border-gray-400 resize-none h-44"
                  ></textarea>
                </div>

                <button className="bg-secondary font-semibold uppercase text-white transition-all duration-200 shadow-[3px_3px_0px_black] hover:shadow-none h-11 active:shadow-none rounded w-full mt-8">
                  Send
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
