import AppConsulting from "../pages/AppConsulting";

export const navItems = [
    {
      id: 1,
      title: "Home",
      path: "Home",
      cName: "nav-item",
    },
    {
      id: 2,
      title: "About",
      path: "About",
      cName: "nav-item",
    },
    {
      id: 3,
      title: "Solutions",
      path: "Solutions",
      cName: "nav-item",
    },
    {
        id: 4,
        title: "Why Moonglade",
        path: "whyMoonglade",
        cName: "nav-item",
      },
    {
      id: 5,
      title: "Contact",
      path: "Contactus",
      cName: "nav-item",
    },
  ];
  
  export const serviceDropdown = [
    {
      id: 1,
      title: "App Consulting",
      path: "./AppConsulting",
      cName: "submenu-item",
      component :  {AppConsulting},
    },
    {
      id: 2,
      title: "Brand Promotion",
      path: "./BrandPromotion",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Performance Marketing",
      path: "./PerformaneMarketing",
      cName: "submenu-item",
    },
    {
      id: 4,
      title: "Lead Generation ",
      path: "./LeadGeneration",
      cName: "submenu-item",
    },

    
  ];