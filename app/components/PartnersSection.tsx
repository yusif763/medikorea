import React from "react";

const clientLogos = [
	{
		logo: "/partner2.png",
		alt: "",
	},
	{
		logo: "/partner3.png",
		alt: "",
	},
	{
		logo: "/partner4.png",
		alt: "",
	},
	{
		logo: "/partner5.png",
		alt: "",
	},
	{
		logo: "/partner6.png",
		alt: "",
	},
	{
		logo: "/partner2.png",
		alt: "",
	},
];

export default function Partners(){
	return (
		<section className="ezy__clients10 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12">
					<div className="col-span-12 xl:col-span-4 xl:pr-12 mb-6 md:mb-12">
						<h2 className="font-bold text-2xl lg:text-[45px] leading-none mb-6">
							Our Clients
						</h2>
						<p className="text-lg leading-9 opacity-70">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!It’s
							easier to reach your savings goals when you have the right savings
							account.
						</p>
					</div>
					<div className="col-span-12 xl:col-span-8">
						<div className="grid grid-cols-12 gap-6 text-center">
							<div className="col-span-12 sm:col-span-4">
								{clientLogos.slice(0, 2).map((client, i) => (
									<img
										src={client.logo}
										alt={client.alt}
										className="rounded-[30px] w-100 h-auto mb-4 lg:mb-6"
										key={i}
									/>
								))}
							</div>
							<div className="col-span-12 sm:col-span-4 md:mt-12">
								{clientLogos.slice(2, 4).map((client, i) => (
									<img
										src={client.logo}
										alt={client.alt}
										className="rounded-[30px] w-100 h-auto mb-4 lg:mb-6"
										key={i}
									/>
								))}
							</div>
							<div className="col-span-12 sm:col-span-4 md:mt-12 md:pt-12">
								{clientLogos.slice(4, 6).map((client, i) => (
									<img
										src={client.logo}
										alt={client.alt}
										className="rounded-[30px] w-100 h-auto mb-4 lg:mb-6"
										key={i}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
