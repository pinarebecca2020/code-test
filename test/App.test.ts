import { describe, expect, jest, test } from '@jest/globals'
import printMe from '../app/App'

describe('printMe module', () => {
  test('printMe function should return each item through the console log ', () => {
    const logSpy = jest.spyOn(global.console, 'log')

    printMe(1, 2, 'test', { test: 1 })
    expect(logSpy).toHaveBeenCalledTimes(4)

    logSpy.mockRestore()
  })

  test('printMe function should return each item through the console log ', () => {
    const logSpy = jest.spyOn(global.console, 'log')

    printMe('foo', ['bar', 'baz'])
    expect(logSpy).toHaveBeenCalledTimes(3)

    logSpy.mockRestore()
  })
})
