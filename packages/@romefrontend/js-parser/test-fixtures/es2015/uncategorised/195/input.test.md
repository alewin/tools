# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 195`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 8
			index: 8
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 8
					index: 8
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSRegExpLiteral {
				global: false
				insensitive: false
				multiline: false
				noDotNewline: false
				sticky: false
				unicode: true
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 8
						index: 8
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				expression: JSRegExpSubExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 5
							index: 6
							line: 1
						}
						start: Object {
							column: 1
							index: 1
							line: 1
						}
					}
					body: Array [
						JSRegExpCharSet {
							invert: false
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 5
									index: 5
									line: 1
								}
								start: Object {
									column: 1
									index: 1
									line: 1
								}
							}
							body: Array [
								JSRegExpCharSetRange {
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 5
											index: 5
											line: 1
										}
										start: Object {
											column: 2
											index: 2
											line: 1
										}
									}
									end: JSRegExpCharacter {
										value: "z"
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 5
												index: 5
												line: 1
											}
											start: Object {
												column: 4
												index: 4
												line: 1
											}
										}
									}
									start: JSRegExpCharacter {
										value: "a"
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 3
												index: 3
												line: 1
											}
											start: Object {
												column: 2
												index: 2
												line: 1
											}
										}
									}
								}
							]
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```