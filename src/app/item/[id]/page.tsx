"use client";

import { useParams } from "next/navigation";

export default function Item() {

    const params = useParams();

    return (
      <div>
          <h1>Página de detalhes do item {params.id}</h1>
      </div>
    );
  }
