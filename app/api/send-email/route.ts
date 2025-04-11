import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { name, email, message } = await req.json()

    try {
        const data = await resend.emails.send({
            from: 'JARVIS Assistant <onboarding@resend.dev>',
            to: ['xanmoy.tsx@gmail.com'],
            subject: `Sir, You have a New message from ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
        })

        return new Response(JSON.stringify({ success: true, data }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error }), { status: 500 })
    }
}
