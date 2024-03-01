import ScreenContainer from "@/components/feature/common/screen-container";
import ContractForm from "@/components/feature/contact/contact-form";

const ServerPage = async () => {
  return (
    <ScreenContainer>
      <section className="flex flex-col items-center mt-8">
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          문의하기
        </h2>
        <ContractForm />
      </section>
    </ScreenContainer>
  );
};
export default ServerPage;
