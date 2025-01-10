import { len, toLower, toUpper } from './task1.ts'

describe('task1', () => {
	it('upper', () => {
		const res = toUpper('hello')
		expect(res).toBe('HELLO')
	})
	it('lower', () => {
		const res = toLower('HELLO')
		expect(res).toBe('hello')
	})
	it('length', () => {
		const res = len('hello')
		expect(res).toBe(5)
	})
})