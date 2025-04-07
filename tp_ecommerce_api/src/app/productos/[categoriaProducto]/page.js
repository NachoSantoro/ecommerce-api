'use client'
import styles from "./page.module.css";
import { useParams } from 'next/navigation'
import productos from "@/data/productos.json"; // esto nomas por ahora para probar sin bd conectada

export default function CategoriaProducto() {
	/*
		deberia ser algo asi, como base:

		const { categoriaProducto } = useParams()
		const productosFiltrados = productos.filter(p => p.categoria === categoriaProducto)

		return (
			<div>
				<h1>{categoriaProducto}</h1>
				<ul>
					{productosFiltrados.map(prod => (
						<li key={prod.id}>{prod.nombre}</li>))}
				</ul>
			</div>
		)
	*/
	return (
		<div>
		</div>
	);
}
