import getHealthStatus from '../health';

test.each([
  ["маг", 100, "health"],
  ["целитель", 15, "wounded"],
  ["танк", 3, "critical"],
])("testing function health with a %s character and a health value of %i", (name, health, expected) => {
  let healthStatus = getHealthStatus({name, health});
  expect(healthStatus).toBe(expected);
});