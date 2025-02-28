import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "A plataforma Arrematei transformou minha experiência com licitações. Consegui encontrar exatamente o que procurava a um preço incrível!",
      author: "Maria De Lourdes",
      role: "Empresária",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Participar de licitações nunca foi tão fácil e seguro. " +
          "A interface é intuitiva e o suporte ao cliente é excepcional.",
      author: "Joelcio Silva",
      role: "Investidor",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Já participei de diversos pregões pela plataforma e sempre tive experiências positivas. Recomendo a todos!",
      author: "Lucilia Almeida",
      role: "Licitante",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-emerald-50 max-w-2xl mx-auto">
            Histórias de sucesso de pessoas que encontraram oportunidades incríveis através da nossa plataforma.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.author}</h3>
                  <p className="text-emerald-100">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-emerald-50">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

