"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientNavbar() {
  const pathname = usePathname();

  // Vérifie que pathname n'est pas null
  const isProductPage = pathname && pathname.startsWith("/[]/");

  return !isProductPage ? <Navbar /> : null;
}
