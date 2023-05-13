const reveals = document.querySelectorAll(".reveal");
reveals.forEach((reveal) => {
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!reveal.classList.contains("slide-in"))
          reveal.classList.add("slide-in");

          console.log(reveal)
        return;
      }
      if (reveal.classList.contains("slide-in"))
        reveal.classList.remove("slide-in");
    },
    {
      root: null,
      threshold: 0.001, // set offset 0.1 means trigger if atleast 10% of element in viewport
    }
  );
  observer.observe(reveal);
});
