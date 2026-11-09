# Type vs Interface in TypeScript: Key Differences and When to Use Which

When I started learning TypeScript, I always wondered whether I should use `type` or `interface` to define object structures. Both Seem too do almost the exact same job at first glance, but they actually have a few important differences that affect how we structure our code.

An `interface` is mainly used to describe object shapes and contracts for classes. One unique feature of an interface is declaration merging. If we define an interface with the same name twice, TypeScript automatically merges their properties together, which is super useful when building reusable libraries. On the other hand, a `type` alias is much more flexible. We can use it to define object shapes, primitive aliases, union types, and tuples. However, once a type alias is declared, we cannot reopen it to add new fields.

Here is a quick look at both define simple objects:

```typescript
interface UserInterface {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};
```
