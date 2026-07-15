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
import da from "../../assets/dayahead.png";
import fb from "../../assets/fussball.png";
import mb from "../../assets/Mobani.png";
import Nt from "../../assets/Native.png";
import rd from "../../assets/Rhodes.png";
import spc from "../../assets/SPC.png";
import "./Portfolio.css";

type Category =
  | "all"
  | "reminder"
  | "real-state"
  | "entertainment"
  | "trading"
  | "ride";

interface Project {
  id: number;
  name: string;
  image: string;
  projectType: string;
  description: string;
  category: Category;
  accent: string;
  appStoreUrl: string;
  Stack: string;
  iconBg: string;
  tagBg: string;
  tagColor: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Day Ahead",
    image: da,
    projectType: "Reminder App",
    appStoreUrl:
      "https://apps.apple.com/pk/app/day-ahead-challenge/id6756488768",
    description:
      "Daily planning app that helps users organize and plan out their day with reminders. ",
    category: "reminder",
    accent: "#185FA5",
    Stack: "React Native, Push Notifications, Firebase",
    iconBg: "#E6F1FB",
    tagBg: "#E6F1FB",
    tagColor: "#0C447C",
    icon: "ti-briefcase",
  },
  {
    id: 2,
    name: "Fussball",
    image: fb,
    appStoreUrl: "https://apps.apple.com/de/app/fussball-europa/id442924872",
    projectType: "Football App",
    description:
      "Football news and entertainment app delivering real-time updates on teams and players across European leagues.",
    category: "entertainment",
    Stack: "React Native, REST APIs",
    accent: "#0F6E56",
    iconBg: "#E1F5EE",
    tagBg: "#E1F5EE",
    tagColor: "#085041",
    icon: "ti-truck-delivery",
  },
  {
    id: 3,
    name: "Mobani",
    image: mb,
    appStoreUrl: "https://apps.apple.com/us/app/mobany/id6762458576",
    projectType: "Banking App",
    description:
      "Mobile banking / fintech app delivering a streamlined account and transaction experience.",
    category: "trading",
    Stack: " React Native, REST APIs, Firebase.",
    accent: "#534AB7",
    iconBg: "#EEEDFE",
    tagBg: "#EEEDFE",
    tagColor: "#3C3489",
    icon: "ti-music",
  },
  {
    id: 4,
    name: "Native Rider",
    image: Nt,
    appStoreUrl: "https://apps.apple.com/pk/app/native-rider/id6752636332",
    projectType: "Ride App",
    description:
      "Community-driven ride-sharing marketplace where drivers set their own prices and retain 100% of earnings. Built with real-time location tracking and a dynamic pricing engine.",
    category: "ride",
    Stack: "React Native, Firebase, Google Maps, Push Notifications",
    accent: "#854F0B",
    iconBg: "#FAEEDA",
    tagBg: "#FAEEDA",
    tagColor: "#633806",
    icon: "ti-shopping-bag",
  },
  {
    id: 5,
    name: "Rhodes",
    image: rd,
    appStoreUrl:
      "https://apps.apple.com/us/app/rhodes-investment-group/id6768275536",
    projectType: "Investment App",
    description:
      "Investment app for tracking portfolios and managing investment activity on the go.",
    category: "trading",
    accent: "#993C1D",
    Stack: " React Native, REST APIs, Firebase",
    iconBg: "#FAECE7",
    tagBg: "#FAECE7",
    tagColor: "#712B13",
    icon: "ti-tools-kitchen-2",
  },
  {
    id: 6,
    name: "Commercial SPC",
    image: spc,
    appStoreUrl: "https://apps.apple.com/pl/app/commercial-spc/id1618722248",
    projectType: "Real estate App",
    description:
      "Real estate marketplace with secure authentication and Stripe-powered transactions for property listings, sales, and purchases.",
    category: "real-state",
    Stack: " React Native, Stripe, REST APIs",
    accent: "#A32D2D",
    iconBg: "#FCEBEB",
    tagBg: "#FCEBEB",
    tagColor: "#791F1F",
    icon: "ti-heart",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Reminder", value: "reminder" },
  { label: "Real Estate", value: "real-state" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Trading", value: "trading" },
  { label: "Ride", value: "ride" },
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
                <p className="port-card-stack">{item.Stack}</p>

                <span
                  className="port-card-tag"
                  style={{ background: item.tagBg, color: item.tagColor }}
                >
                  {item.category === "entertainment"
                    ? "Entertainment"
                    : item.category === "real-state"
                      ? "Real Estate"
                      : item.category === "reminder"
                        ? "Reminder"
                        : item.category === "ride"
                          ? "Ride"
                          : item.category === "trading"
                            ? "Trading"
                            : null}
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
