
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  price: string;
  buttonText: string;
  whatsappLink: string;
  linkTo?: string;
}

const ServiceCard = ({
  title,
  icon,
  description,
  price,
  buttonText,
  whatsappLink,
  linkTo,
}: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (linkTo) {
      navigate(linkTo);
    } else {
      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <div className="service-card bg-white rounded-xl shadow-md p-6 hover:shadow-xl">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-custom-purple mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="font-bold text-xl mb-5 text-custom-purple">{price}</div>
      <button
        onClick={handleButtonClick}
        className="w-full bg-custom-purple hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-lg flex justify-center items-center gap-2 transition-all"
      >
        {buttonText}
        <ArrowLeft size={16} className="rtl:rotate-180" />
      </button>
    </div>
  );
};

export default ServiceCard;
