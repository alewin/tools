import {
	createPrefixVisitor,
	prefixCSSProperty,
} from "@internal/compiler/transforms/compile/css-handler/prefix/utils";

function borderRenamer(value: string) {
	return value.startsWith("-webkit-") ? value.replace("inline-start", "start") : value;
}

// https://github.com/Fyrd/caniuse/blob/main/features-json/css-logical-props.json
export default [
	createPrefixVisitor({
		name: "border-inline-end",
		enter(path) {
			return prefixCSSProperty({
				path,
				propertyName: "border-inline-end",
				browserFeaturesKey: "css-logical-props",
				rename: borderRenamer
			});
		},
	}),
];
