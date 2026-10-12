'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { BlinkBlur } from "react-loading-indicators";
import { useCategories } from '@/src/hooks/useCategories';

import { MdMenu, MdClose } from "react-icons/md";
import logo from '@/public/images/logo.png';
import halal from '@/public/images/halal.png';

const NavPill = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="rounded-lg border border-white/10
             bg-black/60 px-3 py-2 text-amber-50 text-xs font-semibold
             text-accent transition-all duration-200 hover:bg-black/80
             no-underline sm:text-sm text-center"
        >
            {label}
        </Link>
    );
};

export const Header = () => {
    const { categories, loading } = useCategories();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Backdrop com Blur no Fundo da Tela */}
            <div
                onClick={() => setIsOpen(false)}
                className={`
                    fixed inset-0 z-40 bg-black/40 backdrop-blur-md sm:hidden
                    transition-opacity duration-300 ease-in-out
                    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            />

            <header className="fixed -top-12 z-50 flex w-full flex-col items-center bg-black/5 backdrop-blur-md px-[5px] pt-2 sm:px-[6px] sm:pt-3">

                <div className="-mb-10">
                    <Image src={logo} width={200} height={200} alt="logo" />
                </div>

                <nav className="relative mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-[18px] border border-white/15 bg-primary/95 px-2.5 py-2 shadow-[0_12px_40px_-18px_rgba(5,6,61,0.85)] backdrop-blur-sm sm:px-4">

                    {/* Botão de Toggle Mobile */}
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                        className="rounded-full bg-white/10 p-2 text-primary-contrast sm:hidden transition-transform active:scale-95 z-10"
                    >
                        {isOpen ? <MdClose size={22} /> : <MdMenu size={22} />}
                    </button>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <Link
                            href="/meals"
                            className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-black tracking-[0.18em] text-primary-contrast sm:text-sm"
                        >
                            MUSE Jidow Restaurante
                        </Link>

                        {/* Navegação Desktop */}
                        <div className="hidden items-center gap-2 sm:flex">
                            {!loading ? (
                                categories.map((category) => (
                                    <NavPill key={category.description} href="/meals" label={category.description} />
                                ))
                            ) : (
                                <div className="flex content-center">
                                    <BlinkBlur size="small" color={["#5071e2", "#FFB103", "#000000"]} />
                                </div>
                            )}

                             <NavPill
                            key="new-category"
                            href="/category"
                            label="Nova Categoria"
                            onClick={() => setIsOpen(false)}
                        />

                        </div>
                    </div>

                    <div className="text-xs font-bold text-primary-contrast  flex items-center gap-1 sm:gap-2">
                        <Image src={halal} width={50} height={50} alt="halal logo" />
                    </div>

                    {/* Menu Dropdown Mobile com Blur Refinado */}
                    <div
                        className={`
                            absolute top-full left-0 right-0 mt-3 flex flex-col gap-2 
                            rounded-2xl border border-white/20 bg-black/70 p-4 
                            shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:hidden
                            overflow-hidden transition-all duration-300 ease-out
                            ${isOpen
                                ? "max-h-[500px] opacity-100 translate-y-0 pointer-events-auto"
                                : "max-h-0 opacity-0 -translate-y-4 pointer-events-none p-0 border-none"
                            }
                        `}
                    >
                        {!loading ? (

                            categories.map((category) => (
                                <NavPill
                                    key={category.description}
                                    href="/meals"
                                    label={category.description}
                                    onClick={() => setIsOpen(false)}
                                />
                            ))



                        ) : (
                            <div className="flex justify-center p-2">
                                <BlinkBlur size="small" color={["#5071e2", "#FFB103", "#000000"]} />
                            </div>
                        )}

                        <NavPill
                            key="new-category"
                            href="/admin"
                            label="Nova Categoria"
                            onClick={() => setIsOpen(false)}
                        />



                    </div>
                </nav>
            </header>
        </>
    );
};