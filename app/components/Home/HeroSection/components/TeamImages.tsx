import React from "react";

const TeamImages = () => {
  const team = [
    {
      name: "Vineet Sharma",
      image: "/team/VineetSharma.png",
    },
    {
      name: "Karan Arora",
      image: "/team/KaranArora.png",
    },
    {
      name: "Samarth Srivastava",
      image: "/team/SamarthSrivastava.jpeg",
    },
    {
      name: "Karthik Nair",
      image: "/team/KarthikNair.jpg",
    },
  ];

  return (
    <>
      {team.map((member, index) => {
        return (
          <div
            key={index}
            className={`team-member relative transition-all duration-700 ease-in-out border-white border-[0.25rem] rounded-full`}
            // style={{ transform: `translateX(-${index * 2}rem)` }}
          >
            <img
              src={member.image}
              alt={member.name + " Photo"}
              className="team-member-image rounded-full transition-all duration-300 ease-in-out"
              draggable={false}
            />
          </div>
        );
      })}
    </>
  );
};

export default TeamImages;
