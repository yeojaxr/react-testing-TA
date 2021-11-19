import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 4
  const b = 5
  const expectedResult = 9

  // Act
  const result = Add(a, b)

  // Assert
  expect(result).toBe(expectedResult)
})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 8
  const b = 3
  const expectedResult = 5

  // Act
  const result = Substract(a, b)

  // Assert
  expect(result).toBe(expectedResult)
})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 3
  const b = 4
  const expectedResult = 12

  // Act
  const result = Multiplication(a, b)

  // Assert
  expect(result).toBe(expectedResult)
})