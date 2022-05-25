import { useRef, useState } from 'react'

export function useGetInput() {
	const [name, setName] = useState('')
	const inputRef = useRef('')

	const getInput = () => {
		const { current } = inputRef
		const { value } = current
		setName(value)
	}
	return { name, inputRef, getInput }
}
