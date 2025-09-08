import { useEffect, useState } from "react";
import { files, type IFiles } from "../data/files";
import { users, type IUsers } from "../data/users";

export function useSearch(query: string) {
  const [results, setResults] = useState<{ users: IUsers[]; files: IFiles[] }>({
    users: [],
    files: [],
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

      setResults({ users: [...userMatches], files: [...fileMatches] });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query, users, files]);

  return { results, loading };
}
