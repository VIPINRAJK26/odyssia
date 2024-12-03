import "./Whatsapp.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export default function Whatsapp() {
  useEffect(() => {
    setTimeout(function () {
      document
        .getElementById("quick-message")
        .classList.add("animate__fadeOut");
      setTimeout(function () {
        document.getElementById("quick-message").remove();
      }, 300);
    }, 3000);
  }, []);
  return (
    <div>
      <div className="rs-video whatsapp-fixed">
        <div className="animate-border">
          <a
            alt="Whatsapp"
            className="video-vemo-icon btn-whatsapp"
            aria-label="WhatsApp"
            href="https://wa.me/919061395430?text=welcome"
            target="_blank"
            rel="noopener noreferrer"
            onclick="gtag_report_conversion(undefined)"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ fontSize: "2rem", color: "white" }}
            />
            <div className="sm-red-dot"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
