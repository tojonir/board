import { InMemoryCache } from "@apollo/client";
import jwtDecode from "jwt-decode";

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

const initialUser =
  localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token");

export const user = cache.makeVar<any>(!!initialUser && jwtDecode(initialUser));
