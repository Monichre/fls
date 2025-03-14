"use client";

import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
	return (
		<header className="w-full bg-transparent fixed top-0 left-0 right-0 z-50 p-8">
			<div className="flex justify-start items-center w-full pr-12">
				<Logo />
				<Navigation />
			</div>
		</header>
	);
};
