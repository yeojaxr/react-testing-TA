import { AddTodo } from '../components/helper';

test('Should add todo to the list', () => {
  // Arrange
  const list = [1, 2]
  const newItem = 3

  const expectedResult = [newItem, ...list]
  // Act
  const newList = AddTodo(list, newItem)
  // Assert
  expect(newList).toStrictEqual(expectedResult)
})

test('should not mutate the existing todo array', () => {
  // Arrange
  const list = [1, 2]
  const newItem = 3
  const wrongResult = [newItem]

  // Act
  const newList = AddTodo(list, newItem)
  // Assert
  expect(newList).not.toBe(wrongResult)
})