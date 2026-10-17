export function isSafeAffiliateUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && Boolean(url.hostname) && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function isSafeImageUrl(value: string): boolean {
  if (value.startsWith("/") && !value.startsWith("//")) {
    try {
      return new URL(value, "https://oddlyfound.invalid").origin === "https://oddlyfound.invalid";
    } catch {
      return false;
    }
  }
  try {
    const url = new URL(value);
    return url.protocol === "https:" && Boolean(url.hostname) && !url.username && !url.password;
  } catch {
    return false;
  }
}

export function requireAffiliateDisclosure(
  products: Array<{ data: { affiliateUrl?: string; draft?: boolean } }>,
  disclosure: string,
): void {
  const hasPublicAffiliateLink = products.some(
    ({ data }) => !data.draft && Boolean(data.affiliateUrl),
  );

  if (hasPublicAffiliateLink && !disclosure.trim()) {
    throw new Error(
      "Set the approved affiliate disclosure in src/data/site.json before publishing affiliate links.",
    );
  }
}
