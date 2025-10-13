export const homes = [
  { href: "/home02", isCurrent: true }
  // { href: "/home02", label: "Home Page 02" },
  // { href: "/home03", label: "Home Page 03" },
  // { href: "/home04", label: "Home Page 04" },
  // { href: "/home05", label: "Home Page 05" },
  // { href: "/home06", label: "Home Page 06" },
  // { href: "/home07", label: "Home Page 07" },
  // { href: "/home08", label: "Home Page 08" },
  // { href: "/home09", label: "Home Page 09" },
  // { href: "/home10", label: "Home Page 10" },
];

export const propertyLinks = [
  {
    title: "Layout",
    submenu: [
      { href: "/property-grid-full-width", label: "Grid Style - Full Width" },
      { href: "/property-gird-top-search", label: "Grid Style - Top Search" },
      
    ],
  }
];

export const otherPages = [
  {
    title: "Agents",
    className: "has-child",
    submenu: [
      { href: "/agents", label: "Agents" },
      { href: "/agents-details/1", label: "Agents Details" },
    ],
  },
  {
    title: "Agencies",
    className: "has-child",
    submenu: [
      { href: "/agency-grid", label: "Agencies Grid" },
      { href: "/agency-list", label: "Agencies List" },
      { href: "/agency-details/1", label: "Agencies Detail" },
    ],
  },
  { href: "/home-loan-process", label: "Home Loan Process" },
  { href: "/career", label: "Career" },
  { href: "/faq", label: "Faq's" },
  { href: "/compare", label: "Compare" },
  { href: "/project-list", label: "Project List" },
  { href: "/project-details/1", label: "Project Details" },
  { href: "/404", label: "Page 404" },
  { href: "/dashboard", label: "Dashboard" },
];

export const blogMenu = [
  { href: "/blog-list", label: "Blog List" },
  { href: "/blog-grid", label: "Blog Grid" },
  { href: "/blog-details/1", label: "Blog Detail" },
];
