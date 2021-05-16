import {
	createPrefixVisitor,
	prefixCSSValue,
} from "@internal/compiler/transforms/compile/css-handler/prefix/utils";

// https://github.com/Fyrd/caniuse/blob/main/features-json/css-unicode-bidi.json
export default [
	...["isolate", "isolate-override", "plaintext"].map((value) => (
		createPrefixVisitor({
			name: `unicode-bidi/${value}`,
			enter(path) {
				return prefixCSSValue({
					path,
					propertyName: "unicode-bidi",
					value,
					browserFeaturesKey: "css-unicode-bidi",
				});
			},
		})
	))
]
