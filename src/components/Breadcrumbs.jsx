/**
 * APG Breadcrumb pattern: a named nav landmark, an ordered list, and
 * aria-current="page" on the last item.
 * items: [{ label, href }]
 */
export default function Breadcrumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) =>
          i === items.length - 1 ? (
            <li key={item.href}><span aria-current="page">{item.label}</span></li>
          ) : (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ),
        )}
      </ol>
    </nav>
  );
}
