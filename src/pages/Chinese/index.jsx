import React from "react";
import WhyLanguage from "../../components/Grids/WhyLanguage";
import BasicTable from "../../components/Table/BasicTable";
import LanguageBanner from "../../components/Banner/LanguageBanner";
import InformationBox from "../../components/Information-box";
import "../German/index.css";
import ChineseCard from "../../components/Card/ChineseCard";

function Chinese() {
  return (
    <>
      <LanguageBanner
        heading="Learn Chinese with DASH Language School"
        paragraph="nǐ hǎo! We guess you are interested in taking one of our comprehensive
        Chinese language Courses. Not to worry, We've got you covered."
        countrycode="CN"
      />

      <section>
        <WhyLanguage
          title="Why Learn Chinese"
          about="Mandarin Chinese is not just a language; it's a gateway to a rich tapestry of culture, history, and economic opportunities. Spoken by over a billion people worldwide, it is not only the official language of China but also holds significant influence in various international spheres."
          subtitle="Do you need to learn Chinese to be accepted into a university, or for family relatiosnhip or reunion, professional or business? "
          anotherparagraph="At our language school, we recognize the importance of mastering Chinese in today's globalized world. With a curriculum designed to enhance your proficiency in SPEAKING, WRITING, READING, and LISTENING, our courses are meticulously crafted to provide a well-rounded language learning experience. Whether you choose our PHYSICAL (ONSITE) or ONLINE (OFFSITE) COURSES, we empower you to learn at your own pace."
          paragraph="Our team of experienced and qualified teachers will assess your Chinese language proficiency at the beginning of your course. Utilizing a diverse range of modern teaching tools, including updated textbooks and audiovisual media, we ensure that your learning journey is not only educational but also engaging and dynamic."
          standard="Embark on our Comprehensive Standard Language Course, spanning 8 Weeks with an additional 1 Week dedicated to intensive HSK (Hanyu Shuiping Kaoshi) exam preparation. This 54-hour program, conducted over 6 hours weekly, equips you with the skills needed to navigate the Chinese language confidently. For those with busy schedules, our Weekend classes offer a flexible alternative, spanning 12 Weeks with an additional 1 Week for intensive HSK exam preparation. This course, totaling 54 hours, is divided into 4 hours exclusively on weekends. "
        />
        <div>
          <h2 className="heading-primary">
            Browse through our comprehensive Chinese courses
          </h2>
          <div className="card__container">
            <ChineseCard />
          </div>
        </div>

        <BasicTable />
        <InformationBox />
      </section>
    </>
  );
}

export default Chinese;
