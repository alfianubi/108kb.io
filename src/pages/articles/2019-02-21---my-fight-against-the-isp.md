---
date: "2019-02-21"
layout: post
title: My fight against the ISP
draft: false
path: "/my-fight-against-the-isp/"
category: "Life"
tags: ["Journal"]
description: "Only god can stops me"
---

Jadi ceritanya begini, mungkin kalian sudah mengetahui kalau gue seorang pengguna Adblocker & Tracking blocker garis
keras. Meskipun begitu, terkadang gue suka berbaik hati meng-whitelist beberapa domain yang menurut gue memang tidak
perlu diblock (ya, termasuk domain gue) entah untuk tujuan apapun itu yang kalian sendiri pasti tau.

![my whitelisted list adblock](https://i.imgur.com/ithdZrR.png)

Dulu ketika masih 100% tinggal dikantor lama (I call it KelasKita Coliving), ISP menggunakan First Media. Ketika
menggunakan First Media, gue rasa gak ada masalah. Bahkan masih bisa netflixan. Mungkin ada beberapa situs yang memang
diblock, karena **gue anak aiti** (dan kelan juga), hal paling mudah dan bijak untuk mengatasi ini adalah dengan
mengganti DNS. Favorit gue dulu adalah [1.1.1.1](https://1.1.1.1/) nya Cloudflare.

Netflix, Reddit, Vimeo, Tumblr dan bokep serta beberapa situs yang menyebabkan dosa pun lancar diakses.

Ketika pindah kantor, mulai deh freak. Terpaksa menggunakan layanan internet indiehouse karena memang harganya lumayan
terjangkau untuk mahasiswa miskin seperti gue. Netflix pun gue unsubscribe karena gak punya uang alias ngapain anyiiiing
kan diblokir indiehouse.

Berselancar di Reddit pun udah jarang banget, karena ngaktifin vpn klo lagi diluar doang dan kalau lagi diluar bawa
laptop biasanya cuma fokus buat kerja aja.

## The hates begin

Hal pertama yang **paling** gue keselin adalah INJECT SCRIPT. Biasanya dilakukan ke website yang tidak mengaktifkan
HTTPS-BY-DEFAULT. DAAAAN misal gue akses somewebsite.com (gak pakai prefix https di addressbar nya––biasanya setelah gue
clear history & cookie)––okelah gak nge-inject plugin, tapi kadang nampilin halaman "motivasi"-ish yang gue harus nunggu
sekitaran 5 detik, kecuali kalau gue gak males buat mencet tombol.

Kedua, indihouse use [transparent dns proxies](https://www.dnsleaktest.com/what-is-transparent-dns-proxy.html). Gue baru
tau tentang ini ketika ingin menulis ini (thanks blogging). Gue sadar tentang ini ketika mengubah DNS via System
Preferences, tapi aja laptop gue gak pakai DNS yang udah gue maksud.

![dig vimeo.com](https://i.imgur.com/hhUfmLE.png)

Dan dari sini gue baru sadar satu hal! Gue tau sedikit tentang apa & bagaimana [dns bekerja](https://howdns.works/).
Yang berarti, hey! ketika gue gak sengaja ngetik some-adult-site.com tanpa prefix https:// dibrowser, berarti ISP gue tau kalau
gue mau akses tersebut (dan pastinya diredirect ke internetpositif). Astagfirullah, semoga memang tidak di simpan log nya ya.

Kalau dijadikan bahan untuk data mining tanpa "anonymized"? Mati sudah privasiku di Internet.

Ketiga, internet is free as in freedom (IMO). Kita sudah dewasa, kita tau mana yang salah dan benar. Kita sudah kritis
dalam berfikir. Kita sudah bisa ber-tanggung jawab. Kita tau bagaimana cara menggunakan internet dengan bijak.

But, [Internet Censorship](https://en.wikipedia.org/wiki/Internet_censorship) border that! Berdasarkan data pada tahun
[2018](https://en.wikipedia.org/wiki/Internet_censorship_and_surveillance_by_country) skor "Kebabasan dalam
ber-internet" di Indonesia sebesar 46 dengan predikat "partly free". Lo tau lah pasti situs-situs apa saja yang diblock.

Padahal internet sendiri kan ibarat "a Man behind the gun", yang mana gun nya disini adalah internet. Ingin menggunakan
pistol dengan bijak (protect himself, for example) atau tercela (to kill) itu kembali lagi ke si pemegang senjata
tersebut.

Kita malah menyalahkan platform. Meskipun pemilik platform biasanya memberikan "community guidelines" demi menghindari
pemblokiran. Konten SARA, terorism-related, Pornography, child abuse memang wajib untuk diblokir. Meskipun terkadang ada
yang berdalih (dan semoga tidak menjadi munafik) untuk "mempelajari agar menghindari", mereka mungkin bisa mengakses
konten tersebut dengan berbagai cara masing-masing sambil merenungi bahayanya konten yang ingin mereka akses dengan
betapa sulitnya untuk mengakses kontent tersebut.

Fyi, kenapa gue setuju konten-konten tersebut diblokir? Karena "free speech" bukan berarti bebas sebebas-bebasnya dalam
berpendapat. Kita memiliki akal, kita tau mana yang benar & salah, yang pantas dan menyimpang, dan kita manusia yang
akalnya masih sehat.

## The Action

Solusi pertama untuk melawan (khususnya untuk transparent dns proxy) adalah ganti ISP. Tentu ini gak gue lakukan karena
bagaimanapun gue masih diuntungkan berkat kehadiran indihouse ini.

Solusi kedua adalah menggunakan VPN. Gue menggunakan [ProtonVPN](https://protonvpn.com/). Yang PRO nya reliable banget,
yang freenya juga kalau gak salah lumayan reliable (yang pasti dengan berbagai limitasi yang bisa dimaklumi). Gak
sukanya pakai VPN (apa karena menggunakan ProtonVPN aja kali ya?), ada beberapa layanan yang "tau" kalau kita
menggunakan vpn. Dan kadang seperti ngasih "limitasi" untuk pengguna vpn. Kalau hoki langsung diblock akses lo nya haha.

Latensi tidak perlu dipertanyakan, pasti berpengaruh.

Solusi ketiga (yang mana ini adalah solusi yang gue pilih) adalah menggunakan [DNS Over
HTTPS](https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/) ([DoH](https://dzone.com/articles/pros-and-cons-of-dns-over-https)).

Secara "teknis" gue enggak ngerti gimana cara kerjanya, gue cuma peduli "it works". Karena disini concern gue terletak
pada transparent dns proxy. Gue menggunakan [DNSCRYPT](https://dnscrypt.info/) untuk penerapannya. Silahkan ikuti
langkah-langkahnya, dan nikmati manfaatnya hahaha.

![COOL](https://i.imgur.com/tJOy8tk.png)

Sekarang gue coba speedtest yak

![Speedtest](https://i.imgur.com/2uPUTXE.png)

Seperti biasa aja.

Dan guess what?

![Netflix!](https://i.imgur.com/W7qm2x1.png)

---

Menggunakan DoH ini tidak menjamin keamanan (IP address "asli" kita masih ter-expose, and so on with our geolocation),
tapi menambah lapisan di security dan privacy (dns hijacking/spoofing, mitm attack, information sniffing, dll) dan juga
bisa membypass transparent dns proxy.
