import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../Component";

const Home = () => {
	const snap = useSnapshot(state);

	return (
		<>
			<AnimatePresence>
				{snap.intro && (
					<motion.section className="home" {...slideAnimation("left")}>
						<motion.header {...slideAnimation("down")}>
							<img
								src="./threejs.png"
								alt="logo"
								className="w-8 h-8 object-contain"
							/>
						</motion.header>
						<motion.div className="home-content" {...headContainerAnimation}>
							<motion.div {...headTextAnimation}>
								<h1 className="head-text">
									KAOS <br className="xl:block hidden" /> OLAHRAGA
								</h1>
							</motion.div>
							<motion.div
								{...headContentAnimation}
								className="flex flex-col gap-5">
								<p className="max-w-md font-normal text-gray-600">
									Celebrate the sport you love with a bit of throwback style.
									Made from{" "}
									<strong>heavyweight cotton and cut for comfort</strong>, it
									has a structured feel and relaxed Max90 fit that'll have you
									looking like an all-star.
								</p>

								<CustomButton
									type="filled"
									title="Customize"
									handleClick={() => (state.intro = false)}
									customStyles="w-fit px-4 py-2.5 font-bold text-sm"
								/>
							</motion.div>
						</motion.div>
					</motion.section>
				)}
			</AnimatePresence>
		</>
	);
};

export default Home;
