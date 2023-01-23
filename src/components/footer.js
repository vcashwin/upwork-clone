import React from "react";
import { FiChevronRight } from "react-icons/fi";

function Footer() {
  return (
    <div class="font-sans rounded-2xl border bg-[#001E00] flex flex-col text-white text-sm p-6 lg:p-14 justify-between">
      {/* Link Container */}
      <div className="flex flex-col lg:flex-row justify-around space-y-4 lg:space-y-0">
        <div className="flex lg:flex-col lg:space-y-4 justify-between lg:justify-start">
          <p className="flex-1 lg:flex">For Clients</p>
          <div className="hidden flex-col space-y-2 lg:flex">
            <a href="#index">How it Hire</a>
            <a href="#index">Project Catalog</a>
            <a href="#index">Talent Scout</a>
            <a href="#index">Hire an Agency</a>
            <a href="#index">Enterprise</a>
            <a href="#index">Payroll Services</a>
            <a href="#index">Direct Contracts</a>
            <a href="#index">Hire Worldwide</a>
            <a href="#index">Hire in USA</a>
          </div>
          <div className="flex lg:hidden w-fit h-fit">
            <FiChevronRight />
          </div>
        </div>
        <div className="flex lg:flex-col lg:space-y-4 justify-between lg:justify-start">
          <p>For Talent</p>
          <div className="hidden flex-col space-y-2 lg:flex">
            <a href="#index">How it Hire</a>
            <a href="#index">Project Catalog</a>
            <a href="#index">Talent Scout</a>
            <a href="#index">Hire an Agency</a>
            <a href="#index">Enterprise</a>
          </div>
          <div className="flex lg:hidden w-fit h-fit">
            <FiChevronRight />
          </div>
        </div>
        <div className="flex lg:flex-col lg:space-y-4 justify-between lg:justify-start">
          <p>Resources</p>
          <div className="hidden flex-col space-y-2 lg:flex">
            <a href="#index">How it Hire</a>
          </div>
          <div className="flex lg:hidden w-fit h-fit">
            <FiChevronRight />
          </div>
        </div>
        <div className="flex lg:flex-col lg:space-y-4 justify-between lg:justify-start">
          <p>Company</p>
          <div className="hidden flex-col space-y-2 lg:flex">
            <a href="#index">How it Hire</a>
            <a href="#index">Project Catalog</a>
            <a href="#index">Talent Scout</a>
          </div>
          <div className="flex lg:hidden w-fit h-fit">
            <FiChevronRight />
          </div>
        </div>
      </div>

      {/* Social Media Container */}
      <div></div>
    </div>
  );
}

export default Footer;
