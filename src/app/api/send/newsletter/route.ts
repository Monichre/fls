import { Resend } from "resend";
import { NewsletterEmailTemplate } from "@/components/emails/newsletter-email-template";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();
		console.log("🚀 ~ body:", body);

		const { data, error } = await resend.emails.send({
			from: "Team <team@flsusa.shop>",
			to: [body.email],
			subject: "Welcome to the FLS USA Newsletter",
			react: NewsletterEmailTemplate({ name: body.name }),
		});

		console.log("🚀 ~ data:", data);

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
