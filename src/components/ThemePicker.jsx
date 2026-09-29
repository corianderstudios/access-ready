import { THEMES } from '../lib/themes.js';

export default function ThemePicker({ value, onChange }) {
  return (
    <div className="theme-pick">
      <label htmlFor="theme">Vision theme</label>
      <select id="theme" value={value} onChange={(e) => onChange(e.target.value)}>
        {THEMES.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
    </div>
  );
}
