"use client";

import { createElement } from "react";
import Script from "next/script";

const ELEVENLABS_AGENT_ID = "agent_0401khh2v2hrf27btvv85w90e1he";

export default function ElevenLabsConvai() {
  return (
    <>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
      {createElement("elevenlabs-convai", {
        "agent-id": ELEVENLABS_AGENT_ID,
      })}
    </>
  );
}
