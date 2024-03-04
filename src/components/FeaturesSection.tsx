/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface FeatureItemProps {
  number: string
  title: string
  children: React.ReactNode
}

function FeaturesSection() {
  return (
    <section className="sb-p-60-0">
      <div className="container">
        <div className="row flex-md-row-reverse">
          <div className="col-lg-6 align-self-center sb-mb-30">
            <FeatureList />
          </div>
          <div className="col-lg-6 align-self-center">
            <Illustration />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureList() {
  return (
    <div>
      <h2 className="sb-mb-60">
        We are doing more than <br />
        you expect
      </h2>
      <ul className="sb-features">
        <FeatureItem number="01" title="We are located in the city center">
          <p className="sb-text">
            Porro nemo veniam necessitatibus praesentium eligendi rem temporibus
            adipisci quo modi numquam.
          </p>
        </FeatureItem>
        <FeatureItem number="02" title="Fresh, organic ingredients">
          <p className="sb-text">
            Consectetur numquam porro nemo veniam necessitatibus praesentium
            eligendi rem temporibus adipisci quo modi.
          </p>
        </FeatureItem>
        <FeatureItem number="03" title="Own fast delivery">
          <p className="sb-text">
            Necessitatibus praesentium eligendi rem temporibus adipisci quo
            modi. Lorem ipsum dolor sit.
          </p>
        </FeatureItem>
      </ul>
    </div>
  )
}

function FeatureItem({ number, title, children }: FeatureItemProps) {
  return (
    <li className="sb-features-item sb-mb-60">
      <div className="sb-number">{number}</div>
      <div className="sb-feature-text">
        <h3 className="sb-mb-15">{title}</h3>
        {children}
      </div>
    </li>
  )
}

function Illustration() {
  return (
    <div className="sb-illustration-2 sb-mb-90">
      <div className="sb-interior-frame">
        <img
          src="img/illustrations/interior.jpg"
          alt="interior"
          className="sb-interior"
        />
      </div>
      <div className="sb-square"></div>
      <div className="sb-cirkle-1"></div>
      <div className="sb-cirkle-2"></div>
      <div className="sb-cirkle-3"></div>
      <div className="sb-cirkle-4"></div>
      <div className="sb-experience">
        <div className="sb-exp-content">
          <p className="sb-h1 sb-mb-10">17</p>
          <p className="sb-h3">Years Experience</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
