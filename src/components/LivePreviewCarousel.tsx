
import React from "react";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";
import { Button } from "@/components/ui/button";

const LivePreviewCarousel = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-purple-50 to-turquoise-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-custom-purple mb-3 font-rubik">
            דוגמאות מעבודות שלנו
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            צפו בדוגמאות של אתרים ודפי נחיתה שיצרנו ללקוחות שלנו
          </p>
        </div>

        <div className="mb-8">
          <ThreeDPhotoCarousel />
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600 mb-3 text-sm">
            רוצים לראות איך האתר שלכם יכול להיראות?
          </p>
          <a
            href="https://wa.me/972545308505?text=שלום, ראיתי את הדוגמאות ואני רוצה לקבל פרטים על יצירת אתר דומה"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-custom-purple hover:bg-opacity-90 text-white font-medium px-6 py-2 text-sm">
              בואו נתחיל לעבוד!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LivePreviewCarousel;
