import ScreenContainer from "@/components/feature/common/screen-container";
import PortfolioList from "@/components/feature/portfolio/portfolio-list";

const ServerPage = async () => {
  return (
    <ScreenContainer>
      <section className="flex flex-col items-center mt-8">
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          포트폴리오
        </h2>
        <article className="mt-8 gap-4">
          <PortfolioList />
        </article>
      </section>
    </ScreenContainer>
  );
};
export default ServerPage;
