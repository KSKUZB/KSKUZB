// Supabase > Project Settings > API sahifasidan olingan.
// Publishable (anon) kalit ochiq bo'lishi mumkin (xavfsizlikni schema.sql dagi qoidalar ta'minlaydi).
// HECH QACHON "secret" yoki "service_role" kalitini bu yerga yozmang!
window.KSK_CONFIG = {
  SUPABASE_URL: "https://fypffsjpolpwxyjqfsgk.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_6GpyOawDyYWWmCGfRHIaKA_otcXcAR3",
  // Kurs tayyor bo'lganda shu yerda false ni true ga almashtiring.
  // false = oddiy foydalanuvchiga "Tez orada" ko'rinadi (admin hammasini ko'radi va video joylay oladi).
  COURSES_OPEN: { risk: false, math: false }
};
