import { WholesalerEmailTemplate } from "@/components/emails/wholesaler-email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();
		console.log("🚀 ~ body:", body);

		const { data, error } = await resend.emails.send({
			from: "Team <team@flsusa.shop>",
			to: [body.businessEmail],
			subject: "Welcome to FLS USA",
			react: WholesalerEmailTemplate({
				name: body.name,
				companyName: body.companyName,
				businessEmail: body.businessEmail,
				businessType: body.businessType,
			}),
		});

		console.log("🚀 ~ POST ~ error:", error);
		console.log("🚀 ~ POST ~ data:", data);

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
