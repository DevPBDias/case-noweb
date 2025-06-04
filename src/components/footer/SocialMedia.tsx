import React from "react";

const MEDIAS = ["Instagram", "X", "Facebook", "Youtube"];

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full max-w-[500px] gap-5">
      <h5 className="text-[var(--text-color)] font-semibold text-base/[130.8%] tracking-[-2%]">
        Siga em nossa redes:
      </h5>
      <div className="flex flex-row flex-wrap items-center justify-start gap-5">
        {MEDIAS.map((media, index) => (
          <a
            key={index}
            href=""
            target="_blank"
            className="text-[var(--text-color)] font-semibold text-base/[130.8%] border border-[var(--text-color)] rounded-[40px] px-5 py-2.5 hover:bg-[var(--cta-secondary-color)] hover:text-white transition-all duration-300"
          >
            {media}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
