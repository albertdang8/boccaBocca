import "./Work.css";

const Work = () => {
  return (
    <section className="work container section">
      <h2 className="work__title">Locations</h2>
      <p className="work__description">
        Mollit pariatur tempor nisi dolor non consequat magna cupidatat
        reprehenderit. Aliquip excepteur ullamco aliquip magna est et commodo
        deserunt ipsum.
      </p>
      <div className="work__container">
        {/* location1 */}
        <h3 className="work__project-title">Location1</h3>
        <div className="work__img-wrapper work__image1">
          <img src="/screentest.png" alt="text image" />
        </div>
        <div className="work__project work__content1">
          <h3 className="work__project-subtitle">Location1a</h3>
          <p className="work__project-description1">
            Labore magna ut non labore Lorem nisi culpa sint et quis sint. Enim
            pariatur deserunt do ad exercitation.
          </p>
          <p className="work__project-description2">
            Ea ut non cupidatat consequat sint elit ipsum culpa dolor cillum
            commodo. Do esse excepteur cillum deserunt duis incididunt. Eu
            tempor ullamco aliqua consectetur incididunt anim dolor sunt laboris
            adipisicing cupidatat sint.
          </p>
          <a href="#" className="btn work__project-btn">
            Website
          </a>
        </div>

        {/* location2 */}
        <h3 className="work__project-title">Location2</h3>
        <div className="work__img-wrapper work__image2">
          <img src="/screentest.png" alt="text image" />
        </div>
        <div className="work__project work__content2">
          <h3 className="work__project-subtitle">Location2a</h3>
          <p className="work__project-description1">
            Sunt sint labore officia irure. Dolore pariatur nisi deserunt sunt
            exercitation excepteur do reprehenderit fugiat Lorem sint ut.
          </p>
          <p className="work__project-description2">
            Mollit ipsum mollit magna occaecat eiusmod sint fugiat est non
            adipisicing esse fugiat deserunt minim. Enim occaecat velit eu non
            amet nostrud officia duis.
          </p>
          <a href="#" className="btn work__project-btn">
            Website
          </a>
        </div>

        {/* location3 */}
        <h3 className="work__project-title">Location3</h3>
        <div className="work__img-wrapper work__image3">
          <img src="/screentest.png" alt="text image" />
        </div>
        <div className="work__project work__content3">
          <h3 className="work__project-subtitle">Location3a</h3>
          <p className="work__project-description1">
            Aliquip eu ad est reprehenderit veniam irure exercitation in velit
            enim ipsum.
          </p>
          <p className="work__project-description2">
            Elit est amet quis incididunt officia velit eiusmod do amet. Sint
            non qui nulla sit ex cillum non pariatur velit proident ut aliqua
            fugiat incididunt id minim.
          </p>
          <a href="#" className="btn work__project-btn">
            Website
          </a>
        </div>

        {/* location4 */}
        <h3 className="work__project-title">Location4</h3>
        <div className="work__img-wrapper work__image4">
          <img src="/screentest.png" alt="text image" />
        </div>
        <div className="work__project work__content4">
          <h3 className="work__project-subtitle">Location4a</h3>
          <p className="work__project-description1">
            Aliquip eu ad est reprehenderit veniam irure exercitation in velit
            enim ipsum.
          </p>
          <p className="work__project-description2">
            Elit est amet quis incididunt officia velit eiusmod do amet. Sint
            non qui nulla sit ex cillum non pariatur velit proident ut aliqua
            fugiat incididunt id minim.
          </p>
          <a href="#" className="btn work__project-btn">
            Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
