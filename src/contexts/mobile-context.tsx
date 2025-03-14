"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";

interface MobileContextType {
	isMobile: boolean;
	isTablet: boolean;
	isLandscape: boolean;
}

const MobileContext = createContext<MobileContextType>({
	isMobile: false,
	isTablet: false,
	isLandscape: false,
});

export const useMobile = () => useContext(MobileContext);

interface MobileProviderProps {
	children: ReactNode;
}

export const MobileProvider = ({ children }: MobileProviderProps) => {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isLandscape, setIsLandscape] = useState(false);

	useEffect(() => {
		// Only run on client
		if (typeof window === "undefined") return;

		const checkDevice = () => {
			setIsMobile(window.innerWidth < 768);
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
			setIsLandscape(window.innerWidth > window.innerHeight);
		};

		// Check on mount
		checkDevice();

		// Add mobile classes to document
		if (isMobile) {
			document.documentElement.classList.add("is-mobile-view");
		} else {
			document.documentElement.classList.remove("is-mobile-view");
		}

		// Listen for orientation and resize changes
		window.addEventListener("resize", checkDevice);
		window.addEventListener("orientationchange", checkDevice);

		return () => {
			window.removeEventListener("resize", checkDevice);
			window.removeEventListener("orientationchange", checkDevice);
		};
	}, [isMobile]);

	return (
		<MobileContext.Provider value={{ isMobile, isTablet, isLandscape }}>
			{children}
		</MobileContext.Provider>
	);
};

// Add index.ts export
export * from "./mobile-context";
