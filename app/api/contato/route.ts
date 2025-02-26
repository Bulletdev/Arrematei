import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { nome, email, empresa, assunto, mensagem } = await request.json()

  // Configurar o transporter do Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Enviar o e-mail
    await transporter.sendMail({
      from: `"Formulário de Contato Arrematei" <${process.env.EMAIL_USER}>`,
      to: "contato@michaelbullet.com",
      subject: `Novo contato: ${assunto}`,
      text: `
        Nome: ${nome}
        Email: ${email}
        Empresa: ${empresa}
        Assunto: ${assunto}
        Mensagem: ${mensagem}
      `,
      html: `
        <h1>Novo contato do site Arrematei</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return NextResponse.json({ success: false, error: "Erro ao enviar mensagem" }, { status: 500 })
  }
}

