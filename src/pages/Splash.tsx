const Splash = () => {
  return (
    <div className="splash-main">
      <div className="marquee">
        <div className="marquee__content">
          <span>- EMMA GERIGSCOTT -</span>
          <span>- EMMA GERIGSCOTT -</span>
        </div>
        <div aria-hidden="true" className="marquee__content">
          <span>- EMMA GERIGSCOTT -</span>
          <span>- EMMA GERIGSCOTT -</span>
        </div>
      </div>
      <div className="splash-background"></div>
    </div>
  );
};

export default Splash;
