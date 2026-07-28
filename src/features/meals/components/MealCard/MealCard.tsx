import Image from "next/image";

interface MealProps {
    title: string;
    tag: string;
    badge: string | null;
    description: string;
    price: number | string;
    imageUrl?: string;
}

export const MealCard = ({
    title,
    tag,
    badge,
    description,
    price,
    imageUrl = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop", // Imagem padrão
}: MealProps) => {
    return (
        <section className="w-full max-w-4xl">
            <article
                className="overflow-hidden rounded-[28px] border border-white/10 bg-paper text-white shadow-[0_15px_50px_-15px_rgba(5,6,61,0.5)] transition-transform duration-300 hover:-translate-y-1">
                <div className="grid md:grid-cols-[240px_1fr]">

                    {/* CONTAINER DA IMAGEM E TAG (MANTIDO) */}
                    <div className="relative min-h-56 w-full p-6 md:min-h-full">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 240px"
                            className="object-cover"
                            priority
                        />

                        {/* Sombra escura na imagem para garantir a leitura da tag */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Badge Chef Special (Texto claro mantido aqui) */}
                        <div className="relative z-10 flex h-full items-end">
                            <span
                                className="rounded-full bg-primary/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-primary-contrast backdrop-blur-md border border-white/10">
                                {tag}
                            </span>
                        </div>
                    </div>

                    {/* CONTEÚDO DO PRATO - CORRIGIDO PARA VISIBILIDADE */}
                    <div className="flex flex-col justify-between gap-6 p-6 md:p-8">
                        <div className="space-y-3">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                {/* TÍTULO CORRIGIDO: Era text-background (claro), agora text-primary (escuro) */}
                                <h2 className="text-2xl font-extrabold tracking-tight text-primary">
                                    {title}
                                </h2>

                                {/* BADGE POPULAR CORRIGIDO: Era bg-background (claro), agora bg-primary/10 (escuro suave) */}
                                <span
                                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                    {badge}
                                </span>
                            </div>

                            {/* DESCRIÇÃO CORRIGIDA: Era text-white/80 (quase invisível), agora text-text-secondary (escuro) */}
                            <p className="max-w-2xl text-sm leading-6 text-text-secondary">
                                {description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 border-t border-primary/10 pt-4">
                            <div className="flex items-baseline gap-1">
                                {/* PREÇO CORRIGIDO: Era text-background (claro), agora text-primary (escuro) */}
                                <strong className="text-3xl font-black text-primary">{price}</strong>
                                {/* MOEDA CORRIGIDA: Era text-white/70 (claro), agora text-primary/70 (escuro) */}
                                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">
                                    KZ
                                </span>
                            </div>

                            {/* BOTÃO VER DETALHES CORRIGIDO: Invertido para Fundo Escuro e Texto Claro */}
                            <button
                                className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-contrast transition-colors hover:bg-primary/90">
                                Ver detalhes
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};