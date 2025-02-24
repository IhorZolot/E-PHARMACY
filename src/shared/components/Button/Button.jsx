import styles from './Button.module.scss'

const Button = ({ children, isGray, ...rest }) => {
	return (
		<button className={isGray ? styles.buttonGrey : styles.buttonGreen} {...rest}>
			{children}
		</button>
	)
}

export default Button
