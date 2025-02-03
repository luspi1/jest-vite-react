import { validatePassword } from './validate-password.ts'

describe('test validatePassword', () => {
	it('should return {success: true, error: null} for a valid password', () => {
		const validPassword = 'ValidPass1!';
		const result = validatePassword(validPassword);
		expect(result).toEqual({success: true, error: null});
	})
	it('should validate a password against 8 minimum characters', () => {
		const invalidPassword = 'inVal!';
		const result = validatePassword(invalidPassword);
		expect(result).toBe(false);
	})
	it('should validate a password against mixed case', () => {
		const invalidPassword = 'invalidpass123!';
		const invalidPassword2 = 'INVALIDPASS123!';
		const result = validatePassword(invalidPassword);
		const result2 = validatePassword(invalidPassword2);
		expect(result).toBe(false);
		expect(result2).toBe(false);
	})
	it('should validate a password against digits and characters', () => {
		const invalidPassword = 'invalPass!dd!';
		const invalidPassword2 = 'INVAlid!#passw';
		const result = validatePassword(invalidPassword);
		const result2 = validatePassword(invalidPassword2);
		expect(result).toBe(false);
		expect(result2).toBe(false);
	})
	it('should validate a password against special character', () => {
		const invalidPassword = 'invalPass1234';
		const result = validatePassword(invalidPassword);
		expect(result).toBe(false);
	})
})