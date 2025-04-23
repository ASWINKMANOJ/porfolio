import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
export default function FooterComponent() {
  return (
    <footer className="h-20 w-full flex items-center justify-between font-sans px-12 sm:px-32">
      <div className="flex h-full items-center justify-center">
        <p className="text-md">© 2025 Aswin</p>
      </div>
      <div className="flex h-full items-center justify-evenly font-sans text-md">
        <a
          href="https://x.com/achooaswinjr"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <FaXTwitter fontSize={20} />
        </a>
        <a
          href="https://instagram.com/thisisaswink"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <FaInstagram fontSize={20} />
        </a>
        <a
          href="https://linkedin.com/in/aswin-k-manoj"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <FaLinkedinIn fontSize={20} />
        </a>
      </div>
    </footer>
  );
}
