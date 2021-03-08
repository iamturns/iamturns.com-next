export const validContentTypes = ["article", "note"] as const;
export type ContentType = typeof validContentTypes[number];

export function isContentType(it: unknown): it is ContentType {
  return validContentTypes.includes(it as ContentType);
}
