export const SocialLinks = () => {
	const socialLinks = [
		{
			name: "Facebook",
			url: "https://www.facebook.com/people/FLS-Lighters/61561075404844/",
		},
		{
			name: "Instagram",
			url: "https://www.instagram.com/fls.lighters/",
		},
		{
			name: "TikTok",
			url: "https://www.tiktok.com/@fls.lighters",
		},
	];

	return (
		<div className="social-links">
			<h3 className="text-white font-medium mb-4">Follow us on</h3>
			<ul className="space-y-2">
				{socialLinks.map((link) => (
					<li key={link.name}>
						<a
							href={link.url}
							target="_blank"
							rel="noreferrer noopener"
							className="text-white hover:text-blue-300 text-base transition-colors duration-200"
						>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
