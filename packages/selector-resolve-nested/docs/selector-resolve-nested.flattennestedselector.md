<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/selector-resolve-nested](./selector-resolve-nested.md) &gt; [flattenNestedSelector](./selector-resolve-nested.flattennestedselector.md)

## flattenNestedSelector() function

Flatten a nested selector against a given parent selector.

⚠️ This is not a method to generate the equivalent un-nested selector. It is purely a method to construct a single selector AST that contains the parts of both the current and parent selector. It will not have the correct specificity and it will not match the right elements when used as a selector. It will not always serialize to a valid selector.

**Signature:**

```typescript
export declare function flattenNestedSelector(selector: Root, parentSelector: Root): Root;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  selector | Root | The selector to resolve. |
|  parentSelector | Root | The parent selector to resolve against. |

**Returns:**

Root

The resolved selector.

