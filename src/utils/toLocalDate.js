export function faToEn(str) {
  if (!str) return ""; // اگر str نال یا undefined باشد، رشته خالی برمی‌گردانیم
  return str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
}

export function toLocalDate(date) {
  if (!date) return ""; // اگر تاریخ نال یا undefined باشد، رشته خالی برمی‌گردانیم
  return new Date(date).toLocaleDateString("fa-IR");
}
