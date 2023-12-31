<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-tokenizer](./css-tokenizer.md) &gt; [mirrorVariantType](./css-tokenizer.mirrorvarianttype.md)

## mirrorVariantType() function

Get the mirror variant type of a given token type

**Signature:**

```typescript
export declare function mirrorVariantType(type: TokenType): TokenType | null;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  type | [TokenType](./css-tokenizer.tokentype.md) |  |

**Returns:**

[TokenType](./css-tokenizer.tokentype.md) \| null

## Example


```js
const input = TokenType.OpenParen;
const output = mirrorVariantType(input);

console.log(output); // TokenType.CloseParen
```
