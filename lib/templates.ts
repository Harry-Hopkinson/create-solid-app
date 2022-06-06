import { frameWorks } from "./frameWorks";

export const TEMPLATES = frameWorks
  .map((f): string[] => {
    return (f.variants && f.variants.map((v) => v.name)) || [f.name];
  })
  .reduce((a, b): string[] => {
    return a.concat(b);
  }, []);
