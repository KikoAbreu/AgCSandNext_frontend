import Link from 'next/link'

export default function Header() {
	return (
		<header className="header">
			<img src="/logoborala.png" alt="logo" />
			<ul>
				<li>
					<Link href="/Destinos">Destinos</Link>
				</li>
				<li>
					<Link href="/Pacotes">Pacotes</Link>
				</li>
				<li>
					<Link href="/Contato">Contato</Link>
				</li>
			</ul>
		</header>
	)
}
