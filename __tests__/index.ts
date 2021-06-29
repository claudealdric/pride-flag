test("I'm awesome", () => {
  const imAwesome = jest.fn(() => true)
  expect(imAwesome()).not.toBe(false)
  expect(imAwesome()).toBe(true)
})

test('This is overkill', () => {
  const isOverkill = jest.fn(() => true)
  expect(isOverkill()).toBe(true)
})

export {}
