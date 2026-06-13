export function shortAddress(address: string) {
  if (!address || address.trim().length < 12) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
}

export function isProvided(value?: string | null) {
  return Boolean(value && value.trim().length > 0);
}

export function formatMaybeAddress(value?: string | null) {
  if (!isProvided(value)) return "Added after deployment";

  const clean = String(value);

  if (clean.startsWith("0x") && clean.length > 16) {
    return shortAddress(clean);
  }

  return clean;
}

export function cleanExternalUrl(value?: string | null) {
  if (!isProvided(value)) return null;

  const clean = String(value).trim();

  if (clean.startsWith("https://") || clean.startsWith("http://")) {
    return clean;
  }

  return "https://" + clean;
}
