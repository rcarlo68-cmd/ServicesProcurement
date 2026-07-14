import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicePage from "../../components/service/ServicePage";

export default function OperationsPage() {
  return (
    <>
      <Header />

      <ServicePage
        title="Operaciones"
        subtitle="La productividad no depende únicamente de producir más. Depende de comprender cómo interactúan Producción, Mantenimiento, Planeamiento, Logística e Inventarios para eliminar las restricciones que limitan el desempeño del sistema."
      />

      <Footer />
    </>
  );
}