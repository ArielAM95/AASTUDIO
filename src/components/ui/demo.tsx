
import { HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover } from "@/components/ui/animated-slideshow"

const WEBSITE_EXAMPLES = [
  {
    id: "slide-1",
    title: "עסק מקומי",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "slide-2", 
    title: "חנות אונליין",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "slide-3",
    title: "דף נחיתה",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "slide-4",
    title: "פורטפוליו",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "slide-5",
    title: "אפליקציה",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
]

export function HoverSliderDemo () {
    return (
        <HoverSlider className="min-h-svh place-content-center p-6 md:px-12 bg-[#faf9f5] text-[#3d3929]">
      <h3 className="mb-6 text-[rgb(201, 100, 66)] text-xs font-medium capitalize tracking-wide text-[#c96442]">
        / דוגמאות העבודות שלנו
      </h3>
      <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
        <div className="flex  flex-col space-y-2 md:space-y-4   ">
          {WEBSITE_EXAMPLES.map((slide, index) => (
            <TextStaggerHover
              key={slide.title}
              index={index}
              className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
              text={slide.title}
            />
          ))}
        </div>
        <HoverSliderImageWrap>
          {WEBSITE_EXAMPLES.map((slide, index) => (
            <div key={slide.id} className="  ">
              <HoverSliderImage
                index={index}
                imageUrl={slide.imageUrl}
                src={slide.imageUrl}
                alt={slide.title}
                className="size-full max-h-96 object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </HoverSliderImageWrap>
      </div>
    </HoverSlider>
    )
}
