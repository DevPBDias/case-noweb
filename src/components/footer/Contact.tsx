import FormContact from "./FormContact";
import TextContact from "./TextContact";

const Contact = () => {
  return (
    <section className="flex flex-col xl:flex-row items-center gap-12 justify-between w-full pb-[40px]">
      <TextContact />
      <FormContact />
    </section>
  );
};

export default Contact;
