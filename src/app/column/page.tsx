import ScreenContainer from "@/components/feature/common/screen-container";

const ServerPage = async () => {
  return (
    <ScreenContainer>
      <article className="flex flex-col items-center">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          칼럼
        </h2>
        <div>설명</div>
      </article>
    </ScreenContainer>
  );
};
export default ServerPage;
