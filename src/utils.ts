export function timeAgo(date: Date): string {
  const now = new Date().getTime();
  const then = date.getTime();
  let diff = Math.floor((now - then) / 1000); // in seconds

  if (diff < 60) return `${diff}s`;

  diff = Math.floor(diff / 60); // minutes
  if (diff < 60) return `${diff}m`;

  diff = Math.floor(diff / 60); // hours
  if (diff < 24) return `${diff}h`;

  diff = Math.floor(diff / 24); // days
  if (diff < 30) return `${diff}d`;

  const months = Math.floor(diff / 30); // months approx
  if (months < 12) return `${months}mo`;

  const years = Math.floor(months / 12);
  return `${years}yr`;
}
