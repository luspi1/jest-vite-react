import { multiValue } from './multi.ts'

test('multiply', () => {
	const res = multiValue(2, 3)
	expect(res).toBe(6)
})