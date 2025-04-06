import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<Header />
				<main> {children} </main>
				<Footer />
			</body>
		</html>
	)
}