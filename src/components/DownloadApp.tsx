/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
const DownloadApp = () => {
  return (
    <section className="sb-call-to-action">
      <div className="sb-bg-3"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="sb-cta-text">
              <h2 className="sb-h1 sb-mb-30">Download our mobile app.</h2>
              <p className="sb-text sb-mb-30">
                Consectetur numquam poro nemo veniam
                <br />
                eligendi rem adipisci quo modi.
              </p>
              <Link
                href="#."
                target="_blank"
                data-no-swup
                className="sb-download-btn">
                <img src="img/buttons/1.svg" alt="img" />
              </Link>
              <Link
                href="#."
                target="_blank"
                data-no-swup
                className="sb-download-btn">
                <img src="img/buttons/2.svg" alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sb-illustration-3">
              <img
                src="img/illustrations/phones.png"
                alt="phones"
                className="sb-phones"
              />
              <div className="sb-cirkle-1"></div>
              <div className="sb-cirkle-2"></div>
              <div className="sb-cirkle-3"></div>
              <div className="sb-cirkle-4"></div>
              <img
                src="img/illustrations/1.svg"
                alt="phones"
                className="sb-pik-1"
              />
              <img
                src="img/illustrations/2.svg"
                alt="phones"
                className="sb-pik-2"
              />
              <img
                src="img/illustrations/3.svg"
                alt="phones"
                className="sb-pik-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default DownloadApp
