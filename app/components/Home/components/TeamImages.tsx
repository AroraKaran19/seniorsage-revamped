import React from 'react'

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
		}
	]

  return (
    <>
			{team.map((member, index) => (
				<div key={index} className="team-member flex-1 flex justify-center items-center">
					<img src={member.image} alt={member.name+" Photo"} className="max-h-12 team-member-image rounded-full" />
				</div>
			))}
    </>
  )
}

export default TeamImages