import Link from "next/link";
import { MdMenu } from "react-icons/md";

const NavPill = ({ href, label }: { href: string; label: string }) => {
    return (
        <Link
            href={href}
            className="rounded-b-md border border-white/15
             bg-black px-2.5 py-1.5 text-xs font-semibold
              text-accent transition-all duration-200
                no-underline  sm:text-sm"
        >
            {label}
        </Link>
    );
};

export const Header = () => {
    return (
        <header className="fixed top-12 z-50 w-full  px-[5px] pt-2 sm:px-[6px] sm:pt-3">
            <nav className="mx-auto flex w-[calc(100%-0px)] max-w-[1200px] items-center justify-between rounded-[18px] border border-white/15 bg-primary/95 px-2.5 py-2 shadow-[0_12px_40px_-18px_rgba(5,6,61,0.85)] backdrop-blur-sm sm:px-4">
                <button className="rounded-full bg-white/10 p-2 text-primary-contrast sm:hidden">
                    <MdMenu size={22} />
                </button>

                <div className="flex items-center gap-2 sm:gap-3">
                    <Link
                        href="/meals"
                        className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-black tracking-[0.18em] text-primary-contrast sm:text-sm"
                    >
                        MUSE Jidow Restaurante
                    </Link>

                    <div className="hidden items-center gap-2 sm:flex">
                        <NavPill href="/" label="Cadápio" />
                        <NavPill href="/meals" label="Carnes" />
                        <NavPill href="/meals" label="Peixes" />
                        <NavPill href="/meals" label="Sobremesas" />
                         <NavPill href="/meals" label="Bebidas" />
                    </div>
                </div>
                <h1 className="text-xs font-bold text-primary-contrast sm:hidden">Meal</h1>
            </nav>
        </header>
    );
}