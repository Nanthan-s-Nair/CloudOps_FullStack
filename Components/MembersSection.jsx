"use client"
import React, { useState, useRef } from "react";
import MemberCard from "./MemberCard";
import { motion, useInView } from "framer-motion";
const MemberTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
const membersData = [
  {
    id: 1,
    title: "Member 1",
    description: "Member 1 description",
    image: "/images/members/1.png",
    tag: ["Leads", "Other Members"],
    gitUrl: "/",
  },
  {
    id: 2,
    title: "Member 2",
    description: "Member 2 description",
    image: "/images/members/2.png",
    tag: ["Leads", "Web"],
    gitUrl: "/",
  },
  {
    id: 3,
    title: "Member 3",
    description: "Member 3 description",
    image: "/images/members/3.png",
    tag: ["Leads", "Other Members"],
    gitUrl: "/",
  },
  {
    id: 4,
    title: "Member 4",
    description: "Member 4 description",
    image: "/images/members/4.png",
    tag: ["Leads", "Mobile"],
    gitUrl: "/",
  },
  {
    id: 5,
    title: "Member 5",
    description: "Member 5 description",
    image: "/images/members/5.png",
    tag: ["Leads", "Other Members"],
    gitUrl: "/",
  },
  {
    id: 6,
    title: "Member 6",
    description: "Member 6 description",
    image: "/images/members/6.png",
    tag: ["Leads", "Other Members"],
    gitUrl: "/",
  },
];
const MembersSection = () => {
  const [tag, setTag] = useState("Leads");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredMembers = membersData.filter((member) =>
    member.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="members">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Core Committee
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <MemberTag
          onClick={handleTagChange}
          name="Leads"
          isSelected={tag === "Leads"}
        />
        <MemberTag
          onClick={handleTagChange}
          name="Other Members"
          isSelected={tag === "Other Members"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredMembers.map((member, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <MemberCard
              key={member.id}
              title={member.title}
              description={member.description}
              imgUrl={member.image}
              gitUrl={member.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default MembersSection;
