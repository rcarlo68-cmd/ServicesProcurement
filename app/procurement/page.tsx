import Header from "../../components/Header";
import ServicePage from "../../components/service/ServicePage";

export default function ProcurementPage() {
  return (
    <>
      <Header />

      <ServicePage
        title="Procurement"
        subtitle="Las mejores decisiones de compra comienzan mucho antes de emitir una orden de compra."
      />
    </>
  );
}