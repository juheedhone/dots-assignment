import { useEffect, useState } from "react";
import { files, type IFiles } from "../data/files";
import { users, type IUsers } from "../data/users";

export default function useSearch(query: string) {
  const [result, setResult] = useState<{ people: IUsers[]; file: IFiles[] }>({
    people: [],
    file: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);

    const timeout = setTimeout(() => {
      const lower = query.toLowerCase();

      const userMatches = users.filter((u) =>
        u.name.toLowerCase().includes(lower)
      );

      const fileMatches = files.filter((f) =>
        f.name.toLowerCase().includes(lower)
      );

      setResult({ people: [...userMatches], file: [...fileMatches] });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query, users, files]);

  if (!query) return { result: { people: [], file: [], loading: false } };
  return { result, loading };
}
