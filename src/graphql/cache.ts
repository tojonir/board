import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        workspace: {
          read() {
            return workspace;
          },
        },
      },
    },
  },
});

interface workspace {
  id: string;
  name: string;
}
const initialWorspace = sessionStorage.getItem("workspace");
export const workspace: any = cache.makeVar<workspace | null>(
  !!initialWorspace && JSON.parse(initialWorspace)
);
