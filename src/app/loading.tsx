const loading = () => {
  return (
    <div className="sb-preloader">
      <div className="sb-preloader-bg"></div>
      <div className="sb-preloader-body">
        <div className="sb-loading">
          <div className="sb-percent">
            <span className="sb-preloader-number" data-count="101">
              00
            </span>
            <span>%</span>
          </div>
        </div>
        <div className="sb-loading-bar">
          <div className="sb-bar"></div>
        </div>
      </div>
    </div>
  )
}
export default loading
