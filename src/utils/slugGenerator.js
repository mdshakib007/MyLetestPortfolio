const slugify = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\p{L}\p{N}\s-]/gu, '') // Remove all non-letter/number/space/dash (Unicode-safe)
        .replace(/\s+/g, '-')              // Replace whitespace with hyphen
        .replace(/-+/g, '-');              // Collapse multiple hyphens
};

export default slugify;
