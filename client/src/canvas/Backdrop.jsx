import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
	const shadows = useRef();

	return (
		<>
			<AccumulativeShadows
				ref={shadows}
				temporal
				frames={120}
				alphaTest={0.9}
				scale={10}
				rotation={[Math.PI / 2, 0, 0]}
				position={[0, 0, -0.14]}>
				<RandomizedLight
					amount={4}
					radius={9}
					intensity={1}
					ambient={0.5}
					position={[0, 10, 0]}
				/>
				<RandomizedLight
					amount={4}
					radius={9}
					intensity={1}
					ambient={0.5}
					position={[5, 5, -10]}
				/>
				<RandomizedLight
					amount={4}
					radius={9}
					intensity={0.8}
					ambient={0.7}
					position={[-5, 5, -9]}
				/>
			</AccumulativeShadows>
		</>
	);
};

export default Backdrop;
