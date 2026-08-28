import { services } from "../data/services";
import { UltrasoundCard } from "./UltrasoundCard";

const serviceIcons = {
  abdominales: "plus",
  tiroides: "drop",
  mamarias: "heart",
  ginecologica: "pin",
  crecimiento: "heart",
  anatomico: "layers",
  translucencia: "drop",
  "doppler-fetal": "pulse",
  biofisico: "clock",
  renales: "layers",
  doppler: "pulse",
  articular: "layers",
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
