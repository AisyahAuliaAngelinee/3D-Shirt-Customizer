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
								src="./shirt-customizer-favicon-white.png"
								alt="logo"
								className="w-24 h-auto object-contain"
							/>
						</motion.header>
						<motion.div className="home-content" {...headContainerAnimation}>
							<motion.div {...headTextAnimation}>
								<h1 className="head-text">
									SHIRT <br className="xl:block hidden" /> CUSTOMIZER
								</h1>
							</motion.div>
							<motion.div
								{...headContentAnimation}
								className="flex flex-col gap-5">
								<CustomButton
									type="filled"
									title="Start Customize"
									handleClick={() => (state.intro = false)}
									customStyles="w-fit px-4 py-2.5 font-bold text-sm"
								/>
								<p className="max-w-md font-normal text-white">
									created by <strong>Aisyah Aulia Angelinee</strong> with{" "}
									<strong>three.js</strong>
								</p>
							</motion.div>
						</motion.div>
					</motion.section>
				)}
			</AnimatePresence>
		</>
	);
};

export default Home;
