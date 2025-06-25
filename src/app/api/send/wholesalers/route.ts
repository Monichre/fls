import WholesalerEmailTemplate from "../../../../../emails/templates/wholesaler-email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

	console.log("🚀 ~ POST ~ request:", request)

	try {
		// Validate content type
		const contentType = request.headers.get("content-type");

		console.log("🚀 ~ POST ~ contentType:", contentType)

		if (!contentType?.includes("application/json")) {
			return Response.json({ 
				error: "Content-Type must be application/json" 
			}, { status: 400 });
		}

		const body = await request.json();
		console.log("🚀 ~ body:", body);

		// Validate required fields
		if (!body.name || !body.companyName || !body.businessEmail) {
			return Response.json({ 
				error: "Missing required fields: name, companyName, businessEmail" 
			}, { status: 400 });
		}

		const { data, error } = await resend.emails.send({
			from: "Sales Team <sales@gocounterculture.com>",
			to: [body.businessEmail],
			subject: "Welcome to FLS USA, a Counter Culture Brand",
			react: WholesalerEmailTemplate({
				name: body.name,
				companyName: body.companyName,
				businessEmail: body.businessEmail,
				businessType: "wholesaler",
				phoneNumber: body.phoneNumber || null,
				
			}),
		});

		console.log("🚀 ~ POST ~ error:", error);
		console.log("🚀 ~ POST ~ data:", data);

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		console.error("❌ Wholesaler email API error:", error);
		return Response.json({ 
			error: error instanceof Error ? error.message : "Unknown error" 
		}, { status: 500 });
	}
}
