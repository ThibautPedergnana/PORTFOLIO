import { useState } from "react";
import ContactImage from "../../assets/contact.jpg";
import ContactForm from "../ContactForm";
import EmailIcon from "../../assets/icons/EmailIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import Modal from "../Modal";
import { useLanguage } from "../../hooks/useLanguage";
import { getTranslation } from "../../translations";

import theme from "../../config/theme";
import LinkInIcon from "@/assets/icons/LinkInIcon";

const Contact = () => {
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const showModal = (message: string) => {
    setModalMessage(message);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      const translatedMessage = getTranslation(language, "copied").replace(
        "{value}",
        text
      );
      showModal(translatedMessage);
    });
  };

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${ContactImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1
          className="text-5xl font-bold mb-8"
          style={{
            color: theme.darker_gray,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          CONTACT
        </h1>

        <div className="w-full flex justify-center gap-10 pl-72">
          <ContactForm
            onSubmitSuccess={() =>
              showModal(getTranslation(language, "messageSent"))
            }
          />

          <div className="p-6 flex flex-col">
            <h2
              className="text-2xl font-bold mb-6"
              style={{
                color: theme.darker_gray,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {getTranslation(language, "contactOther")}
            </h2>
            <div className="flex flex-col gap-6">
              <div
                className="relative flex justify-center items-center gap-4 cursor-pointer group"
                onClick={() => copyToClipboard("t.pedergnana290@gmail.com")}
              >
                <EmailIcon />
                <span
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = theme.blue)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = theme.darker_gray)
                  }
                  style={{ color: theme.darker_gray, transition: "color 0.3s" }}
                >
                  t.pedergnana290@gmail.com
                </span>
                {/* Tooltip */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {getTranslation(language, "copy")}
                </div>
              </div>

              <div
                className="relative flex items-center gap-4 cursor-pointer group"
                onClick={() => copyToClipboard("0782421646")}
              >
                <PhoneIcon />
                <span
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = theme.blue)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = theme.darker_gray)
                  }
                  style={{ color: theme.darker_gray, transition: "color 0.3s" }}
                >
                  0782421646
                </span>
                {/* Tooltip */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {getTranslation(language, "copy")}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/thibaut-pedergnana-62a704245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <LinkInIcon />
                  <span
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = theme.blue)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = theme.darker_gray)
                    }
                    style={{
                      color: theme.darker_gray,
                      transition: "color 0.3s",
                    }}
                  >
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} message={modalMessage} />
    </div>
  );
};

export default Contact;
