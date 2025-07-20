export const getImagePath = (path: string) => {
  // If path is already a full URL, return it as is
  if (path.startsWith("http")) {
    return path;
  }

  // With a custom domain, we don't need to prefix with /author-web anymore
  // Just return the path as is - it will be relative to the root
  return path;
};
