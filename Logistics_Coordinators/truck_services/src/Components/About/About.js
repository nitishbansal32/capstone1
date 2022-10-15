import styles from "./About.module.css";

import Cards from "../../Components/Cards/Cards";

import AboutImage1 from "../../Images/AboutImg.svg";

const aboutContent = [
    {
        url: { AboutImage1 },
        title: "YOUR CARGO OUR CONCERN",
        desc: "We offer a diverse range of transportation services from project cargo to cross border transportation and domestic distribution and delivery.",
        id: 0,
    },
    {
        url: { AboutImage1 },
        title: "YOUR CARGO OUR CONCERN",
        desc: "We offer a diverse range of transportation services from project cargo to cross border transportation and domestic distribution and delivery.",
        id: 1,
    },
    {
        url: { AboutImage1 },
        title: "YOUR CARGO OUR CONCERN",
        desc: "We offer a diverse range of transportation services from project cargo to cross border transportation and domestic distribution and delivery.",
        id: 2,
    },
];

const About = () => {
    return (
        <div className={styles.container}>
            {aboutContent.map((items) => (
                <Cards
                    url={items.url.AboutImage1}
                    title={items.title}
                    desc={items.desc}
                    key={items.id}
                />
            ))}
        </div>
    );
};

export default About;
