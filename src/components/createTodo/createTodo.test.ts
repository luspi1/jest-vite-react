import { createTodo } from './createTodo.ts'

const mockedV4 = jest.fn(() => 'abcd')

jest.mock('uuid', () => ({
	v4: () => mockedV4()
}))

// global.fetch = jest.fn(() => Promise.resolve({
// 	ok: true,
// 	json: () => Promise.resolve({id: 1, title: 'TodoTitle', completed: false})
// }))

describe('createTodo', () => {

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should return todo obj', () => {
		const title = 'Learn jest'

		const expectedResult = {
			title,
			completed: false,
			id: 'abcd'
		}

		const result = createTodo(title)

		expect(mockedV4).toHaveBeenCalledTimes(1)
		expect(result).toEqual(expectedResult)
	})

	// it('should create todo on server', async () => {
	// 	const result = await createTodoOnServer('my todo')
	// 	expect(result).toEqual({id: 1, title: 'TodoTitle', completed: false})
	// 	expect(fetch).toHaveBeenCalledTimes(1)
	// })

})