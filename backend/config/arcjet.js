import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

if (!ARCJET_KEY) {
  console.warn("ARCJET_KEY is not set. Arcjet protection is disabled.");
}

const aj = ARCJET_KEY
  ? arcjet({
      key: ARCJET_KEY,
      rules: [
        shield({ mode: "LIVE" }),
        detectBot({
          mode: "LIVE",
          allow: [
            "CATEGORY:SEARCH_ENGINE",
          ],
        }),
        tokenBucket({
          mode: "LIVE",
          refillRate: 5,
          interval: 10,
          capacity: 10,
        }),
      ],
    })
  : null;

export default aj;
