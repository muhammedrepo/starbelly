/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
// import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/autoplay'
// import { Autoplay, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

interface MenuItemProps {
  image: string
  title: string
  price: string
  description: string
  badge: { icon: string; label: string } | null
}

function PopularDishesSection() {
  const menuItems = [
    {
      image: 'img/menu/3.jpg',
      title: 'Carpaccio de daurade',
      price: '14',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      badge: null,
    },
    {
      image: 'img/menu/1.jpg',
      title: 'Chevrefrit au miel',
      price: '14',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      badge: null,
    },
    {
      image: 'img/menu/2.jpg',
      title: 'Saumon Gravlax',
      price: '9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      badge: { icon: 'fas fa-leaf', label: 'Vegan' },
    },
    {
      image: 'img/menu/9.jpg',
      title: 'Croustillant de poisson',
      price: '4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      badge: { icon: 'fas fa-pepper-hot', label: 'Hot' },
    },
    {
      image: 'img/menu/5.jpg',
      title: 'Carpaccio de daurade',
      price: '6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      badge: { icon: 'fas fa-leaf', label: 'Vegan' },
    },
    {
      image: 'img/menu/4.jpg',
      title: 'Stracciatella',
      price: '11',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      badge: null,
    },
  ]

  return (
    <section className="sb-short-menu sb-p-0-90">
      <div className="sb-bg-2">
        <div></div>
      </div>
      <div className="container">
        <div className="sb-group-title sb-mb-30">
          <div className="sb-left sb-mb-30">
            <h2 className="sb-mb-30">
              Most <span>popular</span> dishes
            </h2>
            <p className="sb-text">
              Consectetur numquam poro nemo veniam
              <br />
              eligendi rem adipisci quo modi.
            </p>
          </div>
          <div className="sb-right sb-mb-30">
            <div className="sb-slider-nav">
              <div className="sb-prev-btn sb-short-menu-prev">
                <i className="fas fa-arrow-left"></i>
              </div>
              <div className="sb-next-btn sb-short-menu-next">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            <Link href="menu-1" className="sb-btn">
              <span className="sb-icon">
                <img src="img/ui/icons/menu.svg" alt="icon" />
              </span>
              <span>Full menu</span>
            </Link>
          </div>
        </div>
        <Swiper
          className="swiper-container sb-short-menu-slider-4i"
          navigation={{
            prevEl: '.sb-short-menu-prev',
            nextEl: '.sb-short-menu-next',
          }}>
          {menuItems.map((menuItem, index) => (
            <SwiperSlide key={index}>
              <MenuItem {...menuItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function MenuItem({ image, title, price, description, badge }: MenuItemProps) {
  return (
    <a data-fancybox="menu" data-no-swup href={image} className="sb-menu-item">
      <div className="sb-cover-frame">
        <img src={image} alt="product" />
        {badge && (
          <div className="sb-badge">
            <i className={badge.icon}></i> {badge.label}
          </div>
        )}
      </div>
      <div className="sb-card-tp">
        <h4 className="sb-card-title">{title}</h4>
        <div className="sb-price">
          <sub>$</sub> {price}
        </div>
      </div>
      <div className="sb-description">
        <p className="sb-text sb-mb-15">{description}</p>
        <ul className="sb-stars">
          <li>
            <i className="fas fa-star"></i>
          </li>
          <li>
            <i className="fas fa-star"></i>
          </li>
          <li>
            <i className="fas fa-star"></i>
          </li>
          <li>
            <i className="fas fa-star"></i>
          </li>
          <li>
            <i className="fas fa-star"></i>
          </li>
        </ul>
      </div>
    </a>
  )
}

export default PopularDishesSection
