import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link
			href="https://www.flslighter.com.au"
			className="flex items-center bg-[#f7cb00] rounded-md p-2 h-[60px] w-[60px]"
		>
			<Image
				src="/logo-letters-black.png"
				alt="FLS Logo in black."
				width={55}
				height={26}
				priority
				className="object-contain"
			/>
		</Link>
	);
};
