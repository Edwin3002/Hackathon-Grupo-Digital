import useGetCats from '../hooks/useGetCats'
import { Spinner } from './Spinner'
import '../style/ListCats.css'
import { Cards } from './Cards'

export function ListCats() {
	const { list, loading, error } = useGetCats()

	if (loading) return <Spinner />
	if (error) return console.error(error)

	return (
		<>
			<section className='list'>
				{list.map((cat) => (
					<Cards key={cat.id} catData={cat} />
				))}
			</section>
		</>
	)
}
