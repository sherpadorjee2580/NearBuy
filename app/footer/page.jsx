import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-gray-50 pt-10 pb-6">
      {/* Back to top */}
      <div className="footer__backtotop flex justify-center mb-8">
        <button className="footer__backtotop-btn bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Back to top
        </button>
      </div>

      {/* Footer Main */}
      <div className="footer__container max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div className="footer__section">
          <h3 className="footer__title font-semibold text-gray-800 mb-3">
            Get to know NearBuy
          </h3>
          <ul className="footer__list space-y-2 text-gray-600">
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/about">About us</Link>
            </li>
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/how-it-works">How NearBuy works</Link>
            </li>
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/mission">Our mission for Jiri</Link>
            </li>
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/stories">Stories from local sellers</Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer__section">
          <h3 className="footer__title font-semibold text-gray-800 mb-3">
            Make money with NearBuy
          </h3>
          <ul className="footer__list space-y-2 text-gray-600">
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/sell">Sell on NearBuy</Link>
            </li>
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/pricing">Merchant pricing</Link>
            </li>
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/support">Seller support</Link>
            </li>
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/promote">Promote your shop</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer__section">
          <h3 className="footer__title font-semibold text-gray-800 mb-3">
            Help & support
          </h3>
          <ul className="footer__list space-y-2 text-gray-600">
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/contact">Contact us</Link>
            </li>
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/shipping">Shipping & delivery</Link>
            </li>
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/returns">Returns & refunds</Link>
            </li>
            <li className="footer__item hover:text-gray-800 cursor-pointer">
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer__section">
          <h3 className="footer__title font-semibold text-gray-800 mb-3">
            Stay connected
          </h3>
          <p className="footer__text text-gray-600 mb-2">
            Get local offers and fresh market updates.
          </p>

          <div className="footer__subscribe flex items-center gap-2 mb-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__input border border-gray-300 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="footer__subscribe-btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>

          <p className="footer__note text-gray-500 text-sm">
            No spam, just local goodness from Jiri.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="footer__divider my-8 max-w-7xl mx-auto" />

      {/* Bottom Section */}
      <div className="footer__bottom max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-600">
        {/* Logo + Name */}
        <div className="footer__brand flex items-center gap-2 mb-3 md:mb-0">
          <div className="footer__logo w-6 h-6 bg-red-500 rounded-full"></div>
          <span className="footer__brandname font-semibold text-gray-800">
            NearBuy
          </span>
        </div>

        {/* Location + Language */}
        <div className="footer__meta flex items-center gap-4 mb-3 md:mb-0">
          <button className="footer__language flex items-center gap-2 border px-3 py-1 rounded-lg">
            🌐 English
          </button>
          <button className="footer__location flex items-center gap-2 border px-3 py-1 rounded-lg">
            📍 Jiri, Nepal
          </button>
        </div>

        {/* Social Icons */}
        <div className="footer__social flex items-center gap-4">
          <span className="cursor-pointer text-xl hover:text-gray-800">📘</span>
          <span className="cursor-pointer text-xl hover:text-gray-800">📷</span>
          <span className="cursor-pointer text-xl hover:text-gray-800">🐦</span>
        </div>
      </div>

      {/* Copyright */}
      <p className="footer__copyright text-center text-gray-500 text-sm mt-4">
        Built for Jiri · © 2025 NearBuy
      </p>
    </footer>
  );
}
