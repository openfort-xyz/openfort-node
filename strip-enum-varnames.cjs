/**
 * Orval input transformer that strips OpenAPI enum varname extensions
 * (`x-enum-varnames`, `x-enumNames`, `x-enumnames`) from the spec before
 * orval generates code.
 *
 * Why: orval's `getEnumNames` unconditionally honors those extensions, which
 * produces keys like `SPL_VALUE: 'splValue'`. Removing the extensions makes
 * orval fall back to using the literal value as the key (`splValue: 'splValue'`),
 * matching the pre-existing shape of the published SDK.
 */

const ENUM_VARNAME_KEYS = ['x-enum-varnames', 'x-enumNames', 'x-enumnames'];

function strip(node) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (const item of node) strip(item);
    return;
  }
  for (const key of ENUM_VARNAME_KEYS) {
    if (key in node) delete node[key];
  }
  for (const key of Object.keys(node)) strip(node[key]);
}

module.exports = function stripEnumVarnames(spec) {
  strip(spec);
  return spec;
};
