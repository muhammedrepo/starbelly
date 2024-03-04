/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
const TeamList = () => {
  return (
    <section className="sb-p-0-60">
      <div className="container">
        <div className="sb-group-title sb-mb-30">
          <div className="sb-left sb-mb-30">
            <h2 className="sb-mb-30">
              They will <span>cook</span> for you
            </h2>
            <p className="sb-text">
              Consectetur numquam poro nemo veniam
              <br />
              eligendi rem adipisci quo modi.
            </p>
          </div>
          <div className="sb-right sb-mb-30">
            <Link href="about-1" className="sb-btn sb-m-0">
              <span className="sb-icon">
                <img src="img/ui/icons/arrow.svg" alt="icon" />
              </span>
              <span>More about us</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="sb-team-member sb-mb-30">
              <div className="sb-photo-frame sb-mb-15">
                <img src="img/team/1.png" alt="Team member" />
              </div>
              <div className="sb-member-description">
                <h4 className="sb-mb-10">Paul Trueman</h4>
                <p className="sb-text sb-text-sm sb-mb-10">Chef</p>
                <ul className="sb-social">
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <a href="#.">
                      <i className="far fa-circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="sb-team-member sb-mb-30">
              <div className="sb-photo-frame sb-mb-15">
                <img src="img/team/2.png" alt="Team member" />
              </div>
              <div className="sb-member-description">
                <h3 className="sb-mb-10">Emma Newman</h3>
                <p className="sb-text sb-text-sm sb-mb-10">Assistant chef</p>
                <ul className="sb-social">
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="sb-team-member sb-mb-30">
              <div className="sb-photo-frame sb-mb-15">
                <img src="img/team/3.png" alt="Team member" />
              </div>
              <div className="sb-member-description">
                <h3 className="sb-mb-10">Oscar Oldman</h3>
                <p className="sb-text sb-text-sm sb-mb-10">Chef</p>
                <ul className="sb-social">
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="sb-team-member sb-mb-30">
              <div className="sb-photo-frame sb-mb-15">
                <img src="img/team/4.png" alt="Team member" />
              </div>
              <div className="sb-member-description">
                <h3 className="sb-mb-10">Ed Freeman</h3>
                <p className="sb-text sb-text-sm sb-mb-10">Assistant chef</p>
                <ul className="sb-social">
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#.">
                      <i className="far fa-circle"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TeamList
