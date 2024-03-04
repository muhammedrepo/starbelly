/* eslint-disable @next/next/no-img-element */

interface CategoryCardProps {
  icon: string
  title: string
  description: string
  link: string
}
function CategorySection() {
  return (
    <section className="sb-p-0-60">
      <div className="container">
        <div className="sb-group-title sb-mb-30">
          <div className="sb-left sb-mb-30">
            <h2 className="sb-mb-30">
              What do you <span>like today?</span>
            </h2>
            <p className="sb-text">
              Consectetur numquam poro nemo veniam
              <br />
              eligendi rem adipisci quo modi.
            </p>
          </div>
          <div className="sb-right sb-mb-30">
            <a href="shop-1.html" className="sb-btn sb-m-0">
              <span className="sb-icon">
                <img src="img/ui/icons/arrow.svg" alt="icon" />
              </span>
              <span>Go shopping now</span>
            </a>
          </div>
        </div>
        <div className="row">
          <CategoryCard
            icon="img/categories/1.png"
            title="Starters"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing."
            link="shop-list-1.html"
          />
          <CategoryCard
            icon="img/categories/2.png"
            title="Main dishes"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing."
            link="shop-list-1.html"
          />
          <CategoryCard
            icon="img/categories/3.png"
            title="Drinks"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing."
            link="shop-list-1.html"
          />
          <CategoryCard
            icon="img/categories/4.png"
            title="Desserts"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing."
            link="shop-list-1.html"
          />
        </div>
      </div>
    </section>
  )
}

function CategoryCard({ icon, title, description, link }: CategoryCardProps) {
  return (
    <div className="col-lg-6">
      <a href={link} className="sb-categorie-card sb-categorie-card-2 sb-mb-30">
        <div className="sb-card-body">
          <div className="sb-category-icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="sb-card-descr">
            <h3 className="sb-mb-10">{title}</h3>
            <p className="sb-text">{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CategorySection
