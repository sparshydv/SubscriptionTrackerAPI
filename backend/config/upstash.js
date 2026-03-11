import { Client as WorkflowClient } from "@upstash/workflow";

import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

const hasWorkflowConfig = Boolean(QSTASH_TOKEN && QSTASH_URL);

if (!hasWorkflowConfig) {
    console.warn("QSTASH_TOKEN or QSTASH_URL is missing. Workflow reminders are disabled.");
}

export const workflowClient = hasWorkflowConfig
    ? new WorkflowClient({
        baseUrl: QSTASH_URL,
        token: QSTASH_TOKEN,
    })
    : null;

