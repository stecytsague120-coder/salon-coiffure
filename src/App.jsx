export default function HairSalonWebsite() {
  const services = [
    {
      title: "Braids & Knotless",
      description: "Des tresses modernes, soignées et durables pour un style élégant au quotidien.",
      price: "À partir de 15 000 FCFA",
    },
    {
      title: "Pose de perruque",
      description: "Installation, ajustement et finition naturelle pour un rendu professionnel.",
      price: "À partir de 10 000 FCFA",
    },
    {
      title: "Soin capillaire",
      description: "Lavage, traitement et hydratation pour garder des cheveux sains et brillants.",
      price: "À partir de 8 000 FCFA",
    },
    {
      title: "Coiffure événement",
      description: "Looks élégants pour mariage, anniversaire, shooting et événements spéciaux.",
      price: "Sur devis",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#d8c7b8] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Rachel Beauty Hair Studio</h1>
            <p className="text-sm text-slate-500">Salon de coiffure premium</p>
          </div>
          <nav className="hidden gap-6 md:flex text-sm font-medium">
            <a href="#services" className="hover:text-slate-600">Services</a>
            <a href="#galerie" className="hover:text-slate-600">Galerie</a>
            <a href="#apropos" className="hover:text-slate-600">À propos</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
          </nav>
          <a
            href="https://wa.me/237670000000?text=Bonjour%20je%20veux%20prendre%20rendez-vous"
            className="rounded-2xl bg-[#1f4e79] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Réserver
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7f3ee] via-white to-[#eef4fb]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex rounded-full border border-[#c8a27a] bg-white px-4 py-2 text-sm font-medium text-[#8b5e3c] shadow-sm">
              Élégance africaine • Beauté • Confiance
            </span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Une identité chic et chaleureuse, inspirée par l’élégance africaine.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Nous réalisons des coiffures modernes, raffinées et durables pour sublimer votre style.
              Réservez rapidement votre rendez-vous par WhatsApp et découvrez nos services premium.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/237670000000?text=Bonjour%20je%20veux%20prendre%20rendez-vous"
                className="rounded-2xl bg-[#1f4e79] px-6 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-0.5"
              >
                Prendre rendez-vous
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-[#c8a27a] bg-white px-6 py-4 font-semibold text-[#8b5e3c] shadow-sm transition hover:-translate-y-0.5"
              >
                Voir nos services
              </a>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-[#d8c7b8] bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-slate-500">Clientes satisfaites</p>
              </div>
              <div className="rounded-2xl border border-[#d8c7b8] bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold">4 ans</p>
                <p className="text-sm text-slate-500">D’expérience</p>
              </div>
              <div className="rounded-2xl border border-[#d8c7b8] bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold">6j/7</p>
                <p className="text-sm text-slate-500">Disponible</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
              alt="Salon de coiffure professionnel"
              className="h-[580px] w-full rounded-[32px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-5 shadow-2xl">
              <p className="text-sm text-slate-500">Adresse</p>
              <p className="font-semibold">Douala, Cameroun</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="services">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">Nos services</p>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">Des prestations pensées pour révéler votre beauté</h3>
          <p className="mt-4 text-slate-600">
            Un service soigné, une finition propre et une expérience agréable à chaque rendez-vous.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[28px] border border-[#d8c7b8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-[#e8d7c5]" />
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
              <p className="mt-5 font-semibold text-[#1f4e79]">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f4ef] py-20" id="galerie">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">Galerie</p>
              <h3 className="mt-3 text-3xl font-bold md:text-4xl">Nos réalisations</h3>
            </div>
            <a
              href="https://wa.me/237670000000?text=Bonjour%20je%20veux%20prendre%20rendez-vous"
              className="rounded-2xl border border-[#c8a27a] bg-white px-5 py-3 font-semibold text-[#8b5e3c] shadow-sm"
            >
              Réserver maintenant
            </a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Coiffure ${index + 1}`}
                className="h-80 w-full rounded-[28px] object-cover shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2" id="apropos">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8b5e3c]">À propos</p>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">Un salon pensé pour offrir beauté, confort et professionnalisme</h3>
          <p className="mt-6 leading-8 text-slate-600">
            Chez Rachel Beauty Hair Studio, nous mettons l’accent sur la qualité du service, l’écoute de la cliente
            et la précision de chaque coiffure. Notre objectif est simple : vous faire sentir belle, confiante et satisfaite.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-5">
              <h4 className="font-semibold">Accueil chaleureux</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">Un espace propre, calme et agréable pour votre moment beauté.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-5">
              <h4 className="font-semibold">Résultat haut de gamme</h4>
              <p className="mt-2 text-sm leading-7 text-slate-600">Des coiffures tendances avec une finition nette et élégante.</p>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] bg-[#5c3b25] p-8 text-white shadow-2xl" id="contact">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d7b89a]">Contact</p>
          <h3 className="mt-4 text-3xl font-bold">Réservez votre prochain rendez-vous</h3>
          <div className="mt-8 space-y-5 text-slate-200">
            <p><span className="font-semibold text-white">Téléphone :</span> +237 670 00 00 00</p>
            <p><span className="font-semibold text-white">WhatsApp :</span> +237 670 00 00 00</p>
            <p><span className="font-semibold text-white">Adresse :</span> Douala, Cameroun</p>
            <p><span className="font-semibold text-white">Horaires :</span> Lundi - Samedi, 9h00 - 19h00</p>
          </div>
          <a
            href="https://wa.me/237670000000?text=Bonjour%20je%20veux%20prendre%20rendez-vous"
            className="mt-8 inline-block rounded-2xl bg-[#1f4e79] px-6 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            Réserver sur WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-[#d8c7b8] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Rachel Beauty Hair Studio. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#galerie" className="hover:text-slate-900">Galerie</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

