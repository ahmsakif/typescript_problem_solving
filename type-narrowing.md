# Understanding Type Narrowing in TypeScript with Practical Examples

TypeScript is great at catching errors early, but sometimes a single variable can hold multiple types, like `string | number`. Type narrowing is the process where TypeScript figures out the specific runtime type of a variable based on conditional checks in our code.

We use type narrowing to ensure that we only call methods or operations that actually exist on that specific type. The most common check is `typeof`, which works really well for primitive values like numbers or strings. For object instances, we can use `instanceof` to verify if an object was built from a specific class constructor. When we want to verify if an object contains a specific key before using it, the `in` operator works best.

Here is a simple example showing how `typeof` narrows down a union parameter safely:

```typescript
const processInput = (val: string | number): number => {
  if (typeof val === "string") {
    return val.trim().length;
  }
  return val * 10;
};
```