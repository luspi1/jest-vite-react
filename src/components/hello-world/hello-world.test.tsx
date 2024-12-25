import { HelloWorld } from './hello-world.tsx'
import { render, screen } from '@testing-library/react'

test('render hello world', () => {
	render(<HelloWorld/>)
	expect(screen.getByText('Hello world'))
})