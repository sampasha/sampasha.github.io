import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} 💽
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort help / enquiry, shoot a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>{" "}
                and I'll get back.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to chat with you.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1200px-Apache_Spark_logo.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://miro.medium.com/max/1400/1*KlOEZYeYek_7q3x2SvCVFg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="data:image/png;base64,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"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://webapp.io/blog/content/images/2019/11/postgres.png"
                className="h-20 w-20 mx-4 my-4"
              />
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
