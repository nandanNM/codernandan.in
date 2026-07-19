"use client";

import { useEffect, useState } from "react";

export type GitHubProfile = {
  name: string | null;
  login: string;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
};

let cache: GitHubProfile | null = null;

export function useGitHubProfile(username: string) {
  const [profile, setProfile] = useState<GitHubProfile | null>(cache);

  useEffect(() => {
    if (cache) return;

    let cancelled = false;

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: GitHubProfile | null) => {
        if (!cancelled && data) {
          cache = data;
          setProfile(data);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [username]);

  return profile;
}
