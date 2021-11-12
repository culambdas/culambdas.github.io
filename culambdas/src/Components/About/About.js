import './about.css';
import '../../assets/styles.css';

const About = () => {
  return (
    <section id="about">
      <div className="hero">
        <div className="hero-image about-hero">
          <div className="hero-text">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <div class="flex-container" style={{ marginTop: 80 }}>
        <div class="col-4">
          <img
            src={require('../../assets/images/overview.jpg').default}
            class="about-image"
            alt="Overview"
          />
        </div>
        <div class="col-6 justify-text">
          <h2>Overview</h2>
          <p>
            Lambda Phi Epsilon is the largest and only nationally recognized
            Asian American interest fraternity. Founded in 1981 at UCLA, Lambda
            Phi Epsilon seeks to promote Asian American awareness and is
            uniquely tailored to the Asian American experience.
          </p>
          <p>
            Traditional Asian campus organizations often split along lines of
            national origins and often lack continuity in the memberships in
            those organizations with yearly turnover of officers and members.
            Student associations provide a circle of friends during your
            undergraduate experience and at worst, familiar strangers during
            periodic social functions. Lambda Phi Epsilon is an organization
            that is rich in tradition, values, and vision and seeks to enrich
            the male college student experience. We offer brotherhood that will
            endure the passage of time. We perform community service, are
            involved in the Asian American community, cultivate meaningful and
            lasting relationships, and look out for all of our brothers across
            the country, all while maintaining high academic standards. We study
            hard; we work hard; we play hard.
          </p>
        </div>
      </div>
      <div class="flex-container">
        <div class="col-6 justify-text">
          <h2>Brotherhood</h2>
          <p>
            By joining, you will enter a brotherhood that offers friendships
            that last a lifetime. Unlike many college friends who turn out to be
            "class friends" or "semester friends," Lambda Phi Epsilon offers
            brotherhood that values trust and loyalty to the highest. Our
            brotherhood is expressed in our motto, "To Be Leaders Among Men." We
            not only seek to bring together a diverse group of men who share
            interests, concerns, backgrounds, and cultures, but who believe that
            the strength of many is forged into the power of being one. If you
            ever had a best friend, you know the closeness you feel with them.
            The fraternity offers the opportunity to feel that way with numerous
            people.
          </p>
        </div>
        <div class="col-4 reverse">
          <img
            src={require('../../assets/images/brotherhood.jpeg').default}
            class="about-image"
            alt="Brotherhood"
          />
        </div>
      </div>
      <div class="flex-container">
        <div class="col-4">
          <img
            src={
              require('../../assets/images/national-connections.jpeg').default
            }
            class="about-image"
            alt="National Connections"
          />
        </div>
        <div class="col-6 justify-text">
          <h2>National Connections</h2>
          <p>
            Lambda Phi Epsilon is an internationally chartered fraternity. With
            63 Chapters across the nation and Canada, including Stanford
            University, University of Pennsylvania, University of Toronto, Johns
            Hopkins University, Duke University, Columbia University, and Lambda
            Phi Epsilon is still rapidly growing. As such, you will have
            brothers and connections in states across the US and even in Canada.
            If you ever visit any of the areas in which there is a chapter, you
            will always have a place to stay and people to show you around.
            Moreover, Lambda Phi Epsilon hosts an annual national convention
            with over 500 brothers and 20 sorority chapters present for a
            weekend of celebration. A full list of Lambda Phi Epsilon chapters
            can be found{' '}
            <a
              href="http://lambdaphiepsilon.com/membership/#chapters"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            . For more information, see the national Lambda Phi Epsilon{' '}
            <a
              href="http://lambdaphiepsilon.com/"
              target="_blank"
              rel="noreferrer"
            >
              website
            </a>
            .
          </p>
        </div>
      </div>
      <div className="sub-hero">
        <div className="hero-image national-history-hero">
          <div className="hero-text">
            <h1>National History</h1>
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="col-4">
          <img
            src={require('../../assets/images/national-history-1.jpeg').default}
            class="about-image"
            alt="National History"
          />
        </div>
        <div class="col-6 justify-text">
          <p>
            Ethnic fraternities developed as a result of the need to share and
            celebrate diversity of cultural experiences. The first Asian
            fraternity was founded at Cornell in 1916 as Rho Psi, which now
            exists as an alumni club with chapters in Hawaii, New York,
            Pennsylvania, Washington D.C. and Hong Kong. The concepts of
            brotherhood and unity aren’t new; however, our dedication and
            commitment to it is. Here is our story:
          </p>
        </div>
      </div>
      <div class="flex-container">
        <div class="col-6 justify-text">
          <p>
            Lambda Phi Epsilon was founded on February 25, 1981, by principal
            founder <b>Craig Ishigo</b> and a group of eighteen other dedicated
            men on the campus of University of California at Los Angeles. By
            forming Lambda Phi Epsilon as a new Asian American fraternity, the
            founders hoped to set new and higher standards of excellence for all
            Asian interest organizations to follow. The goal of the founders was
            to transcend the limitations to which traditional Asian American
            organizations were subject. They sought to draw their membership
            from all of the diverse segments of the Asian American community.
            Their vision was that members would eventually become leaders in
            their respective communities and bridge gaps fragmenting the Asian
            American community through their affiliation with a common
            organization. Unknowingly, their efforts had set the stage for the
            emergence of the largest organization of its kind.
          </p>
        </div>
        <div class="col-4 reverse">
          <img
            src={require('../../assets/images/national-history-2.jpeg').default}
            class="about-image"
            alt="National History"
          />
        </div>
      </div>
      <div class="flex-container">
        <div class="col-4">
          <img
            src={require('../../assets/images/national-history-3.jpeg').default}
            class="about-image"
            alt="National History"
          />
        </div>
        <div class="col-6 justify-text">
          <p>
            By 1990, six chapters had formed at the Universities of California
            at Los Angeles, Davis, Santa Barbara, Berkeley and Irvine and at the
            University of Texas at Austin. The brothers of the first chapters of
            Lambda Phi Epsilon recognized that rapid expansion loomed. In order
            to facilitate future growth, these six chapters joined to form what
            became Lambda Phi Epsilon National Fraternity.
          </p>
        </div>
      </div>
      <div class="flex-container">
        <div class="col-6 justify-text">
          <p>
            On May 28, 1990, a national governing body was established to
            coordinate individual chapter efforts at the first National
            Convention. Robert Mimaki, a Beta Chapter brother, was elected as
            the first National President and Memorial Day Weekend was designated
            as the official date for future annual National Conventions. On
            September 8, 1990, our national organization was admitted to the
            National Interfraternity Conference (NIC), making Lambda Phi Epsilon
            the first (and still only) nationally recognized Asian American
            interest fraternity in the United States. Over the years, Lambda Phi
            Epsilon has grown tremendously, boasting over 20 chapters by 1995.
            That same year, our national organization became a California
            non-profit corporation and was renamed Lambda Phi Epsilon National
            Fraternity, Inc.
          </p>
        </div>
        <div class="col-4 reverse">
          <img
            src={require('../../assets/images/national-history-4.jpeg').default}
            class="about-image"
            alt="National History"
          />
        </div>
      </div>

      <div className="sub-hero">
        <div className="hero-image service-hero">
          <div className="hero-text">
            <h1>Service</h1>
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="col-4">
          <img
            src={require('../../assets/images/service-1.jpg').default}
            class="about-image"
            alt="Service"
          />
        </div>
        <div class="col-6 justify-text">
          <h2>Philanthropy</h2>
          <p>
            On May 28, 1990, a national governing body was established to
            coordinate individual chapter efforts at the first National
            Convention. Robert Mimaki, a Beta Chapter brother, was elected as
            the first National President and Memorial Day Weekend was designated
            as the official date for future annual National Conventions. On
            September 8, 1990, our national organization was admitted to the
            National Interfraternity Conference (NIC), making Lambda Phi Epsilon
            the first (and still only) nationally recognized Asian American
            interest fraternity in the United States. Over the years, Lambda Phi
            Epsilon has grown tremendously, boasting over 20 chapters by 1995.
            That same year, our national organization became a California
            non-profit corporation and was renamed Lambda Phi Epsilon National
            Fraternity, Inc.
          </p>
        </div>
      </div>
      <div class="flex-container">
        <div class="col-6 justify-text">
          <p>
            In addition to our contributions to AADP, members of Cornell Lambda
            Phi Epsilon are very active in other parts the community at Cornell.
            The Fraternity has participated in countless other projects
            including: cleaning our portion of Route 13 for Adopt-a-Highway,
            volunteering at Ithaca High School, March of Dimes, Habitat for
            Humanity, Halloween at Southside, Ithaca Children's Garden, Day of
            Demeter, Fishes and Loaves Soup Kitchen, and Cammy Lee Leukemia
            Foundation.
          </p>
        </div>
        <div class="col-4 reverse">
          <img
            src={require('../../assets/images/service-2.jpg').default}
            class="about-image"
            alt="Service"
          />
        </div>
      </div>

      <div class="flex-container">
        <div class="col-4">
          <img
            src={require('../../assets/images/culture-1.jpg').default}
            class="about-image"
            alt="Culture"
          />
        </div>
        <div class="col-6 justify-text">
          <h2>Culture</h2>
          <p>
            In 1968, UC Berkeley student activists Yuji Ichioka and Emma Gee
            coined the term “Asian American.” Inspired by the Black Power
            Movement, they saw coalition building as a way to unite Japanese,
            Chinese and Filipino American students to combat oppression and
            build political momentum. The term was a strategically chosen label
            built by determined communities in support of social justice and
            equality. The shared history of immigration, labor exploitation and
            racism brought together a diverse umbrella of ethnic groups to form
            an undeniable presence and representation of unity in America.
          </p>
        </div>
      </div>
      <div class="flex-container">
        <div class="col-6 justify-text">
          <p>
            On campus, we aim to engage the community on the term “Asian
            American”. Similar to the Asian American activists of the Civil
            Rights era, the local chapter of Lambda Phi Epsilon views
            collaboration among all student groups on campus as key to fostering
            a deep understanding of cultural appreciation, solidarity building
            and movement towards mutual growth. We participate actively in
            cultural activities on campus, such as Asia Night and Mid-Autumn
            Festival, and collaborate with Asian-interest organizations, such as
            alpha Kappa Delta Phi, Kappa Phi Lambda, Chinese Students
            Association and Cornell Asian Pacific Student Union. In the Fall
            semester, we host Tour of Asia, a unique event hosted at the Carol
            Tatkon Center, which brings together and promotes diversity within
            the Cornell community by celebrating Asian food, culture, and
            communities.
          </p>
        </div>
        <div class="col-4 reverse">
          <img
            src={require('../../assets/images/culture-2.jpg').default}
            class="about-image"
            alt="Culture"
          />
        </div>
      </div>

      <div className="sub-hero">
        <div className="hero-image alumni-hero">
          <div className="hero-text">
            <h1>Alumni Association</h1>
          </div>
        </div>
      </div>
      <div class="flex-container">
        <div class="col-4">
          <img
            src={require('../../assets/images/alumni-1.jpg').default}
            class="about-image"
            alt="Alumni"
          />
        </div>
        <div class="col-6 justify-text">
          <h2>About</h2>
          <p>
            The mission of the Cornell Lambda Phi Epsilon Alumni Association is
            as follow: To cultivate the bonds established as brothers of Cornell
            Lambda Phi Epsilon, and to continue developing ourselves as leaders
            in our personal pursuits, professional aspirations, and communities.
          </p>
          <p>
            Cornell Lambda Phi Epsilon has a global network of 100+ dedicated
            and proactive alumni. Our alumni reside across the US and around the
            world - with a high concentration in major cities like New York
            City, Washington D.C., Boston, San Francisco, Los Angeles, and
            Chicago. We also have alumni brothers who reside internationally in
            Hong Kong, Tokyo, Singapore, and more. ​
          </p>
          <p>
            Our alumni have made substantial progress in their careers across
            many industries such as technology, financial services, medicine,
            law and more. The alumni serve as mentors for our active brothers
            both professionally and personally. Alumni plan frequent events
            across the country to reconnect and continue to grow their bonds.
            Our alumni network is one of the many things that makes our
            brotherhood the best of its kind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
