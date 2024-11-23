import { Tool } from "../..";

import { BuiltInToolNames } from "../builtIn";

export const runTerminalCommandTool: Tool = {
  type: "function",
  function: {
    name: BuiltInToolNames.RunTerminalCommand,
    description: "Run a terminal command in the current directory",
    parameters: {
      type: "object",
      required: ["command"],
      properties: {
        command: {
          type: "string",
          description:
            "The command to run. This will be passed directly into the shell.",
        },
      },
    },
  },
};
