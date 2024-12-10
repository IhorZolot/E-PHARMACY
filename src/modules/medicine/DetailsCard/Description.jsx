import { useSelector } from 'react-redux'
import { selectOneProduct } from '../../../redux/Products/selectors'

export const Description = () => {
	const oneProduct = useSelector(selectOneProduct)

	return (
		<div>
			{oneProduct ? (
				<>
					<h3> {oneProduct.suppliers}</h3>
					<p>{oneProduct.description || 'No description available.'}</p>
				</>
			) : (
				<p>Loading product...</p>
			)}
		</div>
	)
}
