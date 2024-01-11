import styles from './card.module.css';

export default async function Card() {
	const cards = await fetch('http://localhost:5114/api/Destino').then(res => res.json());
	console.log(cards);

	return (
		<div className={styles.container}>
			{cards?.map((card) => (
				<div key={card.id} className={styles.card}>
					<img src={card.imgurl} />
					<div className={styles.card_title}>
						<p>{card.nome}</p>
					</div>
					<div className={styles.card_description}>
						<p>{card.descricao}</p>
					</div>
				</div>
			))}
		</div>
	)
}

