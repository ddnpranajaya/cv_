import Hero from "./components/hero";
import "./dyp-style.css"
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import FavColor from "./components/favColor";
import ContactForm from "./components/contact";
import Form from "./components/contact";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import MyGallery from "./components/Gallery";

export default function Gallery() {
  return (
    <section>
      <Hero />
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills/>
      <MyGallery/>
      <ContactForm/>

    </section>
  );
}
