import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function MyMap() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "80px",
        aspectRatio: "1212 / 578", // Сохраняем пропорции
        margin: "0 auto", // Центрируем по горизонтали
        backgroundColor: "#191918",
      }}
    >
      <YMaps>
        <Map defaultState={defaultState} width="100%" height="100%">
          <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
      </YMaps>
    </div>
  );
}
