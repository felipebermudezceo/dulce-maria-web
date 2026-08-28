import { services } from "../data/services";
import { UltrasoundCard } from "./UltrasoundCard";

const serviceIcons = {
  abdominales: "plus",
  tiroides: "drop",
  mamarias: "heart",
  obstetricas: "pin",
  renales: "layers",
  doppler: "pulse",
};

export function UltrasoundGrid() {
  return (
    <div className="study-grid">
      {services.map((service) => (
        <UltrasoundCard
          key={service.id}
          service={service}
          icon={serviceIcons[service.id]}
        />
      ))}
    </div>
  );
}
