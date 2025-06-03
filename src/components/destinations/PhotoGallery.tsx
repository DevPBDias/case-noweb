import { photos } from "@/constants/photos-gallery";
import Image from "next/image";

const PhotoGallery = () => {
  return (
    <section className="grid grid-cols-3 items-end w-3/5 mt-[60px] gap-5 [&>*:nth-child(2)]:h-[280px] [&>*:nth-child(5)]:h-[280px] [&>*:nth-child(4)]:mb-10 [&>*:nth-child(6)]:mb-10">
      {photos.map((photo) => (
        <div key={photo.id} className="w-full h-[240px]">
          <picture className="relative w-full h-full flex flex-col items-center justify-center">
            <Image
              src={photo.image}
              alt={photo.destination}
              className="w-full h-full rounded-[28px] object-cover"
            />
            <h3 className="absolute bottom-4 letf-1/2 text-white font-normal text-base/[130.8%] tracking-[-8%] text-center backdrop-blur-[20px] rounded-[30px] px-4 py-[10px]">
              {photo.destination}
            </h3>
          </picture>
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;
