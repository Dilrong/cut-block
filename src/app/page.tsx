import EstimateForm from "@/components/feature/home/estimate-form";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center mt-8">
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          궁금했던 영상 편집 비용
        </h2>
        <h2 className="mt-4 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          이젠 미리 가격을 보고 맡겨주세요!
        </h2>
        <EstimateForm />
      </section>
    </main>
  );
}
