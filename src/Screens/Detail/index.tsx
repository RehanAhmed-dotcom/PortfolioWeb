// import { useLocation } from "react-router-dom";

// import SideBar from "../../Component/SideBar";
// import { useState } from "react";
// import { IoMenu } from "react-icons/io5";
// const Detail = () => {
//   const location = useLocation();
//   const { item } = location.state;
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);
//   return (
//     <div className="homeMain">
//       <button className="mobileMenuBtn" onClick={toggleSidebar}>
//         <IoMenu size={20} color="black" />
//       </button>
//       <SideBar isOpen={sidebarOpen} isClose={closeSidebar} />
//       <div className="mainbody">
//         <div className="imgContainer">
//           <img src={item.image} />
//         </div>
//         <div className="dataContainer">
//           <h3>{item.name}</h3>
//           <h4>{item.projectType}</h4>
//           <p>{item.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;
import { useLocation, useNavigate } from "react-router-dom";
import SideBar from "../../Component/SideBar";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import "./Detail.css";

const categoryMeta: Record<
  string,
  {
    iconBg: string;
    accent: string;
    tagBg: string;
    tagColor: string;
    icon: string;
    label: string;
  }
> = {
  "Job Finder App": {
    iconBg: "#E6F1FB",
    accent: "#185FA5",
    tagBg: "#E6F1FB",
    tagColor: "#0C447C",
    icon: "ti-briefcase",
    label: "Mobile",
  },
  "Product Delivery App": {
    iconBg: "#E1F5EE",
    accent: "#0F6E56",
    tagBg: "#E1F5EE",
    tagColor: "#085041",
    icon: "ti-truck-delivery",
    label: "Mobile",
  },
  "Meditation Music App": {
    iconBg: "#EEEDFE",
    accent: "#534AB7",
    tagBg: "#EEEDFE",
    tagColor: "#3C3489",
    icon: "ti-music",
    label: "Health",
  },
  "Music App": {
    iconBg: "#EEEDFE",
    accent: "#534AB7",
    tagBg: "#EEEDFE",
    tagColor: "#3C3489",
    icon: "ti-music",
    label: "Health",
  },
  "E-commerce App": {
    iconBg: "#FAEEDA",
    accent: "#854F0B",
    tagBg: "#FAEEDA",
    tagColor: "#633806",
    icon: "ti-shopping-bag",
    label: "E-commerce",
  },
  "Food delivery App": {
    iconBg: "#FAECE7",
    accent: "#993C1D",
    tagBg: "#FAECE7",
    tagColor: "#712B13",
    icon: "ti-tools-kitchen-2",
    label: "Mobile",
  },
  "Food Delivery App": {
    iconBg: "#FAECE7",
    accent: "#993C1D",
    tagBg: "#FAECE7",
    tagColor: "#712B13",
    icon: "ti-tools-kitchen-2",
    label: "Mobile",
  },
  "Blood Donation App": {
    iconBg: "#FCEBEB",
    accent: "#A32D2D",
    tagBg: "#FCEBEB",
    tagColor: "#791F1F",
    icon: "ti-heart",
    label: "Health",
  },
};

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const meta = categoryMeta[item.projectType] ?? {
    iconBg: "#F1EFE8",
    accent: "#5F5E5A",
    tagBg: "#F1EFE8",
    tagColor: "#444441",
    icon: "ti-device-mobile",
    label: "App",
  };

  return (
    <div className="homeMain">
      <button
        className="mobileMenuBtn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <IoMenu size={20} color="black" />
      </button>
      <SideBar isOpen={sidebarOpen} isClose={() => setSidebarOpen(false)} />

      <div className="det-page">
        {/* Back button */}
        <button className="det-back" onClick={() => navigate(-1)}>
          <i className="ti ti-arrow-left" aria-hidden="true" />
          Back to portfolio
        </button>

        <div className="det-layout">
          {/* Left — image */}
          <div className="det-img-col">
            <div className="det-img-frame">
              <img src={item.image} alt={item.name} className="det-img" />
            </div>
          </div>

          {/* Right — info */}
          <div className="det-info-col">
            <div className="det-top-row">
              <div
                className="det-icon-wrap"
                style={{ background: meta.iconBg }}
              >
                <i
                  className={`ti ${meta.icon}`}
                  aria-hidden="true"
                  style={{ color: meta.accent, fontSize: 22 }}
                />
              </div>
              <span
                className="det-tag"
                style={{ background: meta.tagBg, color: meta.tagColor }}
              >
                {meta.label}
              </span>
            </div>

            <h1 className="det-name">{item.name}</h1>
            <p className="det-type">{item.projectType}</p>

            <div className="det-divider" />

            <h2 className="det-section-label">About this project</h2>
            <p className="det-desc">{item.description}</p>

            <div className="det-meta-grid">
              <div className="det-meta-item">
                <span className="det-meta-label">Category</span>
                <span className="det-meta-value">{meta.label}</span>
              </div>
              <div className="det-meta-item">
                <span className="det-meta-label">Platform</span>
                <span className="det-meta-value">Mobile</span>
              </div>
              <div className="det-meta-item">
                <span className="det-meta-label">Type</span>
                <span className="det-meta-value">{item.projectType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
