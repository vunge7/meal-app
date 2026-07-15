import Link from "next/link";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";


export const Header = () => {
    return (
        <nav className="flex items-center  gap-6 justify-start sm:justify-center  bg-primary py-2  sm:px-4 px-6">
             <button className="sm:hidden">
                <MdMenu size={24} />
             </button>
            <ul className="flex gap-4  items-center">

                <li className="my-2">
                    <Link href="/" className="border-2 rounded-md py-1 px-2 font-bold">
                        MEAL
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <Link href="/">Meu cardápio</Link>
                </li>
                <li className="hidden sm:block">
                    <Link href="/meals">Pratos</Link>
                </li>
                <li className="hidden sm:block">
                    <Link href="https://codarse.com" target="_blank" className="flex gap-1 items-center">
                        Blog
                        <MdOutlineOpenInNew />
                    </Link>
                </li>

            </ul>

            <h1 className = "sm:hidden">Meal - Página Inicial</h1>
        </nav>
    );

}