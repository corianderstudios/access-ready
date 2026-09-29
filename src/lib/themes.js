/**
 * Vision themes. Each value matches a [data-vision] block in index.css.
 * Light is the default.
 */
export const THEMES = [
  { value: 'light', label: 'Light (default) · red-green safe' },
  { value: 'dark', label: 'Dark · red-green safe' },
  { value: 'tritan', label: 'Light · blue-yellow safe' },
  { value: 'tritan-dark', label: 'Dark · blue-yellow safe' },
  { value: 'mono', label: 'Monochrome · no color vision' },
  { value: 'hc-light', label: 'High contrast light · low vision' },
  { value: 'hc-dark', label: 'High contrast dark · low vision' },
  { value: 'large', label: 'Large text · low vision' },
  { value: 'soft-dark', label: 'Soft dark · light sensitivity' },
];

export const DEFAULT_THEME = 'light';
