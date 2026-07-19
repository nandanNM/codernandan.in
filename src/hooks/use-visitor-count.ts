import { useEffect, useState } from "react";

const BASE_URL = "https://api.counterapi.dev/v1";
const NAMESPACE = "codernandan-in";
const KEY = "visitors";
const BASE_VISITORS = 0;
const STORAGE_KEY = "portfolio_visited";

export function useVisitorCount(): number | null {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const isNewVisitor = !localStorage.getItem(STORAGE_KEY);
        const endpoint = isNewVisitor
          ? `${BASE_URL}/${NAMESPACE}/${KEY}/up`
          : `${BASE_URL}/${NAMESPACE}/${KEY}/`;

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Failed to fetch views");
        const data = await res.json();

        if (isNewVisitor) {
          localStorage.setItem(STORAGE_KEY, "1");
        }

        setCount((data.count ?? 0) + BASE_VISITORS);
      } catch {
        setCount(BASE_VISITORS);
      }
    };

    fetchViews();
  }, []);

  return count;
}
