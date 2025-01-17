export default function postcssSystemUiFont() {
	return {
		postcssPlugin: 'postcss-system-ui-font',
		Declaration(/** @type {import('postcss').Declaration} */ node) {
			if (PROPERTY_REGEX.test(node.prop)) {
				if (!node.value.includes(systemUIFamilies)) {
					node.value = node.value.replace(SYSTEM_UI_MATCH, systemUiReplace);
				}
			}
		},
	};
}

postcssSystemUiFont.postcss = true;

const PROPERTY_REGEX = /(?:^(?:-|\\002d){2})|(?:^font(?:-family)?$)/i;
const whitespace = '[\\f\\n\\r\\x09\\x20]';
const systemUiFamily = [
	'system-ui',
	/* macOS 10.11-10.12 */ '-apple-system',
	/* Windows 6+ */ 'Segoe UI',
	/* Android 4+ */ 'Roboto',
	/* Ubuntu 10.10+ */ 'Ubuntu',
	/* Gnome 3+ */ 'Cantarell',
	/* KDE Plasma 5+ */ 'Noto Sans',
	/* fallback */ 'sans-serif',
];
const systemUIFamilies = systemUiFamily.join(', ');
const SYSTEM_UI_MATCH = new RegExp(`(^|,|${whitespace}+)(?:system-ui${whitespace}*)(?:,${whitespace}*(?:${systemUiFamily.join('|')})${whitespace}*)?(,|$)`, 'i');
const systemUiReplace = `$1${systemUIFamilies}$2`;
