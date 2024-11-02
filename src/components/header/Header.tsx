import Navbar from "../navbar/Navbar";

// * COMPONENT: Header
function Header() {
  // @ Output
  return (
    <header className="mb-12 mt-5 md:mb-[90px] lg:mb-[127px] lg:mt-10 lg:mr-[30px]  section-container">
      {/* <header className="mb-12 mt-5 md:mb-[66px] lg:mb-16"> */}
      <Navbar />
    </header>
  );
}

export default Header;
