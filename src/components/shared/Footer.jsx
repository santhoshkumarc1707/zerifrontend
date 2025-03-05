import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="Career Hub Logo" className="h-12 mb-2" />
            <h2 className="text-xl font-bold">Career Hub</h2>
            <p className="text-sm">© 2025 Career Hub. All rights reserved.</p>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">Company</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="font-semibold mb-2">How It Works</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-semibold mb-2">FAQ</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">General Questions</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="#">Billing</a></li>
              <li><a href="#">Technical Issues</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-end space-x-4 mt-6">
          <a href="https://facebook.com" className="hover:text-gray-500" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
            </svg>
          </a>
          <a href="https://twitter.com" className="hover:text-gray-500" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
            </svg>
          </a>
          <a href="https://youtube.com" className="hover:text-gray-500" aria-label="YouTube">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.982 2.982 0 00-2.1-2.109C19.217 3.5 12 3.5 12 3.5s-7.217 0-9.398.577a2.982 2.982 0 00-2.1 2.109A31.297 31.297 0 000 12c0 2.77.365 5.551 1.502 7.814a2.982 2.982 0 002.1 2.109C4.783 20.5 12 20.5 12 20.5s7.217 0 9.398-.577a2.982 2.982 0 002.1-2.109A31.297 31.297 0 0024 12a31.297 31.297 0 00-.502-5.814zM9.75 15.75V8.25l6.75 3.75-6.75 3.75z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
