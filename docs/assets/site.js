
(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav?.classList.toggle("open", !expanded);
  });

  const widget = document.querySelector("[data-neural-widget]");
  if (widget) {
    const title = widget.querySelector("[data-neural-title]");
    const detail = widget.querySelector("[data-neural-detail]");
    const nodes = Array.from(widget.querySelectorAll("[data-node]"));
    const edges = Array.from(widget.querySelectorAll("[data-edge]"));
    const content = {
      dl: { title: "Deep Learning", detail: "Temporal models, computer vision, sequence learning and representation learning.", edges: ["dl-ml"] },
      ml: { title: "Machine Learning", detail: "The centre of the portfolio: adaptive models, evaluation, inference and applied AI.", edges: ["data-ml","dl-ml","ml-systems","ml-fullstack","ml-quant"] },
      data: { title: "Data Analytics", detail: "Pipelines, structured data, experimentation and decision-oriented analysis.", edges: ["data-ml","data-fullstack","data-quant"] },
      systems: { title: "Software Systems", detail: "Compilers, APIs, performance-aware software and infrastructure around models.", edges: ["ml-systems","systems-fullstack"] },
      fullstack: { title: "Full Stack", detail: "Interfaces, services and product flows that turn models into usable applications.", edges: ["ml-fullstack","data-fullstack","systems-fullstack"] },
      quant: { title: "Quantitative Research", detail: "A supporting discipline for probabilistic thinking, experimentation and model evaluation.", edges: ["data-quant","ml-quant"] }
    };
    const activate = (key) => {
      const item = content[key];
      if (!item) return;
      title.textContent = item.title;
      detail.textContent = item.detail;
      nodes.forEach((node) => node.classList.toggle("active", node.dataset.node === key));
      edges.forEach((edge) => edge.classList.toggle("active", item.edges.includes(edge.dataset.edge)));
    };
    const reset = () => {
      title.textContent = "Machine Learning";
      detail.textContent = "Models, data and engineering choices designed to work together in real systems.";
      nodes.forEach((node) => node.classList.remove("active"));
      edges.forEach((edge) => edge.classList.remove("active"));
    };
    nodes.forEach((node) => {
      node.addEventListener("mouseenter", () => activate(node.dataset.node));
      node.addEventListener("focus", () => activate(node.dataset.node));
      node.addEventListener("click", () => activate(node.dataset.node));
      node.addEventListener("blur", reset);
    });
    widget.addEventListener("mouseleave", reset);
  }

  const projectButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const projectCards = Array.from(document.querySelectorAll("[data-categories]"));
  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      projectButtons.forEach((item) => item.classList.toggle("active", item === button));
      projectCards.forEach((card) => {
        const categories = (card.dataset.categories || "").split("|");
        card.hidden = !(filter === "All" || categories.includes(filter));
      });
    });
  });

  const postButtons = Array.from(document.querySelectorAll("[data-post-filter]"));
  const postCards = Array.from(document.querySelectorAll("[data-category]"));
  postButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.postFilter;
      postButtons.forEach((item) => item.classList.toggle("active", item === button));
      postCards.forEach((card) => {
        card.hidden = !(filter === "All" || card.dataset.category === filter);
      });
    });
  });
})();
