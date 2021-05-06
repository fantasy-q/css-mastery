const CSS = {
  base: '../css',
  file: {
    01: 'basic',
    02: 'helper',
    03: 'header',
    04: 'section',
    05: 'figures-and-images',
    06: 'navigation'
  },
  getURL(N) {
    const No = String(N).padStart(2, 0);
    const url = `${this.base}/${No}-${this.file[N]}.css`;
    return url
  }
}

function loadStyle(url) {
  const link = document.createElement('link');
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
  return link;
}

function loadStyles(list = []) {
  if (list.length) {
    for (const N of list) {
      loadStyle(CSS.getURL(N))
    }
  } else {
    for (const N in O = CSS.file) {
      if (Object.hasOwnProperty.call(O, N)) {
        loadStyle(CSS.getURL(N))
      }
    }
  }
}