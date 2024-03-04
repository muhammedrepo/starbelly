/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../Logo'

interface MiniCartProps {
  isMiniCartOpen: boolean
}

interface InfoBarProps {
  isInfoBarOpen: boolean
}

interface MenuButtonProps {
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

interface InfoButtonProps {
  isInfoBarOpen: boolean
  toggleInfoBar: () => void
}

function TopBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMiniCartOpen, setMiniCartOpen] = useState(false)
  const [isInfoBarOpen, setInfoBarOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleMiniCart = () => {
    setMiniCartOpen(!isMiniCartOpen)
  }

  const toggleInfoBar = () => {
    setInfoBarOpen(!isInfoBarOpen)
  }

  return (
    <div className="sb-top-bar-frame">
      <div className="sb-top-bar-bg"></div>
      <div className="container">
        <div className="sb-top-bar">
          <Link href="/" className="sb-logo-frame">
            <Logo />
          </Link>
          <div className="sb-right-side">
            <Navigation isMobileMenuOpen={isMobileMenuOpen} />
            <MiniCart isMiniCartOpen={isMiniCartOpen} />
            <InfoBar isInfoBarOpen={isInfoBarOpen} />
            <div className="sb-buttons-frame">
              <CartButton toggleMiniCart={toggleMiniCart} />
              <MenuButton
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
              />
              <InfoButton
                isInfoBarOpen={isInfoBarOpen}
                toggleInfoBar={toggleInfoBar}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CartButton({ toggleMiniCart }: { toggleMiniCart: () => void }) {
  return (
    <div
      className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0 sb-btn-cart"
      onClick={() => toggleMiniCart()}>
      <span className="sb-icon">
        <img src="img/ui/icons/cart.svg" alt="icon" />
      </span>
      <i className="sb-cart-number">5</i>
    </div>
  )
}

function MenuButton({ isMobileMenuOpen, toggleMobileMenu }: MenuButtonProps) {
  return (
    <div
      className={`sb-menu-btn ${isMobileMenuOpen ? 'sb-active' : ''}`}
      onClick={() => toggleMobileMenu()}>
      <span></span>
    </div>
  )
}

function InfoButton({ isInfoBarOpen, toggleInfoBar }: InfoButtonProps) {
  return (
    <div
      className={`sb-info-btn ${isInfoBarOpen ? 'sb-info-btn sb-active' : ''}`}
      onClick={() => toggleInfoBar()}>
      <span></span>
    </div>
  )
}

function Navigation({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) {
  return (
    <nav id="sb-dynamic-menu" className="sb-menu-transition">
      <ul className={`sb-navigation ${isMobileMenuOpen ? 'sb-active' : ''}`}>
        <li className="sb-active sb-has-children">
          <Link href="/home">Home</Link>
        </li>
        <li className="sb-has-children">
          <Link href="/about">About</Link>
        </li>
        <li className="sb-has-children">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="sb-has-children">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="sb-has-children">
          <Link href="/home">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

function InfoBar({ isInfoBarOpen }: InfoBarProps) {
  return (
    <div className={`sb-info-bar ${isInfoBarOpen ? 'sb-active' : ''}`}>
      <div className="sb-infobar-content">
        <div className="sb-ib-title-frame sb-mb-30">
          <h4>Contact</h4>
          <i className="fas fa-arrow-down"></i>
        </div>
        <ul className="sb-list sb-mb-30">
          <li>
            <b>Address:</b>
            <span>Montréal, 1510 Rue Sauvé</span>
          </li>
          <li>
            <b>Working hours:</b>
            <span>09:00 - 23:00</span>
          </li>
          <li>
            <b>Phone:</b>
            <span>+02 (044) 756-X6-52</span>
          </li>
          <li>
            <b>Email:</b>
            <span>starbelly@mail.com</span>
          </li>
        </ul>
        <div className="sb-ib-title-frame sb-mb-30">
          <h4>Instagram</h4>
          <i className="fas fa-arrow-down"></i>
        </div>
        <ul className="sb-instagram sb-mb-30">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <li key={id}>
              <a href="#.">
                <img src={`img/instagram/${id}.jpg`} alt="instagram" />
              </a>
            </li>
          ))}
        </ul>
        <hr />
        <div className="sb-ib-title-frame sb-mb-30">
          <h4>Latest publications</h4>
          <i className="fas fa-arrow-down"></i>
        </div>
        {[1, 2, 3].map((id) => (
          <Link
            key={id}
            href={`publication-${id}`}
            className="sb-blog-card sb-blog-card-sm sb-mb-30">
            <div className="sb-cover-frame">
              <img src={`img/blog/${id}.jpg`} alt="cover" />
            </div>
            <div className="sb-blog-card-descr">
              <h5 className="sb-mb-5">Title {id}</h5>
              <p className="sb-text sb-text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                optio, sed expedita.
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="sb-info-bar-footer">
        <ul className="sb-social">
          <li>
            <Link href="#.">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="#.">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href="#.">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link href="#.">
              <i className="fab fa-youtube"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

function MiniCart({ isMiniCartOpen }: MiniCartProps) {
  return (
    <div className={`sb-minicart ${isMiniCartOpen ? 'sb-active' : ''}`}>
      <div className="sb-minicart-content">
        <div className="sb-ib-title-frame sb-mb-30">
          <h4>Your order.</h4>
          <i className="fas fa-arrow-down"></i>
        </div>
        <Link href="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
          <div className="sb-cover-frame">
            <img src="img/menu/4.jpg" alt="product" />
          </div>
          <div className="sb-card-tp">
            <h4 className="sb-card-title">Saumon Gravlax</h4>
            <div className="sb-price">
              <sub>$</sub> 9
            </div>
          </div>
        </Link>
        <Link href="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
          <div className="sb-cover-frame">
            <img src="img/menu/1.jpg" alt="product" />
          </div>
          <div className="sb-card-tp">
            <h4 className="sb-card-title">Chevrefrit au miel</h4>
            <div className="sb-price">
              <sub>$</sub> 14
            </div>
          </div>
        </Link>
        <Link href="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
          <div className="sb-cover-frame">
            <img src="img/menu/2.jpg" alt="product" />
          </div>
          <div className="sb-card-tp">
            <h4 className="sb-card-title">Croustillant de poisson</h4>
            <div className="sb-price">
              <sub>$</sub> 4
            </div>
          </div>
        </Link>
        <Link href="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
          <div className="sb-cover-frame">
            <img src="img/menu/3.jpg" alt="product" />
          </div>
          <div className="sb-card-tp">
            <h4 className="sb-card-title">Stracciatella</h4>
            <div className="sb-price">
              <sub>$</sub> 11
            </div>
          </div>
        </Link>
        <Link href="/product" className="sb-menu-item sb-menu-item-sm sb-mb-15">
          <div className="sb-cover-frame">
            <img src="img/menu/5.jpg" alt="product" />
          </div>
          <div className="sb-card-tp">
            <h4 className="sb-card-title">Carpaccio de daurade</h4>
            <div className="sb-price">
              <sub>$</sub> 19
            </div>
          </div>
        </Link>
      </div>
      <div className="sb-minicart-footer">
        <Link href="/cart" className="sb-btn sb-btn-gray sb-btn-text">
          <span>View order</span>
        </Link>
        <Link href="/checkout" className="sb-btn sb-btn-text">
          <span>Checkout</span>
        </Link>
      </div>
    </div>
  )
}

function Starbelly() {
  return (
    <>
      <TopBar />
    </>
  )
}

export default Starbelly
