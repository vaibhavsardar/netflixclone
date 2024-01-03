import React, { useState } from 'react'
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
    const [showCurrentAns, setShowCurrentAns] = useState(null);


    const questions = [
        {
          ques: "What is Netflix?",
          ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
        },
        {
          ques: "How much does Netflix cost",
          ans: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
        },
        {
          ques: "What can I watch on Netflix?",
          ans: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      
          You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
        },
        {
          ques: "How do I cancel?",
          ans: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
        },
        {
          ques: "What can I watch on Netflix?",
          ans: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
        },
        {
          ques: "Is Netflix good for kids?",
          ans: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
      
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
        },
      ];

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <main>
        <div className="bg-[#000000]">
          {/* <UnauthBanner router={router} /> */}
          <div className="">
            <div className="flex flex-col h-[85vh] lg:h-[95vh] text-white px-8 sm:px-14 md:px-28 lg:px-48 xl:px-80 mt-3 sm:mt-14">
              <h1 className="mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-bold text-center px-14 md:px-0">
                Frequently asked questions
              </h1>
              {questions.map((item, index) => (
                <div className="flex flex-col gap-3">
                  <div
                    onClick={() => setShowCurrentAns(showCurrentAns === index ? null : index)}
                    className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer"
                  >
                    <h2>{item.ques}</h2>
                    <PlusIcon className="h-7 w-7" color="white" />
                  </div>
                  {showCurrentAns === index && (
                    <div className="p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer">
                      {item.ans}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </motion.div>
      
    </>
  )
}

export default FAQ;
