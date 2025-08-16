'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MenuLateral = () => {
    const pathname = usePathname();
    const[colapsado, setColapsado] = useState<boolean>(false)

    return (
        <aside style={{ width: colapsado? "60px" : "180px", 
        background: "#1976d2", color: "white", 
        borderRight: "1px solid #ccc", 
        padding: "20px",
        transition: "width 0.3 ease",
        display: "flex",
        flexDirection: "column",
        alignItems: colapsado ? "center" : "flex-start" }}>

            <button
            onClick={() => setColapsado (!colapsado)}
             style={{
                background: "transparent",
                color: "white",
                border: "none",
                cursor: "pointer",
                alignSelf: colapsado ? "center" : "flex-end",
                marginBottom: "20px"
            }}>
                {colapsado ? ">" : "<"}
            </button>

            <h3>Menu</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "100px"}}>
                <li style={{
                    padding: "10px",
                    background: pathname === "/" ? "#1565c0" : "transparent",
                    borderRadius: "10px",
                    textAlign: colapsado ? "center" : "left"
                }}>
                    <Link href={"/"} 
                    style={{ 
                        textDecoration: "none", color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: colapsado ? "center" : "flex-start",
                        gap: colapsado ? 0 : "10px"
                     }}>🏠 {colapsado ? " ": "Home"}</Link>
                </li>

                <li style={{
                    padding: "10px",
                    background: pathname === "/usuarios" ? "#1565c0" : "transparent",
                    borderRadius: "10px",
                    textAlign: colapsado ? "center" : "left"
                }}>
                    <Link href={"/usuarios"}
                     style={{
                     textDecoration: "none",
                     color: "inherit" }}>👤{colapsado ? "" : "Usuario"}</Link>
                </li>

            </ul>
        </aside>
    )
}

export default MenuLateral;