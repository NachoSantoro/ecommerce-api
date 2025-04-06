import Link from "next/link";
import styles from "./header.module.css";

function NavLogeado() {
	return (
		<ul className={`${styles.flex_horizontal} ${styles.margen_horizontal} ${styles.items_centro} ${styles.barrita_navegacion} ${styles.fondo_circular}`}>
			<li><Link href="/productos">Todos los productos</Link></li>
			<li><Link href="/profile">Mi perfil</Link></li>
			<li><Link href="/carrito">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
			</Link></li>
		</ul>
	)
}

function NavSinLog() {
	return (
		<ul className={`${styles.flex_horizontal} ${styles.margen_horizontal} ${styles.items_centro} ${styles.barrita_navegacion} ${styles.fondo_circular}`}>
			<li><Link href="/productos">Todos los productos</Link></li>
			<li><Link href="/registro">Registrarse</Link></li>
			<li><Link href="/login">Iniciar Sesión</Link></li>
			<li><Link href="/carrito">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
			</Link></li>
		</ul>
	)
}

export default function Header() {
	const estaLogeado = true //tengo que modificar esto para que la logica sea real. por ahora un bool

	return (
		<header className={`${styles.encabezado} ${styles.display_flex} ${styles.items_centro}`}>
			<div className={styles.logo}>
				<Link href="/">
					<img src="/logo.png" alt="Logo ClickCo" />
				</Link>
			</div>

			<nav className={styles.width_completo}>
				{estaLogeado ? <NavLogeado /> : <NavSinLog />}
			</nav>
		</header>
	)
}