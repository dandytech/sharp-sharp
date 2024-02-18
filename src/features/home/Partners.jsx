const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "🇦🇩",
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "📮",
  },
  {
    id: 3,
    name: "partner 3",
    logo: "🇦🇱",
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "🇩🇪",
  },
  {
    id: 5,
    name: "Partner 5",
    logo: "🇳🇬",
  },
  {
    id: 6,
    name: "Partner 6",
    logo: "🇰🇷",
  },
  {
    id: 7,
    name: "Partner 7",
    logo: "🇩🇲",
  },
];

import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

export default function Partners() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="overflow-x-hidden bg-gradient-to-t  from-blue-700 to-blue-900 py-10 pb-20 text-white">
      <div className="m-auto flex lg:w-[70%]">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={5}
          itemsToScroll={5}
          autoplay={true}
          delay={1000}
          // forwardBtnProps={{
          //   //here you can also pass className, or any other button element attributes
          //   style: {
          //     alignSelf: "center",
          //     background: "black",
          //     border: "none",
          //     borderRadius: "50%",
          //     color: "white",
          //     cursor: "pointer",
          //     fontSize: "20px",
          //     height: 30,
          //     lineHeight: 1,
          //     textAlign: "center",
          //     width: 30,
          //   },
          //   children: <span>{`>`}</span>,
          // }}
          // backwardBtnProps={{
          //   //here you can also pass className, or any other button element attributes
          //   style: {
          //     alignSelf: "center",
          //     background: "black",
          //     border: "none",
          //     borderRadius: "50%",
          //     color: "white",
          //     cursor: "pointer",
          //     fontSize: "20px",
          //     height: 30,
          //     lineHeight: 1,
          //     textAlign: "center",
          //     width: 30,
          //   },
          //   children: <span>{`<`}</span>,
          // }}
          responsiveProps={[
            {
              itemsToShow: 5,
              itemsToScroll: 5,
              minWidth: 768,
              autoplay: true,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex h-[200px] w-[300px] flex-col-reverse items-center justify-center gap-2 text-center "
            >
              <p>{partner.name}</p>
              <p className="text-[45px] w-full">{partner.logo}</p>
            </div>
          ))}
        </ReactSimplyCarousel>
      </div>
    </div>
  );
}
