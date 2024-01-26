import React from "react";
import ServicesdetailsBanner from "../Banner/ServicesdetailsBanner";
import Job from "../../assets/images/Resume review.png";
import InformationBox from "../Information-box";
import "./index.css";
import certone from "../../assets/images/bfdcertone.jpeg";
import certtwo from "../../assets/images/bfdcerttwo.jpeg";
import certthree from "../../assets/images/bfdcertthree.jpeg";

const DieChanceKarte = () => {
  return (
    <>
      <ServicesdetailsBanner
        heading="A Lifeline for Skilled Professionals from across the World with DASH"
        image={Job}
      />
      <section className="chance__section">
        <div className="diechancekarte__heading">
          <h2>A Lifeline for Skilled Professionals from across the World</h2>
        </div>
        <div className="diechancekarte__sub-heading">
          <p>
            Germany, known for its rich history, vibrant culture, and strong
            economy, has recently taken a bold step to address its growing need
            for skilled labor. With a demand for approximately 400,000 skilled
            workers each year, the German government has unveiled a new
            initiative termed the "Chancenkarte" simply interpreted in English,
            as "Opportunity Card". <br />
            This innovative approach aims to attract skilled workers from non-EU
            countries and bridge the gap between demand and supply in the
            country's workforce. <br />
            The Opportunity Card is a regulated visa designed to welcome
            talented professionals from around the world to contribute their
            skills and expertise to Germany's industries. Announced by the
            German government in September 2022, this new visa category is set
            to become publicly available in due time.
          </p>
        </div>
        
        <div style={{ margin: "90px 0", width: "50%" }}>
          <iframe
            src="https://jumpshare.com/embed/wwr0PFQW3Kcmul35Jkp0"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            title="Dash Video"
            style={{
              width: "100%",
              height: "500px",
            }}
          ></iframe>
        </div>

        <div className="diechancekarte__eligibility">
          <p>Eligibility</p>
          <p>
            To be eligible for the Opportunity Card, aspiring applicants must
            meet specific criteria:
          </p>

          <ol>
            <li>Age: Applicants should be under 35 years old.</li>
            <li>
              Qualifications: A university degree or professional qualifications
              are required.
            </li>
            <li>
              Experience: A minimum of three years of relevant work experience
              is necessary.
            </li>
            <li>
              Language Proficiency: Fluency in German or previous residency in
              Germany is an advantage.
            </li>
          </ol>
          <p>
            At least three of the four conditions must be met to qualify for the
            Opportunity Card. The more criteria an applicant satisfies, the
            better their chances of obtaining the visa. However, the exact
            points system for calculating eligibility remains to be clarified,
            as the Opportunity Card is still in the process of being fully
            implemented.
          </p>
        </div>

        <div className="chance__extension">
          <p>Extension of Validity</p>
          <p>
            In addition to attracting skilled workers, Germany's new immigration
            law also allows for the extension of the Opportunity Card's validity
            for up to two years. This extension provides professionals with the
            opportunity to secure a stable future in Germany and contribute to
            the country's economic growth.
          </p>
        </div>

        <div className="chance__benefit">
          <p>Benefits</p>
          <p>
            The Opportunity Card holds significant advantages for both Germany
            and skilled foreign labor:
          </p>

          <ol>
            <li>
              Ease of Job Search: With the Opportunity Card, talented
              professionals can move to Germany even without a job offer,
              similar to the existing Jobseeker visa.
            </li>
            <li>
              Attracting Foreign Talent: Germany's preference for candidates
              already residing in the country or the EU will be broadened,
              attracting a wider pool of skilled professionals.
            </li>
            <li>
              Filling the Labor Gap: The Opportunity Card helps address the
              pressing need for skilled labor, enabling German companies to hire
              talent from diverse backgrounds.
            </li>
          </ol>
        </div>

        

        <div className="chance__challenges">
          <p>Potential Challenges</p>
          <p>
            Despite its potential benefits, the Opportunity Card also presents
            some challenges:
          </p>

          <ol>
            <li>
              Limited Availability: There will be an annual upper limit on the
              number of Opportunity Cards allocated, leading to increased
              competition for a limited number of visas.
            </li>
            <li>
              Stringent Eligibility: Not everyone will be eligible for the
              Opportunity Card, and applicants must meet specific criteria to
              qualify.
            </li>
            <li>
              Lengthy Approval Process: The introduction of new verifications
              and bureaucracy may result in longer wait times for visa approval.
            </li>
            <li>
              Language Requirement: While IT professionals may find
              English-speaking job opportunities in Germany, the Opportunity
              Card may necessitate learning German, even if not required for
              their specific role.
            </li>
          </ol>
        </div>

        <div className="chance__new">
          <p>Embracing a New Path Forward</p>
          <p>
            As Germany prepares to open its doors wider to skilled professionals
            from across the globe, there is excitement and anticipation for the
            implementation of the Opportunity Card. The initiative holds the
            potential to enrich Germany's workforce with diverse talents and
            perspectives while offering skilled workers a gateway to a
            prosperous future. Aspiring applicants interested in exploring this
            exciting opportunity can seek language proficiency through platforms
            like DASH Language School, which offers online and on-site language
            classes. Embracing the language and understanding its culture may
            prove vital in securing the coveted Opportunity Card and embarking
            on a fulfilling professional journey in Germany.
          </p>

          <div className="chance--images">
            <img src={certone} alt="Our BFD Certificates" />

            <img src={certtwo} alt="Our BFD Certificates" />

            <img src={certthree} alt="Our BFD Certificates" />
          </div>

          <p>
            Visa Right( insurance. visa right. eu) 39104 Magdeburg, GERMANY and
            Barmer Health Insurance Germany ( www.barmer.de) Axel Springer 10969
            Berlin, GERMANY. in partnership with DASH LANGUAGE SCHOOL (
            www.dashlanguageschool.com.ng) to help Students and Skilled workers
            with their visa approval and also, to deal with the heavy
            bureaucratic processes in Germany. This is a game changer for people
            traveling to Germany for Work, Studies, and/or training. DASH
            LANGUAGE SCHOOL is Unlocking Global Opportunities by becoming an
            ambassador to Visa Right and Barmer Healthcare insurance service in
            Germany to hasten up Visa processing for Applicants.
          </p>
        </div>

        <InformationBox />
      </section>
    </>
  );
};

export default DieChanceKarte;
