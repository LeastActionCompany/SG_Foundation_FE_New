function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

export function navigateTo(path, { resetScroll = true } = {}) {
  if (window.location.pathname === path) {
    if (resetScroll) {
      scrollToTop();
    }
    return;
  }

  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));

  if (resetScroll) {
    scrollToTop();
    window.requestAnimationFrame(() => {
      scrollToTop();
      window.requestAnimationFrame(scrollToTop);
    });
  }
}
