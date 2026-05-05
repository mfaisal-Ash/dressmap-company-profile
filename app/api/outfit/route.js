export async function GET() {
  return Response.json([
    {
      id: 1,
      icon: "⌕",
      name: "Outfit Discovery",
      description:
        "Sistem pencarian outfit berdasarkan kategori, aktivitas, warna, dan preferensi gaya pengguna.",
    },
    {
      id: 2,
      icon: "▣",
      name: "Fashion Mapping",
      description:
        "Pemetaan data fashion untuk mengelompokkan tren, koleksi, dan kebutuhan pengguna.",
    },
    {
      id: 3,
      icon: "↗",
      name: "Brand Strategy",
      description:
        "Membantu brand memahami peluang pasar melalui insight berbasis preferensi fashion pengguna.",
    },
  ]);
}