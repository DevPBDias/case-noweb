import FormContact from "./FormContact";
import TextContact from "./TextContact";

const Contact = () => {
  return (
    <section className="flex flex-row items-center justify-between w-full pb-[40px]">
      <TextContact />
      <FormContact />
    </section>
  );
};

export default Contact;
