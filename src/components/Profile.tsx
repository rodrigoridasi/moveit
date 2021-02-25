import styles from '../styles/components/Profile.module.css';

export function Profile() {
	return (
		<div className={styles.profileContainer}>
			<img src='https://github.com/rodrigoridasi.png' alt='Alícia Foureax' />
			<div>
				<strong>Rodrigo R. da Silva</strong>
				<p>
					<img src='icons/level.svg' alt='Level' />
					Level 1
				</p>
			</div>
		</div>
	);
}
