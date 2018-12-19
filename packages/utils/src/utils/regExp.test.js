import rules, { regCheck } from './regExp'

test('email check', () => {
  expect(regCheck(rules.RegEmail, 'zwhvv13@gmail.com')).toBeTruthy()
})

test('RegLandline check', () => {
  expect(regCheck(rules.RegLandline, '4000609587')).toBeTruthy()
})
