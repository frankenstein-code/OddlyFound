import { filterDiscoveryItems } from "../lib/discovery";

const forms = document.querySelectorAll<HTMLFormElement>("[data-discovery-form]");

for (const form of forms) {
  form.addEventListener("submit", (event) => event.preventDefault());
  const input = form.querySelector<HTMLInputElement>("[data-search-input]");
  const select = form.querySelector<HTMLSelectElement>("[data-category-select]");
  const items = Array.from(
    document.querySelectorAll<HTMLElement>(`#${form.dataset.listId} [data-discovery-item]`),
  );
  const noResults = form.parentElement?.querySelector<HTMLElement>("[data-no-results]");
  const resultsCount = form.querySelector<HTMLElement>("[data-results-count]");

  if (!input || !select) {
    continue;
  }

  const updateResults = () => {
    const matches = filterDiscoveryItems(
      items.map((element) => ({
        element,
        text: element.dataset.searchText ?? "",
        category: element.dataset.category ?? "",
      })),
      input.value,
      select.value,
    );
    const visible = new Set(matches.map((match) => match.element));

    for (const item of items) {
      item.hidden = !visible.has(item);
    }
    if (noResults) {
      noResults.hidden = matches.length > 0;
    }
    if (resultsCount) {
      resultsCount.textContent = `${matches.length} ${matches.length === 1 ? "result" : "results"}`;
    }
  };

  input.addEventListener("input", updateResults);
  select.addEventListener("change", updateResults);
  updateResults();
}
