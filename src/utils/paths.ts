export const getImagePath = (path: string) => {
  // If path is already a full URL, return it as is
  if (path.startsWith("http")) {
    return path;
  }

  // Otherwise, add the basePath if in production
  const basePath = process.env.NODE_ENV === "production" ? "/author-web" : "";
  return `${basePath}${path}`;
};
