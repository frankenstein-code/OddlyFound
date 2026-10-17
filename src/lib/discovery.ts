export interface DiscoveryItem {
  text: string;
  category: string;
}

export function filterDiscoveryItems<T extends DiscoveryItem>(
  items: T[],
  query: string,
  category: string,
): T[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return items.filter((item) => {
    const matchesQuery = item.text.toLocaleLowerCase().includes(normalizedQuery);
    const matchesCategory = category === "" || item.category.split("|").includes(category);
    return matchesQuery && matchesCategory;
  });
}
