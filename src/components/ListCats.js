import useGetCats from '../hooks/useGetCats'
import Card from './Card'
import { Spinner } from './Spinner'
import '../style/ListCats.css'

export function ListCats() {
	const { list, loading, error } = useGetCats()

	if (loading) return <Spinner />
	if (error) return console.error(error)

	return (
		<>
			<section className='list'>
				{list.map((cat) => (
					<Card key={cat.id} />
				))}
			</section>
		</>
	)
}
