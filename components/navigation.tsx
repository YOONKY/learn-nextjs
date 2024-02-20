"use client";

import Link from "next/link" // 어디서 온 애임?
import { usePathname } from "next/navigation"

export default function Navigation () {
  const path = usePathname();
  console.log(path)

    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                    {path === '/' ? "v" : ""}
                </li>
                <li>
                    <Link href="/about-us">
                    About Us
                    </Link>
                    {path === '/about-us' ? "v" : ""}
                </li>
            </ul>
        </nav>
    ) 
}