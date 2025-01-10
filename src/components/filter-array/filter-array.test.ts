import {filterArray} from './filter-array.ts'
import {
	basketWithNoQuantity,
	basketWithQuantityOnly
} from '../../__mocks__/basket.mock.ts'
const cb = jest.fn()

describe('filterArray', () => {

	afterEach(() => {
		jest.clearAllMocks()
	})
	it('should not invoke callback when an array is empty', () => {
		filterArray([], cb)
		expect(cb).not.toHaveBeenCalled()
	})
	it('should invoke provided fn as many time as the length of an array', () => {
		const arr = [1,2,3]
		filterArray(arr, cb)
		expect(cb).toHaveBeenCalledTimes(arr.length)
	})
	it('should filter an array using provided predicate', () => {
		const hasQuantity = (order: any) => order.qty > 0
		const result = filterArray(basketWithNoQuantity, hasQuantity)
		expect(result).toEqual(basketWithQuantityOnly)
	})
})