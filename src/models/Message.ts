// src/models/Message.ts

import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Message", {
  fields: (t) => ({
    id: t.exposeID("id"),
    body: t.exposeString("body"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
  }),
});