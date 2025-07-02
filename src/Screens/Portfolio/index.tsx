import { useNavigate } from "react-router-dom";
import jm from "../../assets/jm.png";
import work from "../../assets/workaman.png";
import mb from "../../assets/mindBalance.png";
import qs from "../../assets/quickserv.png";
import aduane from "../../assets/aduane.png";
import kuwait from "../../assets/Kuwait.png";
const Portfolio = () => {
  const arr = [
    {
      id: 1,
      name: "Job Mark",
      image: jm,
      projectType: "Job Finder App",
      description:
        "Job Finding app in which user can see reels add reels, apply on jobs, contact with clients, work on multiple shifts and invoices about work.",
    },
    {
      id: 2,
      name: "Workaman",
      image: work,
      projectType: "Product Delivery App",
      description:
        "Product delivery app in which user can check products its orignal places, order products,contact with delivery man and check status of the prodects delivering.",
    },
    {
      id: 3,
      name: "Mind Balance",
      image: mb,
      projectType: "Music App",
      description:
        "Music app in which user can see meditaion music list, play music and saving options with purchase options.",
    },
    {
      id: 4,
      name: "Quickserv",
      image: qs,
      projectType: "E-commerce App",
      description:
        "E-commerce app which provides multiple stores and purchasing options with multiples stores with cart and purchasing options.",
    },
    {
      id: 5,
      name: "Aduane",
      image: aduane,
      projectType: "Food delivery App",
      description:
        "Food delivery app in which restaurants list are shown user can select product and recommendations are shown with payment options and can also share their order with friends",
    },
    {
      id: 6,
      name: "Kuwait",
      image: kuwait,
      projectType: "Blood Donation App",
      description:
        "Blood donation app in which user can donate blood to other people, schedule the donation and also print out receipt",
    },
  ];
  const navigate = useNavigate();

  const openDetail = (id: number, item: any) => {
    navigate(`/detail/${id}`, { state: { item } });
  };
  return (
    <section className="skilldiv" id={"Portfolio"}>
      <div className="ResumelDiv">
        <h2 className="headingAbout">Portfolio</h2>
        <p className="dummyAbout">
          Visual representation of my work and projects.
        </p>
        <div className="rowPortfolio">
          {arr.map((item) => (
            <div className="oneProject">
              <span
                onClick={() => openDetail(item.id, item)}
                className="oneProject"
              >
                <img src={item.image} />
              </span>
              <h2 className="projectname">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
