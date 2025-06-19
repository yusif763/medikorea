// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-[#0641c9] text-white py-12 px-6 lg:px-24">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-lg font-bold mb-3">MediHelp Korea</h4>
            <p>© {new Date().getFullYear()} MediHelp Korea. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Menu</h4>
            <ul>
              <li>Home</li>
              <li>How it works?</li>
              <li>Why Medihelp?</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Social</h4>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  