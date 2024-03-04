/* eslint-disable @next/next/no-img-element */
function Banner() {
  return (
    <section className="sb-banner">
      <div className="sb-bg-1">
        <div></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <MainTitle />
          </div>
          <div className="col-lg-6">
            <Illustration />
          </div>
        </div>
      </div>
    </section>
  )
}

function MainTitle() {
  return (
    <div className="sb-main-title-frame">
      <div className="sb-main-title">
        <span className="sb-suptitle sb-mb-30">Hi, new friend!</span>
        <h1 className="sb-mb-30">
          We do not <span>cook</span>, <br />
          we <span>create</span> your <br />
          emotions!
        </h1>
        <p className="sb-text sb-text-lg sb-mb-30">
          Consectetur numquam poro nemo veniam
          <br />
          eligendi rem adipisci quo modi.
        </p>
        <a href="menu-1.html" className="sb-btn">
          <span className="sb-icon">
            <img src="img/ui/icons/menu.svg" alt="icon" />
          </span>
          <span>Our menu</span>
        </a>
        <a href="about-1.html" className="sb-btn sb-btn-2 sb-btn-gray">
          <span className="sb-icon">
            <img src="img/ui/icons/arrow.svg" alt="icon" />
          </span>
          <span>About us</span>
        </a>
      </div>
    </div>
  )
}

function Illustration() {
  return (
    <div className="sb-illustration-1">
      <img src="img/illustrations/girl.png" alt="girl" className="sb-girl" />
      <div className="sb-cirkle-1"></div>
      <div className="sb-cirkle-2"></div>
      <div className="sb-cirkle-3"></div>
      <div className="sb-cirkle-4"></div>
      <div className="sb-cirkle-5"></div>
      <img src="img/illustrations/3.svg" alt="phones" className="sb-pik-1" />
      <img src="img/illustrations/1.svg" alt="phones" className="sb-pik-2" />
      <img src="img/illustrations/2.svg" alt="phones" className="sb-pik-3" />
    </div>
  )
}

export default Banner
