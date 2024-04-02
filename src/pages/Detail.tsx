import { Footer } from "../components/nav/Footer";
import Header from "../components/nav/Header";
import Details from "../components/Shop/Detail";


const Detail = () => {
  return (
    <div>
      <Header/>
      <section className="banner">
        <div className="title-banner">
          <h2>Detail</h2>
          <h5>
            Home <i className="fa-solid fa-angle-right"></i> Shop <i className="fa-solid fa-angle-right"></i> Detail
          </h5>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdCFWca-BUtHPuK8f9bQHaBpWycVXTbaCb3sAvX1qOvd7OBX2X2Se7akrCo2i8ktOFpZXTWKbew0cX7o1W96m~p~DjWAdttnAlr-5AL2gztDIVNYulChxiRCCAnpYg~x-En2GXzaVd3fOqP1PU2RI9jXlXhsQgYTm0eZcflbGEn6798tXoQqegMax545SYH~bXoEtXilLJzm2FSyjtR1RBCzmz6ZXg7IZY4Z8Gl363etfdj5KprZS8ybCmoUBbZ~~RIyu5KUb7di8NN4ePSI2fwmo2RU1BTdtnI75Ptr5BNy5UJEBXgW9S-iRcTmPBltKCNsIu9b8MOPVdhBew38nw__"
          alt=""
        />
      </section>
      <Details />
      <Footer />
    </div>
  );
};

export default Detail;
