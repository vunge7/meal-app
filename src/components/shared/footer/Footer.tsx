'use client'

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

import logo from "@/public/images/logo.png";
import halal from "@/public/images/halal.png";

export const Footer = () => {
    return (
        <footer className="relative w-full border-t border-white/10 bg-black/80 text-amber-50 backdrop-blur-md">
            {/* Brilho sutil de fundo no topo do footer */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

            <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    
                    {/* Coluna 1: Sobre & Identidade */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Image src={logo} width={140} height={140} alt="MUSE Jidow Logo" className="h-auto w-auto" />
                        </div>
                        <p className="text-xs leading-relaxed text-gray-300/80 sm:text-sm">
                            Uma experiência gastronômica única, combinando sabores autênticos e ingredientes selecionados com certificação de qualidade.
                        </p>
                        <div className="mt-1 flex items-center gap-3">
                            <Image src={halal} width={45} height={45} alt="Certificação Halal" />
                            <span className="text-[11px] font-semibold text-amber-400/90 uppercase tracking-wider">
                                Certificado Halal
                            </span>
                        </div>
                    </div>

                    {/* Coluna 2: Navegação Rápida */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-amber-100/90 border-b border-white/10 pb-2">
                            Navegação
                        </h3>
                        <ul className="flex flex-col gap-2 text-xs sm:text-sm text-gray-300/80">
                            <li>
                                <Link href="/" className="hover:text-amber-400 transition-colors duration-200">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="/meals" className="hover:text-amber-400 transition-colors duration-200">
                                    Cardápio Completo
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-amber-400 transition-colors duration-200">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-amber-400 transition-colors duration-200">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Horário de Funcionamento */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-amber-100/90 border-b border-white/10 pb-2">
                            Funcionamento
                        </h3>
                        <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300/80">
                            <div className="flex items-start gap-2.5">
                                <FaClock className="mt-0.5 text-amber-400 shrink-0" size={14} />
                                <div>
                                    <p className="font-semibold text-amber-50">Domingo - Sábado</p>
                                    <p className="text-gray-400">08:00 - 22:30</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    {/* Coluna 4: Contato e Redes Sociais */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-amber-100/90 border-b border-white/10 pb-2">
                            Localização & Contato
                        </h3>
                        <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300/80">
                            <div className="flex items-center gap-2.5">
                                <FaMapMarkerAlt className="text-amber-400 shrink-0" size={14} />
                                <span>Av. Vanduném Loy ,Kilamba Kiaxi, Golf 2 - Triângulo</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <FaPhoneAlt className="text-amber-400 shrink-0" size={14} />
                                <span>+244 922 426 262</span>
                            </div>
                        </div>

                        {/* Ícones das Redes Sociais */}
                        <div className="mt-2 flex items-center gap-3">
                      
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white/15 bg-white/5 p-2.5 text-amber-50 transition-all duration-200 hover:bg-amber-400 hover:text-black hover:scale-110"
                                aria-label="Facebook"
                            >
                                <FaFacebookF size={16} />
                            </a>
                            <a
                                href="https://wa.me/244922426262"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white/15 bg-white/5 p-2.5 text-amber-50 transition-all duration-200 hover:bg-amber-400 hover:text-black hover:scale-110"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp size={16} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Linha Divisória de Direitos Autorais */}
                <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-400">
                    <p>
                        © {new Date().getFullYear()} <span className="font-semibold text-amber-100">MUSE Jidow Restaurante</span>. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};