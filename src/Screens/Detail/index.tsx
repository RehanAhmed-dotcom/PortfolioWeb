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

//Previously working below
// import { useLocation, useNavigate } from "react-router-dom";
// import SideBar from "../../Component/SideBar";
// import { useState } from "react";
// import { IoMenu } from "react-icons/io5";
// import "./Detail.css";

// const categoryMeta: Record<
//   string,
//   {
//     iconBg: string;
//     accent: string;
//     tagBg: string;
//     tagColor: string;
//     icon: string;
//     label: string;
//   }
// > = {
//   "Job Finder App": {
//     iconBg: "#E6F1FB",
//     accent: "#185FA5",
//     tagBg: "#E6F1FB",
//     tagColor: "#0C447C",
//     icon: "ti-briefcase",
//     label: "Mobile",
//   },
//   "Product Delivery App": {
//     iconBg: "#E1F5EE",
//     accent: "#0F6E56",
//     tagBg: "#E1F5EE",
//     tagColor: "#085041",
//     icon: "ti-truck-delivery",
//     label: "Mobile",
//   },
//   "Meditation Music App": {
//     iconBg: "#EEEDFE",
//     accent: "#534AB7",
//     tagBg: "#EEEDFE",
//     tagColor: "#3C3489",
//     icon: "ti-music",
//     label: "Health",
//   },
//   "Music App": {
//     iconBg: "#EEEDFE",
//     accent: "#534AB7",
//     tagBg: "#EEEDFE",
//     tagColor: "#3C3489",
//     icon: "ti-music",
//     label: "Health",
//   },
//   "E-commerce App": {
//     iconBg: "#FAEEDA",
//     accent: "#854F0B",
//     tagBg: "#FAEEDA",
//     tagColor: "#633806",
//     icon: "ti-shopping-bag",
//     label: "E-commerce",
//   },
//   "Food delivery App": {
//     iconBg: "#FAECE7",
//     accent: "#993C1D",
//     tagBg: "#FAECE7",
//     tagColor: "#712B13",
//     icon: "ti-tools-kitchen-2",
//     label: "Mobile",
//   },
//   "Food Delivery App": {
//     iconBg: "#FAECE7",
//     accent: "#993C1D",
//     tagBg: "#FAECE7",
//     tagColor: "#712B13",
//     icon: "ti-tools-kitchen-2",
//     label: "Mobile",
//   },
//   "Blood Donation App": {
//     iconBg: "#FCEBEB",
//     accent: "#A32D2D",
//     tagBg: "#FCEBEB",
//     tagColor: "#791F1F",
//     icon: "ti-heart",
//     label: "Health",
//   },
// };

// const AppleIcon = () => (
//   <svg
//     width="22"
//     height="22"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     aria-hidden="true"
//   >
//     <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//   </svg>
// );

// const Detail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { item } = location.state;
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const meta = categoryMeta[item.projectType] ?? {
//     iconBg: "#F1EFE8",
//     accent: "#5F5E5A",
//     tagBg: "#F1EFE8",
//     tagColor: "#444441",
//     icon: "ti-device-mobile",
//     label: "App",
//   };

//   return (
//     <div className="homeMain">
//       <button
//         className="mobileMenuBtn"
//         onClick={() => setSidebarOpen(!sidebarOpen)}
//       >
//         <IoMenu size={20} color="black" />
//       </button>
//       <SideBar isOpen={sidebarOpen} isClose={() => setSidebarOpen(false)} />

//       <div className="det-page">
//         {/* Back button */}
//         <button className="det-back" onClick={() => navigate(-1)}>
//           <i className="ti ti-arrow-left" aria-hidden="true" />
//           Back to portfolio
//         </button>

//         <div className="det-layout">
//           {/* Left — image + App Store button */}
//           <div className="det-img-col">
//             <div className="det-img-frame">
//               <img src={item.image} alt={item.name} className="det-img" />
//             </div>

//             {item.appStoreUrl && (
//               <a
//                 href={item.appStoreUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="det-appstore-btn"
//                 aria-label={`Download ${item.name} on the App Store`}
//               >
//                 <AppleIcon />
//                 <div className="det-appstore-btn-text">
//                   <span className="det-appstore-btn-sub">Download on the</span>
//                   <span className="det-appstore-btn-main">App Store</span>
//                 </div>
//               </a>
//             )}
//           </div>

//           {/* Right — info */}
//           <div className="det-info-col">
//             <div className="det-top-row">
//               <div
//                 className="det-icon-wrap"
//                 style={{ background: meta.iconBg }}
//               >
//                 <i
//                   className={`ti ${meta.icon}`}
//                   aria-hidden="true"
//                   style={{ color: meta.accent, fontSize: 22 }}
//                 />
//               </div>
//               <span
//                 className="det-tag"
//                 style={{ background: meta.tagBg, color: meta.tagColor }}
//               >
//                 {meta.label}
//               </span>
//             </div>

//             <h1 className="det-name">{item.name}</h1>
//             <p className="det-type">{item.projectType}</p>

//             <div className="det-divider" />

//             <h2 className="det-section-label">About this project</h2>
//             <p className="det-desc">{item.description}</p>

//             <div className="det-meta-grid">
//               <div className="det-meta-item">
//                 <span className="det-meta-label">Category</span>
//                 <span className="det-meta-value">{meta.label}</span>
//               </div>
//               <div className="det-meta-item">
//                 <span className="det-meta-label">Platform</span>
//                 <span className="det-meta-value">Mobile</span>
//               </div>
//               <div className="det-meta-item">
//                 <span className="det-meta-label">Type</span>
//                 <span className="det-meta-value">{item.projectType}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;
import { useLocation } from 'react-router-dom';
import SideBar from '../../Component/SideBar';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import './Detail.css';

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
    'Job Finder App': {
        iconBg: '#E6F1FB',
        accent: '#185FA5',
        tagBg: '#E6F1FB',
        tagColor: '#0C447C',
        icon: 'ti-briefcase',
        label: 'Mobile',
    },
    'Product Delivery App': {
        iconBg: '#E1F5EE',
        accent: '#0F6E56',
        tagBg: '#E1F5EE',
        tagColor: '#085041',
        icon: 'ti-truck-delivery',
        label: 'Mobile',
    },
    'Meditation Music App': {
        iconBg: '#EEEDFE',
        accent: '#534AB7',
        tagBg: '#EEEDFE',
        tagColor: '#3C3489',
        icon: 'ti-music',
        label: 'Health',
    },
    'Music App': {
        iconBg: '#EEEDFE',
        accent: '#534AB7',
        tagBg: '#EEEDFE',
        tagColor: '#3C3489',
        icon: 'ti-music',
        label: 'Health',
    },
    'E-commerce App': {
        iconBg: '#FAEEDA',
        accent: '#854F0B',
        tagBg: '#FAEEDA',
        tagColor: '#633806',
        icon: 'ti-shopping-bag',
        label: 'E-commerce',
    },
    'Food delivery App': {
        iconBg: '#FAECE7',
        accent: '#993C1D',
        tagBg: '#FAECE7',
        tagColor: '#712B13',
        icon: 'ti-tools-kitchen-2',
        label: 'Mobile',
    },
    'Food Delivery App': {
        iconBg: '#FAECE7',
        accent: '#993C1D',
        tagBg: '#FAECE7',
        tagColor: '#712B13',
        icon: 'ti-tools-kitchen-2',
        label: 'Mobile',
    },
    'Blood Donation App': {
        iconBg: '#FCEBEB',
        accent: '#A32D2D',
        tagBg: '#FCEBEB',
        tagColor: '#791F1F',
        icon: 'ti-heart',
        label: 'Health',
    },
};

const AppleIcon = () => (
    <svg width='22' height='22' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
        <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
    </svg>
);

const Detail = () => {
    const location = useLocation();
    const { item } = location.state;
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const meta = categoryMeta[item.projectType] ?? {
        iconBg: '#F1EFE8',
        accent: '#5F5E5A',
        tagBg: '#F1EFE8',
        tagColor: '#444441',
        icon: 'ti-device-mobile',
        label: 'App',
    };

    return (
        <div className='homeMain'>
            <button className='mobileMenuBtn' onClick={() => setSidebarOpen(!sidebarOpen)}>
                <IoMenu size={20} color='black' />
            </button>
            <SideBar isOpen={sidebarOpen} isClose={() => setSidebarOpen(false)} />

            <div className='det-page'>
                {/* Back button */}
                {/* <button className="det-back" onClick={() => navigate(-1)}>
          <i className="ti ti-arrow-left" aria-hidden="true" />
          Back to portfolio
        </button> */}

                {/* Eyebrow */}
                {/* <div className='det-eyebrow'>
                    <span className='det-eyebrow-dot' style={{ background: meta.accent }} />
                    Case Study — {meta.label}
                    <span className='det-eyebrow-rule' />
                </div> */}

                <div className='det-layout'>
                    {/* Left — image stage + App Store button */}
                    <div className='det-img-col'>
                        <div className='det-stage'>
                            <div className='det-stage-glow' style={{ background: meta.accent }} />
                            <div className='det-img-frame'>
                                <img src={item.image} alt={item.name} className='det-img' />
                            </div>
                        </div>

                        {item.appStoreUrl && (
                            <a
                                href={item.appStoreUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='det-appstore-btn'
                                aria-label={`Download ${item.name} on the App Store`}>
                                <AppleIcon />
                                <div className='det-appstore-btn-text'>
                                    <span className='det-appstore-btn-sub'>Download on the</span>
                                    <span className='det-appstore-btn-main'>App Store</span>
                                </div>
                            </a>
                        )}
                    </div>

                    {/* Right — info */}
                    <div className='det-info-col'>
                        <div className='det-top-row'>
                            <div className='det-icon-wrap' style={{ background: meta.iconBg }}>
                                <i
                                    className={`ti ${meta.icon}`}
                                    aria-hidden='true'
                                    style={{ color: meta.accent, fontSize: 22 }}
                                />
                            </div>
                            <span className='det-tag' style={{ background: meta.tagBg, color: meta.tagColor }}>
                                {meta.label}
                            </span>
                        </div>

                        <h1 className='det-name'>{item.name}</h1>
                        <p className='det-type'>{item.projectType}</p>

                        <div className='det-divider' />

                        <h2 className='det-section-label'>About this project</h2>
                        <p className='det-desc'>{item.description}</p>

                        <h2 className='det-section-label'>Project details</h2>
                        <div className='det-spec-sheet'>
                            <div className='det-spec-row'>
                                <span className='det-spec-label'>Category</span>
                                <span className='det-spec-value'>{meta.label}</span>
                            </div>
                            <div className='det-spec-row'>
                                <span className='det-spec-label'>Platform</span>
                                <span className='det-spec-value'>iOS &amp; Android</span>
                            </div>
                            <div className='det-spec-row'>
                                <span className='det-spec-label'>Type</span>
                                <span className='det-spec-value'>{item.projectType}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
