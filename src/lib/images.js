// Every project gallery is the ordered set of images in src/assets/projects/<slug>/.
// Drop a new numbered file into a folder and it appears on that project page.
const projectImages = import.meta.glob('/src/assets/projects/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

export function getProjectImages(slug) {
  return Object.entries(projectImages)
    .filter(([path]) => path.includes(`/projects/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, img]) => img);
}

export function getProjectCover(slug) {
  return getProjectImages(slug)[0];
}

const isPortrait = img => img.height > img.width * 1.05;

// Lay a gallery out in the editorial rhythm from the design: a full-width landscape,
// then a pair, then full width again. Pairs prefer two images of the same orientation.
export function galleryRows(images) {
  const queue = [...images];
  const rows = [];
  let wantFull = true;
  while (queue.length) {
    if (wantFull) {
      const i = queue.findIndex(img => !isPortrait(img));
      if (i !== -1 && i < 3) {
        rows.push({ type: 'full', items: queue.splice(i, 1) });
        wantFull = false;
        continue;
      }
    }
    const first = queue.shift();
    const j = queue.findIndex(img => isPortrait(img) === isPortrait(first));
    const second = j !== -1 && j < 3 ? queue.splice(j, 1)[0] : queue.shift();
    const items = second ? [first, second] : [first];
    rows.push({ type: items.length === 2 ? 'pair' : 'full', portrait: items.every(isPortrait), items });
    wantFull = true;
  }
  return rows;
}
