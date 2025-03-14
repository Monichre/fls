export const Copyright = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="copyright">
			<p className="text-base text-white">
				© {currentYear} By FLS Trio Trading
			</p>
		</div>
	);
};
