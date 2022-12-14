import { builder } from "../builder";
import { prisma } from "../db";
builder.queryField("users", (t) =>
  t.prismaField({
    type: ["User"],
    resolve: async (query, root, args, ctx, info) => {
      return prisma.user.findMany({ ...query });
    },
  })
);
builder.prismaObject("User", {
    fields: t => ({
        id: t.exposeID("id"),
        name: t.exposeString("name"),
        messages: t.relation("messages")
    })
})