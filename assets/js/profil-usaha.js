/**
 * EvEvDigital Auto-Hydration & WhatsApp Order Engine
 * Sektor 06: Toko Sembako & Minimarket Harian UMKM Indonesia (EvEvSembako)
 * WhatsApp Resmi: +62 895-3234-18658
 */

const PROFIL_USAHA = {
  nama: "EvEvSembako",
  namaPendek: "evevsembako",
  sektor: "Toko Sembako & Minimarket Harian Keluarga",
  tagline: "Sembako Segar, Harga Hemat, Diantar Cepat Sampai Dapur",
  deskripsi:
    "Pusat belanja kebutuhan pokok keluarga dan kulakan warung terlengkap di Jakarta Timur. Menyediakan beras pulen pilihan, minyak goreng kemasan resmi, telur ayam segar langsung peternak, gula pasir, tepung terigu, mie instan, bumbu dapur, hingga isi ulang gas Elpiji 3kg dan galon Aqua 19L dengan timbangan pas dan garansi produk asli.",
  whatsapp: "62895323418658",
  whatsappDisplay: "+62 895-3234-18658",
  telepon: "0895-3234-18658",
  email: "evevdigital@gmail.com",
  alamat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur 13330",
  jamOperasional: "Senin - Sabtu: 06.00 - 21.00 WIB | Minggu & Libur: 07.00 - 18.00 WIB",
  jadwalOperasional: [
    { hari: "Senin - Sabtu", jam: "06.00 - 21.00 WIB" },
    { hari: "Minggu & Hari Libur", jam: "07.00 - 18.00 WIB" },
    { hari: "Pengiriman Kurir Instan", jam: "Setiap Hari (Order s/d 20.00 WIB)" }
  ],
  areaDelivery: "Gratis Ongkir Radius 3 Km dari Jatinegara (Min. Belanja Rp 50.000)",
  metodePembayaran: [
    "Tunai / COD di Tempat",
    "QRIS Semua E-Wallet & Mobile Banking",
    "Transfer Bank (BCA / Mandiri / BRI)"
  ],
  paket: [
    {
      id: "paket-harian-hemat",
      nama: "Paket Harian Hemat",
      badge: "Paling Praktis",
      harga: 85000,
      hargaFormat: "Rp 85.000",
      hargaCoret: "Rp 95.000",
      hemat: "Hemat Rp 10.000",
      deskripsi: "Pas untuk kebutuhan dapur harian pasangan muda atau anak kos tanpa takut kehabisan stok pokok.",
      isi: [
        "Beras Setra Ramos Super Pulen 5kg",
        "Minyak Goreng Kemasan Resmi 1 Liter",
        "Gula Pasir Putih Kristal Murni 1kg"
      ],
      gambar: "assets/images/evevsembako/product_beras_premium.webp"
    },
    {
      id: "paket-dapur-keluarga",
      nama: "Paket Dapur Keluarga",
      badge: "Terlaris",
      harga: 155000,
      hargaFormat: "Rp 155.000",
      hargaCoret: "Rp 172.000",
      hemat: "Hemat Rp 17.000",
      deskripsi: "Pilihan favorit ibu rumah tangga untuk stok masak 1-2 minggu dengan bahan pokok segar dan lengkap.",
      isi: [
        "Beras Setra Ramos Super Pulen 5kg",
        "Minyak Goreng Bimoli Spesial 2 Liter",
        "Telur Ayam Ras Fresh Grade A 1kg",
        "Gula Pasir Putih Kristal 1kg",
        "Kecap Manis Bango Pouch 550ml"
      ],
      gambar: "assets/images/evevsembako/product_paket_berkah.webp"
    },
    {
      id: "paket-bulanan-komplit",
      nama: "Paket Bulanan Komplit",
      badge: "Paling Hemat",
      harga: 295000,
      hargaFormat: "Rp 295.000",
      hargaCoret: "Rp 325.000",
      hemat: "Hemat Rp 30.000",
      deskripsi: "Belanja bulanan sekali pesan langsung aman sebulan, bebas repot keluar rumah dan gratis antar terdekat.",
      isi: [
        "Beras Pandan Wangi Cianjur Super 10kg",
        "Minyak Goreng Bimoli / Filma 2 Liter",
        "Telur Ayam Ras Grade A 1kg",
        "Gula Pasir Kristal 2kg & Tepung Segitiga Biru 1kg",
        "Indomie Goreng 10 pcs + Teh Celup Sariwangi",
        "Sabun Cuci Piring Sunlight 750ml"
      ],
      gambar: "assets/images/evevsembako/product_beras_meja.webp"
    },
    {
      id: "paket-santunan-berkah",
      nama: "Paket Santunan & Berkah",
      badge: "Siap Bagikan",
      harga: 110000,
      hargaFormat: "Rp 110.000",
      hargaCoret: "Rp 122.000",
      hemat: "Hemat Rp 12.000",
      deskripsi: "Cocok untuk Jumat Berkah, santunan warga, bansos RT/RW, atau bingkisan keluarga. Sudah dikemas rapi.",
      isi: [
        "Beras Ramos Super Pulen 5kg",
        "Minyak Goreng Kemasan 1 Liter",
        "Gula Pasir Murni 1kg",
        "Teh Celup Sariwangi 1 Box + Mie Instan 5 pcs",
        "Gratis Kemasan Goodie Bag / Dus Rapi"
      ],
      gambar: "assets/images/evevsembako/product_gula_pasir.webp"
    },
    {
      id: "paket-kulakan-warung",
      nama: "Paket Kulakan Warung UMKM",
      badge: "Harga Grosir",
      harga: 685000,
      hargaFormat: "Rp 685.000",
      hargaCoret: "Rp 740.000",
      hemat: "Hemat Rp 55.000",
      deskripsi: "Khusus pemilik warung kelontong, katering, dan usaha kuliner yang butuh harga grosir pasti untung.",
      isi: [
        "Beras Setra Ramos Karung 25kg",
        "Minyak Goreng Kemasan 1 Dus (12 x 1L)",
        "Gula Pasir Kristal 5kg",
        "Indomie Goreng Spesial 1 Dus (40 pcs)"
      ],
      gambar: "assets/images/evevsembako/product_grosir_karung_beras.webp"
    },
    {
      id: "paket-gas-galon-kilat",
      nama: "Paket Gas & Galon Kilat",
      badge: "Antar 30 Menit",
      harga: 42000,
      hargaFormat: "Rp 42.000",
      hargaCoret: "Rp 46.000",
      hemat: "Hemat Rp 4.000",
      deskripsi: "Bebas angkat beban berat! Isi ulang gas Elpiji dan galon air asli diantar langsung sampai ke dapur Anda.",
      isi: [
        "Refill Gas Elpiji 3kg Melon Resmi Pertamina",
        "Isi Ulang Air Galon Aqua 19L Segel Asli",
        "Gratis Bantu Pasang Regulator & Angkat ke Dapur"
      ],
      gambar: "assets/images/evevsembako/product_gas_galon.webp"
    }
  ],
  kategori: [
    { nama: "Beras Premium & Ramos", deskripsi: "Beras Pandan Wangi, Setra Ramos, Rojolele, Beras Merah (2kg, 5kg, 10kg, 25kg)" },
    { nama: "Minyak Goreng & Margarin", deskripsi: "Bimoli, Filma, Sania, Tropical, Minyakita 1L & 2L pouch, Blue Band" },
    { nama: "Telur Ayam & Protein Segar", deskripsi: "Telur Ayam Ras Grade A langsung peternak, Telur Bebek Asin Brebes" },
    { nama: "Gula Pasir & Tepung Terigu", deskripsi: "Gula Kristal Murni, Gula Aren, Segitiga Biru, Rose Brand, Tapioka" },
    { nama: "Mie Instan & Bumbu Dapur", deskripsi: "Indomie eceran & dus, Kecap Bango, Saus ABC, Royco, Garam Beryodium" },
    { nama: "Gas LPG & Air Galon", deskripsi: "Gas Elpiji 3kg Melon, Bright Gas 5.5kg/12kg, Aqua Galon 19L Asli" }
  ],

  /**
   * Auto-format URL WhatsApp ke +62 895-3234-18658
   */
  buatLinkWA: function (pesan) {
    var text = pesan || ("Halo " + this.nama + ", saya ingin pesan kebutuhan sembako. Mohon info stok & pengantaran hari ini.");
    return "https://wa.me/" + this.whatsapp + "?text=" + encodeURIComponent(text);
  },

  /**
   * Auto-format pesan order paket/produk terstruktur
   */
  formatPesanOrder: function (namaItem, harga, qty, catatan) {
    var jumlah = qty || "1";
    var lines = [
      "*ORDER BELANJA SEMBAKO - " + this.nama.toUpperCase() + "*",
      "--------------------------------",
      "Halo Admin " + this.nama + ", saya ingin memesan:",
      "• Pesanan : " + namaItem + (harga ? " (" + harga + ")" : ""),
      "• Jumlah  : " + jumlah,
      catatan ? "• Catatan : " + catatan : null,
      "",
      "Data Pengiriman:",
      "• Nama Penerima : ",
      "• Alamat Lengkap: ",
      "• Pembayaran    : COD / QRIS / Transfer",
      "",
      "Mohon konfirmasi stok & estimasi kirim. Terima kasih!"
    ].filter(Boolean);
    return lines.join("\n");
  },

  pesanPaket: function (namaPaket, harga) {
    var pesan = this.formatPesanOrder(namaPaket, harga, "1 Paket");
    return this.buatLinkWA(pesan);
  },

  pesanProduk: function (namaProduk, harga) {
    var pesan = this.formatPesanOrder(namaProduk, harga, "1");
    return this.buatLinkWA(pesan);
  }
};

// Expose globally for inline handlers & multi-template compatibility
window.PROFIL_USAHA = PROFIL_USAHA;
window.EVEV_WA = {
  number: PROFIL_USAHA.whatsapp,
  display: PROFIL_USAHA.whatsappDisplay,
  openOrder: function (namaItem, harga, qty) {
    var url = PROFIL_USAHA.buatLinkWA(PROFIL_USAHA.formatPesanOrder(namaItem, harga, qty || "1"));
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // 1. Auto-Hydrate elements with data-config
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (PROFIL_USAHA[key] && typeof PROFIL_USAHA[key] === "string") {
      el.textContent = PROFIL_USAHA[key];
    }
  });

  // 2. Auto-bind WhatsApp order links with data-wa-item
  document.querySelectorAll("[data-wa-item]").forEach(function (el) {
    var item = el.getAttribute("data-wa-item");
    var harga = el.getAttribute("data-wa-price") || "";
    var qty = el.getAttribute("data-wa-qty") || "1";
    var url = PROFIL_USAHA.buatLinkWA(PROFIL_USAHA.formatPesanOrder(item, harga, qty));
    if (el.tagName === "A") {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    } else {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        window.open(url, "_blank", "noopener,noreferrer");
      });
    }
  });

  // 3. Intercept forms & route directly to formatted WhatsApp message
  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      if (
        action === "#" ||
        action === "" ||
        action.indexOf(".php") !== -1 ||
        form.classList.contains("wa-form") ||
        form.classList.contains("wa-order-form") ||
        form.id === "wa-order-form"
      ) {
        e.preventDefault();
        var searchInput = form.querySelector('input[type="search"], input[name="search-field"]');
        if (searchInput && searchInput.value.trim()) {
          var q = searchInput.value.trim();
          var catSelect = form.closest(".search-area") ? form.closest(".search-area").querySelector("select") : null;
          var kategori = catSelect && catSelect.selectedIndex > 0 ? catSelect.options[catSelect.selectedIndex].text : "Semua Kategori";
          var pesanCari = PROFIL_USAHA.formatPesanOrder(q, "", "Sesuai kebutuhan", "Kategori: " + kategori);
          window.open(PROFIL_USAHA.buatLinkWA(pesanCari), "_blank", "noopener,noreferrer");
          return;
        }

        var inputs = form.querySelectorAll("input, textarea, select");
        var detail = [];
        inputs.forEach(function (input) {
          var label = input.getAttribute("data-label") || input.placeholder || input.name || "Keterangan";
          var val = (input.value || "").trim();
          if (val && input.type !== "submit" && input.type !== "button") {
            detail.push("• " + label + ": " + val);
          }
        });
        var pesanForm =
          "*PESANAN / INFO PROMO - " + PROFIL_USAHA.nama.toUpperCase() + "*\n\n" +
          "Halo Admin " + PROFIL_USAHA.nama + ", berikut data saya:\n" +
          (detail.length ? detail.join("\n") : "• Ingin tanya daftar harga & promo sembako hari ini") +
          "\n\nMohon info ketersediaan stok & jadwal kirim. Terima kasih!";
        window.open(PROFIL_USAHA.buatLinkWA(pesanForm), "_blank", "noopener,noreferrer");
      }
    });
  });

  // 4. Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId && targetId.length > 1) {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
