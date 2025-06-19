'use client'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import PropTypes from "prop-types";
import { faAsymmetrik } from "@fortawesome/free-brands-svg-icons";
import { FaCalendarAlt, FaCar, FaComments, FaPills, FaShoppingBag, FaUserTie } from "react-icons/fa";

const servicesList = [
  { icon: <FaComments  color="#A9C7C5"/>, title: 'Free Consultation', desc: 'All consultations are free of charge.' },
  { icon: <FaCalendarAlt color="#A9C7C5"/>, title: 'Coordination', desc: 'We confirm appointments and schedules.' },
  { icon: <FaCar color="#A9C7C5" />, title: 'VIP Transport', desc: 'Airport pickup in a luxury car.' },
  { icon: <FaUserTie color="#A9C7C5"/>, title: 'Personal Manager', desc: 'You’ll be assigned a personal assistant.' },
  { icon: <FaPills color="#A9C7C5"/>, title: 'Treatment Support', desc: 'We help with all required medical needs.' },
  { icon: <FaShoppingBag color="#A9C7C5"/>, title: 'Shopping & Tour', desc: 'Relax and explore with translation help.' },
];

const ServiceItem = ({ service }: any) => (
	<div className="bg-white dark:bg-slate-800 shadow h-full p-3 md:mt-4 transform transition-transform duration-300 hover:scale-105">
		<div className="p-4 lg:p-8">
			<div className="text-[40px] text-blue-600 mb-2">
      <div className="text-4xl mb-4">{service.icon}</div>
			</div>
			<h5 className="text-xl font-medium my-6">{service.title}</h5>
			<p className="opacity-75 mt-4">{service.desc}</p>
		</div>
	</div>
);

ServiceItem.propTypes = {
	service: PropTypes.object.isRequired,
};

function ShapeOne() {
	return (
		<svg
			className="absolute -bottom-[20%] left-0 -z-[1]"
			width="405"
			height="626"
			viewBox="0 0 405 626"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="-302.65"
				y="296.986"
				width="433.92"
				height="140"
				rx="73.8464"
				transform="rotate(-33.796 -302.65 296.986)"
				fill="#0641c9"
				fillOpacity="0.5"
			/>
			<rect
				x="-315"
				y="502.403"
				width="666.584"
				height="140"
				rx="73.8464"
				transform="rotate(-33.796 -315 502.403)"
				fill="#E2CFC9"
				fillOpacity="0.5"
			/>
		</svg>
	);
}

function ShapeTwo() {
	return (
		<svg
			className="absolute -top-[20%] right-0 -z-[1]"
			width="340"
			height="658"
			viewBox="0 0 495 778"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="389" cy="389" r="389" fill="#0641c9" fillOpacity="0.19" />
		</svg>
	);
}

const fadeInVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
};

export default function Services()  {
	return (
		<section className="ezy__service20 light py-14 md:py-24 bg-gray-50 dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1] overflow-hidden">
			<ShapeOne />
			<ShapeTwo />

			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6">
					<motion.div
						className="col-span-12 md:col-span-4"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInVariants}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-3xl md:text-[40px] font-bold leading-normal mb-4">
							Your Health, Our Priority. Experience Excellence with MediHelp Korea.
						</h2>
						<p className="text-[17px] leading-normal opacity-80">
							We provide personalized healthcare services, ensuring your journey 
							to wellness is seamless and stress-free. From consultations to 
							treatment, we are here to support you every step of the way.
						</p>
						</motion.div>
					<div className="col-span-12 md:col-span-8">
						<div className="grid grid-cols-2 gap-6 gap-x-5">
							<div className="col-span-2 md:col-span-1">
								{servicesList?.slice(0, 3).map((service, i) => (
									<motion.div
										key={i}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										variants={fadeInVariants}
										transition={{ duration: 0.8, delay: i * 0.2 }}
									>
										<ServiceItem service={service} />
									</motion.div>
								))}
							</div>

							<div className="col-span-2 md:col-span-1 md:mt-12">
								{servicesList.slice(3, 6).map((service, i) => (
									<motion.div
										key={i}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										variants={fadeInVariants}
										transition={{ duration: 0.8, delay: i * 0.2 }}
									>
										<ServiceItem service={service} />
									</motion.div>
								))}
							</div>
              
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
