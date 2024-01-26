import React from "react";
import ServicesdetailsBanner from "../Banner/ServicesdetailsBanner";
import Language from "../../assets/images/English course.png";
import InformationBox from "../Information-box";
import "./index.css";
import langsupport from '../../assets/images/langsupport.jpg'
import langsupportone from '../../assets/images/langsupportone.jpg'


const LanguageSupport = () => {
  return (
    <>
      <ServicesdetailsBanner
        heading="We provide comprehensive language education and support to Diploma levels, by preparing our students for successful university-level studies to have a Degree in foreign languages.
        "
        image={Language}
      />
      <section className="chance__section">
        <div className="diechancekarte__heading">
          <h2>
            Comprehensive Language Education and Support to Diploma Levels.
          </h2>
        </div>
        <div className="diechancekarte__sub-heading">
          <p style={{
            marginBottom: "30px"
          }}>
            Learning a foreign language such as German🇩🇪, French 🇫🇷, or
            Spanish🇪🇦 to an intermediate or Diploma level (B1) is an excellent
            achievement and can open doors to various academic and professional
            opportunities. It's great to hear that Dash Language School offers a
            pathway to gain direct entry to renowned universities for foreign
            language courses without requiring the Joint Admissions and
            Matriculation Board (JAMB) examination in Nigeria.
          </p>
          <p style={{
            marginBottom: "30px"
          }}>
            For individuals aspiring to pursue a degree course in foreign
            languages at universities like Obafemi Awolowo University(OAU),
            University of Ibadan(UI), University of Nigeria, NSUKKA(UNN), or
            Lagos State University, achieving proficiency in a foreign language
            is a critical step. Being able to bypass the typical JAMB admission
            process can offer a unique and appealing opportunity for students
            who are passionate about foreign language study.
          </p>
          <p style={{
            marginBottom: "30px"
          }}>
            For students considering this pathway, it's important to understand
            the specific language proficiency and academic requirements for
            direct entry to the second year of a degree course at these
            universities. It's essential to ensure that the language courses and
            qualifications offered by Dash Language School align with the
            admission criteria of the desired universities.
          </p>

          <img src={langsupport} alt="DASH helping students with comprehensive language support" />

          <p style={{
            marginBottom: "30px"
          }}>
            Additionally, it's crucial for prospective students to thoroughly
            decide, research, and understand the language degree courses
            available at the universities they intend to apply to. This will
            help to ensure that the chosen university and degree course align
            with their academic and career aspirations.
          </p>
          <p style={{
            marginBottom: "30px"
          }}>
            It's also important for students to bear in mind that while
            bypassing the JAMB examination can streamline the admission process,
            there may still be specific academic and language proficiency
            standards that must be met to gain entry to the foreign language
            programs at these universities.
          </p>
          <p style={{
            marginBottom: "30px"
          }}>
            Dash Language School provides a comprehensive curriculum that
            focuses not only on language proficiency but also on cultural
            understanding, academic writing, and critical thinking in the target
            language, this could greatly enhance the preparedness of students
            for university-level studies in a foreign language and also pass the
            B1( Diploma) international examinations.
          </p>

          <p style={{
            marginBottom: "30px"
          }}>
            Lastly, students who are considering this pathway should seek
            clarification from us regarding the specific admission requirements,
            the duration of the language course, the content of the curriculum,
            and any additional academic support or resources that will be
            provided to ensure a smooth transition to university studies. We
            will support you with admission processing.
          </p>
        </div>

        <div className="chance__new">
          <p>Conclusion</p>
          <img src={langsupportone} alt="DASH helping students with comprehensive language support" />
          <p>
            In conclusion, the opportunity to gain direct admission to the
            second year of a degree course at renowned universities for foreign
            language studies through the completion of a B1-level(Diploma)
            language course at Dash Language School and passing the
            international B1 diploma examination is an exciting prospect for
            aspiring students. Our role is to thoroughly, teach, and prepare our
            students for the B1 examination and also research the academic
            programs and requirements at the universities they intend to apply
            to, and ensure that the language courses provide a solid foundation
            for success at the university level. We take proactive steps to seek
            information, understand the requirements, and prepare our students
            for the academic journey that will greatly contribute to their
            success in pursuing this pathway.
          </p>
        </div>

        <InformationBox />
      </section>
    </>
  );
};

export default LanguageSupport;
