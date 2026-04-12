import { DefaultTheme } from "vitepress/theme";
import { ensureStartingSlash } from "./utils";

/**
 * Get the `Sidebar` from sidebar option. This method will ensure to get correct
 * sidebar config from `MultiSideBarConfig` with various path combinations such
 * as matching `guide/` and `/guide/`. If no matching config was found, it will
 * return empty array.
 */
export function getSidebar(
  sidebar: DefaultTheme.Sidebar,
  path: string,
): DefaultTheme.SidebarItem[] {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }

  if (sidebar == null) {
    return [];
  }

  path = ensureStartingSlash(path);

  const dir = Object.keys(sidebar)
    .toSorted((a, b) => {
      return b.split("/").length - a.split("/").length;
    })
    .find((candidate) => {
      // make sure the multi sidebar key starts with slash too
      return path.startsWith(ensureStartingSlash(candidate));
    });

  if (!dir) return [];
  const found = sidebar[dir];
  return Array.isArray(found) ? found : found.items;
}

export function getFlatSideBarLinks(sidebar: DefaultTheme.SidebarItem[]) {
  const links: { text: string; link: string }[] = [];

  function recursivelyExtractLinks(items: DefaultTheme.SidebarItem[]) {
    for (const item of items) {
      if (item.link && item.text) {
        links.push({ text: item.text, link: item.link });
      }
      if ("items" in item && item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }

  for (const group of sidebar) {
    if (group.items) {
      recursivelyExtractLinks(group.items);
    }
  }
  return links;
}
