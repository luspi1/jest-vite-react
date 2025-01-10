import { multiValue } from './multi.ts'

describe('multiply', () => {
	it('multiply positive', () => {
		const res = multiValue(2, 3)
		expect(res).toBe(6)
	})
	it('multiply negative', () => {
		const res = multiValue(-2, 3)
		expect(res).toBe(-6)
	})
})

