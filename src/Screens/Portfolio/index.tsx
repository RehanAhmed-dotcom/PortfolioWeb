// import { useNavigate } from "react-router-dom";
// import jm from "../../assets/jm.png";
// import work from "../../assets/workaman.png";
// import mb from "../../assets/mindBalance.png";
// import qs from "../../assets/quickserv.png";
// import aduane from "../../assets/aduane.png";
// import kuwait from "../../assets/Kuwait.png";
// const Portfolio = () => {
//   const arr = [
//     {
//       id: 1,
//       name: "Job Mark",
//       image: jm,
//       projectType: "Job Finder App",
//       description:
//         "Job Finding app in which user can see reels add reels, apply on jobs, contact with clients, work on multiple shifts and invoices about work.",
//     },
//     {
//       id: 2,
//       name: "Workaman",
//       image: work,
//       projectType: "Product Delivery App",
//       description:
//         "Product delivery app in which user can check products its orignal places, order products,contact with delivery man and check status of the prodects delivering.",
//     },
//     {
//       id: 3,
//       name: "Mind Balance",
//       image: mb,
//       projectType: "Music App",
//       description:
//         "Music app in which user can see meditaion music list, play music and saving options with purchase options.",
//     },
//     {
//       id: 4,
//       name: "Quickserv",
//       image: qs,
//       projectType: "E-commerce App",
//       description:
//         "E-commerce app which provides multiple stores and purchasing options with multiples stores with cart and purchasing options.",
//     },
//     {
//       id: 5,
//       name: "Aduane",
//       image: aduane,
//       projectType: "Food delivery App",
//       description:
//         "Food delivery app in which restaurants list are shown user can select product and recommendations are shown with payment options and can also share their order with friends",
//     },
//     {
//       id: 6,
//       name: "Kuwait",
//       image: kuwait,
//       projectType: "Blood Donation App",
//       description:
//         "Blood donation app in which user can donate blood to other people, schedule the donation and also print out receipt",
//     },
//   ];
//   const navigate = useNavigate();

//   const openDetail = (id: number, item: any) => {
//     navigate(`/detail/${id}`, { state: { item } });
//   };
//   return (
//     <section className="skilldiv" id={"Portfolio"}>
//       <div className="ResumelDiv">
//         <h2 className="headingAbout">Portfolio</h2>
//         <p className="dummyAbout">
//           Visual representation of my work and projects.
//         </p>
//         <div className="rowPortfolio">
//           {arr.map((item) => (
//             <div className="oneProject">
//               <span
//                 onClick={() => openDetail(item.id, item)}
//                 className="oneProject"
//               >
//                 <img src={item.image} />
//               </span>
//               <h2 className="projectname">{item.name}</h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jm from "../../assets/jm.png";
import work from "../../assets/workaman.png";
import mb from "../../assets/mindBalance.png";
import qs from "../../assets/quickserv.png";
import aduane from "../../assets/aduane.png";
import kuwait from "../../assets/Kuwait.png";
import "./Portfolio.css";

type Category = "all" | "mobile" | "ecommerce" | "health";

interface Project {
  id: number;
  name: string;
  image: string;
  projectType: string;
  description: string;
  category: Category;
  accent: string;
  iconBg: string;
  tagBg: string;
  tagColor: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Job Mark",
    image: jm,
    projectType: "Job Finder App",
    description:
      "Job finding app where users browse reels, apply to jobs, contact clients, manage shifts and invoices.",
    category: "mobile",
    accent: "#185FA5",
    iconBg: "#E6F1FB",
    tagBg: "#E6F1FB",
    tagColor: "#0C447C",
    icon: "ti-briefcase",
  },
  {
    id: 2,
    name: "Workaman",
    image: work,
    projectType: "Product Delivery App",
    description:
      "Delivery app letting users track product origins, place orders, contact couriers and check delivery status.",
    category: "mobile",
    accent: "#0F6E56",
    iconBg: "#E1F5EE",
    tagBg: "#E1F5EE",
    tagColor: "#085041",
    icon: "ti-truck-delivery",
  },
  {
    id: 3,
    name: "Mind Balance",
    image: mb,
    projectType: "Meditation Music App",
    description:
      "Wellness app with curated meditation playlists, playback controls, and in-app purchases.",
    category: "health",
    accent: "#534AB7",
    iconBg: "#EEEDFE",
    tagBg: "#EEEDFE",
    tagColor: "#3C3489",
    icon: "ti-music",
  },
  {
    id: 4,
    name: "Quickserv",
    image: qs,
    projectType: "E-commerce App",
    description:
      "Multi-store marketplace with cart, checkout, and purchasing across multiple vendor storefronts.",
    category: "ecommerce",
    accent: "#854F0B",
    iconBg: "#FAEEDA",
    tagBg: "#FAEEDA",
    tagColor: "#633806",
    icon: "ti-shopping-bag",
  },
  {
    id: 5,
    name: "Aduane",
    image: aduane,
    projectType: "Food Delivery App",
    description:
      "Food ordering app with restaurant discovery, recommendations, payments and order sharing.",
    category: "mobile",
    accent: "#993C1D",
    iconBg: "#FAECE7",
    tagBg: "#FAECE7",
    tagColor: "#712B13",
    icon: "ti-tools-kitchen-2",
  },
  {
    id: 6,
    name: "Kuwait",
    image: kuwait,
    projectType: "Blood Donation App",
    description:
      "Donation platform for scheduling blood donations, connecting donors, and printing receipts.",
    category: "health",
    accent: "#A32D2D",
    iconBg: "#FCEBEB",
    tagBg: "#FCEBEB",
    tagColor: "#791F1F",
    icon: "ti-heart",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Mobile apps", value: "mobile" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Health", value: "health" },
];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("all");
  const navigate = useNavigate();

  const visible = projects.filter(
    (p) => active === "all" || p.category === active,
  );

  const openDetail = (name: string, item: Project) => {
    navigate(`/detail/${name}`, { state: { item } });
  };

  return (
    <section className="port-section" id="Portfolio">
      <div className="port-container">
        {/* Header */}
        <div className="port-header">
          <div className="port-eyebrow">
            <i className="ti ti-sparkles" aria-hidden="true" />
            selected work
          </div>
          <h2 className="port-title">Things I've built</h2>
          <p className="port-subtitle">
            A collection of apps shipped for real users.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="port-filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`port-filter-btn${active === f.value ? " active" : ""}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="port-grid"
          style={{
            gridTemplateColumns:
              visible.length <= 2 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          }}
        >
          {visible.map((item, i) => (
            <div
              key={item.id}
              className="port-card"
              onClick={() => openDetail(item.name, item)}
              tabIndex={0}
              role="button"
              aria-label={`View ${item.name}`}
              onKeyDown={(e) =>
                e.key === "Enter" && openDetail(item.name, item)
              }
            >
              {/* Project image */}
              <div className="port-card-img-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="port-card-img"
                />
                <div className="port-card-overlay">
                  <span className="port-overlay-pill">
                    <i className="ti ti-eye" aria-hidden="true" />
                    View project
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="port-card-body">
                <span className="port-card-num">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className="port-card-icon"
                  style={{ background: item.iconBg }}
                >
                  <i
                    className={`ti ${item.icon}`}
                    aria-hidden="true"
                    style={{ color: item.accent, fontSize: 20 }}
                  />
                </div>

                <p className="port-card-name">{item.name}</p>
                <p className="port-card-type">{item.projectType}</p>
                <p className="port-card-desc">{item.description}</p>

                <span
                  className="port-card-tag"
                  style={{ background: item.tagBg, color: item.tagColor }}
                >
                  {item.category === "mobile"
                    ? "Mobile"
                    : item.category === "ecommerce"
                      ? "E-commerce"
                      : "Health"}
                </span>
              </div>

              <i
                className="ti ti-arrow-up-right port-card-arrow"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
