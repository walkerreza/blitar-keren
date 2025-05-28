import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LocationCard from '../molecules/LocationCard';

function DestinationGrid() {
  const navigate = useNavigate();
  const location = useLocation();
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchParams, setSearchParams] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Fungsi untuk menangani klik pada kartu destinasi
  const handleDestinationClick = (destination) => {
    // Simpan data destinasi ke localStorage
    localStorage.setItem('selectedDestination', JSON.stringify(destination));
    // Arahkan ke halaman detail
    navigate('/detail-stories');
  };
  const destinations = [
    {
      id: 1,
      image: "/src/assets/images/gunung kelud.jpg",
      title: "Mount Kelud",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -7.9333, 
        lng: 112.3083
      },
      description: "Mount Kelud is one of East Java's most active volcanoes, offering breathtaking views of its crater lake. Located at the border of Blitar, Kediri, and Malang, it's a must-visit destination for nature enthusiasts. Despite its history of powerful eruptions, Mount Kelud has become a popular tourist attraction due to its stunning natural beauty. The highlight of the mountain is its crater lake, which changes color depending on the volcanic activity.",
      fullDescription: "Mount Kelud is one of East Java's most active volcanoes, offering breathtaking views of its crater lake. Located at the border of Blitar, Kediri, and Malang, it's a must-visit destination for nature enthusiasts. Despite its history of powerful eruptions, Mount Kelud has become a popular tourist attraction due to its stunning natural beauty. The highlight of the mountain is its crater lake, which changes color depending on the volcanic activity. The hike to the crater is relatively easy, with well-maintained paths and stairs leading to the viewing points. Along the way, you'll encounter lush vegetation and possibly some local wildlife. The panoramic views from the top are absolutely spectacular, especially during sunrise or sunset. For those interested in geology, Mount Kelud provides a fascinating glimpse into the power and beauty of volcanic landscapes.",
      openHours: "06:00 - 17:00 (Setiap hari)",
      ticketPrice: {
        weekday: "Rp 15,000 (Monday-Friday)",
        weekend: "Rp 25,000 (Saturday-Sunday)",
        international: "Rp 150,000 (Foreign Tourists)"
      },
      facilities: ["Parking Area", "Toilets", "Food Stalls", "Rest Area", "Photo Spots", "Hiking Trails", "Camping Area", "Tour Guides"],
      bookingInfo: "Tickets can be purchased online through the Blitar Tourism E-Ticket app or directly at the entrance gate",
      bestTime: "April to October (Dry Season)",
      difficulty: "Sedang",
      elevation: "1,731 meters above sea level",
      additionalInfo: "Mount Kelud is an active volcano with a spectacular crater lake. It takes about 2-3 hours of hiking to reach the summit. Make sure to bring sufficient supplies such as drinking water, snacks, and warm clothing as the temperature at the summit can be very cold. The best weather for hiking is in the morning when the view is clearer and there is less chance of rain."
    },
    {
      id: 2,
      image: "/src/assets/images/candi penataran.jpg",
      title: "Penataran Temple",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -8.0163, 
        lng: 112.2091
      },
      description: "Discover the largest Hindu temple complex in East Java. Built over several centuries, Penataran Temple showcases intricate carvings and rich historical significance. This magnificent temple complex dates back to the 12th century and was continuously expanded until the 15th century during the Majapahit era.",
      fullDescription: "Discover the largest Hindu temple complex in East Java. Built over several centuries, Penataran Temple showcases intricate carvings and rich historical significance. This magnificent temple complex dates back to the 12th century and was continuously expanded until the 15th century during the Majapahit era. The temple is dedicated to Lord Shiva and features a series of terraced courtyards, each with its own unique structures and carvings. The main temple is adorned with intricate relief panels depicting scenes from Hindu epics like the Ramayana. One of the most fascinating aspects of Penataran Temple is its blend of Hindu and indigenous Javanese elements, reflecting the cultural synthesis that characterized ancient East Java.",
      openHours: "07:00 - 17:00 (Setiap hari)",
      ticketPrice: {
        weekday: "Rp 5,000 (Dewasa)",
        weekend: "Rp 5,000 (Dewasa)",
        international: "Rp 10,000 (Foreign Tourists)"
      },
      facilities: ["Parking Area", "Toilets", "Prayer Room", "Information Center", "Souvenir Shop", "Picnic Area"],
      bookingInfo: "Tickets can be purchased directly at the location, no prior reservation needed",
      bestTime: "Morning (07:00-10:00) to avoid crowds and heat",
      difficulty: "Easy",
      historicalSignificance: "Penataran Temple is the largest Hindu temple in East Java and stands as evidence of the Majapahit Kingdom's glory. Built over several centuries (from the 12th to the 15th century), this temple has tremendous historical and architectural value.",
      additionalInfo: "Penataran Temple consists of several main areas, including the main temple, pavilion, and sacred bathing area. The reliefs on this temple depict stories such as the Ramayana, Krishnayana, and local tales. Visitors are advised to hire a local guide to get detailed explanations about the history and meaning of the reliefs in this temple."
    },
    {
      id: 3,
      image: "/src/assets/images/Makam_Soekarno.jpg",
      title: "Bung Karno Tomb",
      subtitle: "Blitar City",
      mapLocation: {
        lat: -8.0798, 
        lng: 112.1672
      },
      description: "Visit the final resting place of Indonesia's first president, Sukarno. This historical site features beautiful architecture and offers insights into Indonesia's struggle for independence. The Bung Karno Tomb complex in Blitar is more than just a burial site; it's a national monument that honors the founding father of Indonesia.",
      fullDescription: "Visit the final resting place of Indonesia's first president, Sukarno. This historical site features beautiful architecture and offers insights into Indonesia's struggle for independence. The Bung Karno Tomb complex in Blitar is more than just a burial site; it's a national monument that honors the founding father of Indonesia. The complex features a grand mausoleum with a distinctive roof inspired by traditional Javanese architecture. Inside, Sukarno's tomb is made of black marble and surrounded by an atmosphere of reverence. Adjacent to the tomb is a museum that houses a collection of Sukarno's personal belongings, photographs, and documents chronicling his life and Indonesia's fight for independence.",
      openHours: "08:00 - 16:00 (Senin-Minggu)",
      ticketPrice: {
        weekday: "Free (Tomb)",
        weekend: "Free (Tomb)",
        museum: "Rp 10,000 (Museum)"
      },
      facilities: ["Parking Area", "Toilets", "Prayer Room", "Museum", "Souvenir Shop", "Garden", "Library"],
      bookingInfo: "No ticket reservation is required to visit the tomb. For large group visits, it is recommended to contact the management in advance.",
      bestTime: "Morning (08:00-11:00) or afternoon (15:00-16:00) to avoid the heat",
      dress: "Modest and neat clothing as a form of respect",
      historicalSignificance: "The Bung Karno Tomb complex is the final resting place of the first President of the Republic of Indonesia, Ir. Soekarno. This place has very high historical value and is one of the important national pilgrimage destinations.",
      additionalInfo: "This complex consists of three main parts: Bung Karno's Tomb, Bung Karno Museum, and Library. The museum displays many of Bung Karno's personal collections, including clothing, handwriting, paintings, and historical photographs. Visitors are advised to allocate at least 2-3 hours to enjoy the entire complex. Bung Karno's tomb is often visited by pilgrims from all over Indonesia, especially on June 21 (Bung Karno's birthday) and June 6 (Bung Karno's death)."
    },
    {
      id: 4,
      image: "/src/assets/images/istana-gebang-blitar.jpg",
      title: "Istana Gebang",
      subtitle: "Blitar City",
      mapLocation: {
        lat: -8.0978, 
        lng: 112.1763
      },
      description: "Istana Gebang is the childhood home of President Sukarno that has been converted into a museum. Located in the center of Blitar city, this colonial-style house offers insights into Bung Karno's early life.",
      fullDescription: "Istana Gebang is the childhood home of President Sukarno that has been converted into a museum. Located in the center of Blitar city, this colonial-style house offers insights into Bung Karno's early life. Despite being called a 'palace', this building is actually a family home built during the Dutch colonial era. Inside the house, visitors can see various personal items of Sukarno, family photos, and items that depict life during that time. The house is maintained in its original condition as much as possible to provide an authentic picture of the environment where Sukarno grew up.",
      openHours: "08:00 - 16:00 (Senin-Minggu)",
      ticketPrice: {
        weekday: "Rp 5,000 (Dewasa)",
        weekend: "Rp 5,000 (Dewasa)",
        student: "Rp 3,000 (Student)"
      },
      facilities: ["Parking Area", "Toilets", "Information Center", "Souvenir Shop"],
      bookingInfo: "Tickets can be purchased directly at the location. For large group visits, it is recommended to contact the management in advance.",
      bestTime: "Morning (08:00-11:00) to avoid heat and crowds",
      historicalSignificance: "Istana Gebang has very important historical value because it was the childhood home of Indonesia's first President, Ir. Soekarno. This house became a silent witness to Indonesia's struggle for independence and became part of the history of the formation of the Indonesian state.",
      additionalInfo: "At Istana Gebang, visitors can see Sukarno's book collection, original furniture, and various historical memorabilia. Tour guides are available to provide more detailed information about the history of the house and Sukarno's family. There are also various photos and important documents that depict Bung Karno's life journey from childhood to becoming president."
    },
    {
      id: 5,
      image: "/src/assets/images/pantai_Tambakrejo.jpg",
      title: "Tambakrejo Beach",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -8.3189, 
        lng: 112.1253
      },
      description: "Pantai Tambakrejo menawarkan pemandangan yang menakjubkan dengan pasir hitamnya yang eksotis dan ombak yang cocok untuk berselancar. Terletak di selatan Blitar, pantai ini menjadi tujuan favorit bagi pecinta alam dan wisatawan lokal.",
      fullDescription: "Pantai Tambakrejo menawarkan pemandangan yang menakjubkan dengan pasir hitamnya yang eksotis dan ombak yang cocok untuk berselancar. Terletak di selatan Blitar, pantai ini menjadi tujuan favorit bagi pecinta alam dan wisatawan lokal. Pantai Tambakrejo terkenal dengan pasir hitamnya yang berasal dari material vulkanik gunung berapi di sekitarnya. Ombak di pantai ini cukup besar, menjadikannya tempat yang populer untuk berselancar bagi pemula hingga tingkat menengah. Pengunjung juga dapat menikmati pemandangan matahari terbenam yang spektakuler di pantai ini.",
      openHours: "24 jam (Setiap hari)",
      ticketPrice: {
        weekday: "Rp 10,000 (Dewasa)",
        weekend: "Rp 15,000 (Dewasa)",
        parking: "Rp 5,000 (Motor), Rp 10,000 (Mobil)"
      },
      facilities: ["Area Parkir", "Toilet", "Warung Makan", "Penyewaan Papan Selancar", "Gazebo", "Penjaga Pantai"],
      bookingInfo: "Tidak diperlukan pemesanan tiket, pembayaran dilakukan di gerbang masuk pantai.",
      bestTime: "Pagi hari (06:00-09:00) atau sore hari (15:00-18:00) untuk menikmati matahari terbit atau terbenam",
      additionalInfo: "Pantai Tambakrejo terkenal dengan ikan segar dan hidangan seafood yang lezat. Pengunjung dapat membeli ikan segar langsung dari nelayan lokal atau menikmati hidangan seafood di warung-warung sekitar pantai. Disarankan untuk membawa pakaian ganti dan perlengkapan pelindung matahari seperti topi dan sunscreen. Arus laut bisa cukup kuat, jadi pastikan untuk selalu memperhatikan petunjuk keselamatan dan berenang di area yang dijaga oleh petugas pantai."
    },
    {
      id: 6,
      image: "/src/assets/images/pantai-serang.jpg",
      title: "Serang Beach",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -8.3278, 
        lng: 112.3417
      },
      description: "Pantai Serang adalah salah satu pantai terindah di Blitar dengan pasir putih bersihnya dan air laut yang jernih. Pantai ini menawarkan berbagai aktivitas air dan pemandangan yang memukau bagi pengunjung.",
      fullDescription: "Pantai Serang adalah salah satu pantai terindah di Blitar dengan pasir putih bersihnya dan air laut yang jernih. Pantai ini menawarkan berbagai aktivitas air dan pemandangan yang memukau bagi pengunjung. Berbeda dengan kebanyakan pantai di Blitar yang memiliki pasir hitam, Pantai Serang memiliki pasir putih yang lebih lembut. Tepi pantai yang landai membuatnya cocok untuk berenang, bermain air, dan aktivitas pantai lainnya. Pantai Serang juga memiliki beberapa spot fotogenik yang populer di media sosial.",
      openHours: "06:00 - 18:00 (Setiap hari)",
      ticketPrice: {
        weekday: "Rp 10,000 (Dewasa)",
        weekend: "Rp 15,000 (Dewasa)",
        parking: "Rp 5,000 (Motor), Rp 10,000 (Mobil)"
      },
      facilities: ["Area Parkir", "Toilet", "Warung Makan", "Penginapan", "Penyewaan Ban", "Penyewaan ATV", "Penjaga Pantai"],
      bookingInfo: "Tiket dapat dibeli langsung di gerbang masuk pantai.",
      bestTime: "Pagi hari (06:00-10:00) untuk menghindari keramaian dan panas, atau sore hari (15:00-18:00) untuk menikmati matahari terbenam",
      additionalInfo: "Pantai Serang adalah destinasi yang populer untuk keluarga karena airnya yang relatif tenang dan berbagai fasilitas yang tersedia. Di sekitar pantai terdapat banyak warung makan yang menawarkan hidangan seafood segar. Pengunjung dapat menyewa ATV untuk menjelajahi sepanjang pantai atau area berpasir di sekitarnya. Pada akhir pekan dan liburan, pantai ini bisa sangat ramai, jadi disarankan untuk datang lebih awal jika ingin menghindari keramaian."
    },
    {
      id: 7,
      image: "/src/assets/images/Pantai-Jolosutro.jpg",
      title: "Jolosutro Beach",
      subtitle: "Blitar, East Java",
      mapLocation: {
        lat: -8.3174, 
        lng: 112.2051
      },
      description: "Pantai Jolosutro merupakan salah satu pantai yang masih alami dengan pasir hitam yang lembut dan ombak yang cukup besar. Pantai ini terletak di pesisir selatan Blitar dan menawarkan pemandangan yang eksotik dengan nuansa mistik.",
      fullDescription: "Pantai Jolosutro merupakan salah satu pantai yang masih alami dengan pasir hitam yang lembut dan ombak yang cukup besar. Pantai ini terletak di pesisir selatan Blitar dan menawarkan pemandangan yang eksotik dengan nuansa mistik. Pantai Jolosutro memiliki bentang pantai yang cukup panjang dengan hamparan pasir hitam yang berasal dari material vulkanik. Selain keindahan alamnya, pantai ini juga dikenal dengan legenda dan mitos yang berkembang di masyarakat sekitar, menambah daya tarik tersendiri bagi wisatawan yang berkunjung.",
      openHours: "24 jam (Setiap hari)",
      ticketPrice: {
        weekday: "Rp 5,000 (Dewasa)",
        weekend: "Rp 5,000 (Dewasa)",
        parking: "Rp 2,000 (Motor), Rp 5,000 (Mobil)"
      },
      facilities: ["Area Parkir", "Toilet", "Warung Makan", "Gazebo", "Penjaga Pantai"],
      bookingInfo: "Tidak diperlukan pemesanan tiket, pembayaran dilakukan di pos penjagaan sekitar 1 kilometer sebelum lokasi pantai.",
      bestTime: "Pagi hari (06:00-10:00) atau sore hari (15:00-18:00) untuk menikmati matahari terbit atau terbenam",
      additionalInfo: "Pantai Jolosutro memiliki ombak yang cukup besar sehingga tidak disarankan untuk berenang, terutama bagi yang tidak berpengalaman. Pengunjung disarankan untuk berhati-hati dan tidak mendekati area berbahaya yang ditandai. Pantai ini juga memiliki spot-spot fotogenik yang menarik, terutama di area berbatu dan tebing di sekitar pantai. Bagi yang ingin menikmati suasana pantai lebih lama, tersedia beberapa penginapan sederhana di sekitar pantai."
    },
    {
      id: 8,
      image: "/src/assets/images/coban wilis.jpg",
      title: "Coban Wilis Waterfall",
      subtitle: "Gandusari, Blitar",
      mapLocation: {
        lat: -7.9917, 
        lng: 112.2639
      },
      description: "Air Terjun Coban Wilis adalah salah satu air terjun menakjubkan di Blitar yang terkena imbas dari erupsi Gunung Kelud pada tahun 2014. Meskipun demikian, keindahan air terjun ini tetap memukau dengan aliran air yang jernih dan lingkungan yang asri.",
      fullDescription: "Air Terjun Coban Wilis adalah salah satu air terjun menakjubkan di Blitar yang terkena imbas dari erupsi Gunung Kelud pada tahun 2014. Meskipun demikian, keindahan air terjun ini tetap memukau dengan aliran air yang jernih dan lingkungan yang asri. Air terjun ini memiliki ketinggian sekitar 30 meter dengan kolam alami di bawahnya yang cukup dalam. Suasana di sekitar air terjun sangat sejuk dan rindang, dikelilingi oleh pepohonan dan bebatuan besar yang menambah kesan alami dan eksotis.",
      openHours: "07:00 - 17:00 (Setiap hari)",
      ticketPrice: {
        weekday: "Rp 10,000 (Hari biasa)",
        weekend: "Rp 15,000 (Akhir pekan)",
        parking: "Rp 5,000 (Motor), Rp 10,000 (Mobil)"
      },
      facilities: ["Area Parkir", "Toilet", "Warung Makan", "Jalur Trekking", "Spot Foto"],
      bookingInfo: "Tidak diperlukan pemesanan tiket, pembayaran dilakukan di loket masuk.",
      bestTime: "Pagi hari (07:00-11:00) untuk menghindari keramaian dan mendapatkan pencahayaan yang baik untuk foto",
      difficulty: "Sedang",
      additionalInfo: "Untuk mencapai air terjun, pengunjung perlu melakukan trekking sekitar 15-20 menit melalui jalur yang cukup menantang. Disarankan untuk menggunakan alas kaki yang nyaman dan tidak licin. Air terjun ini paling indah saat musim hujan karena debit airnya yang melimpah, namun jalur trekking bisa menjadi lebih licin dan berbahaya. Pengunjung juga disarankan untuk membawa pakaian ganti jika ingin berenang di kolam air terjun."
    },
    {
      id: 9,
      image: "/src/assets/images/jurug bening.webp",
      title: "Jurug Bening Waterfall",
      subtitle: "Wates, Blitar",
      mapLocation: {
        lat: -8.2583, 
        lng: 112.3639
      },
      description: "Air Terjun Jurug Bening merupakan destinasi wisata alam yang menawarkan keindahan air terjun dengan bebatuan hitam yang eksotis. Terletak di Desa Purworejo, Kecamatan Wates, Kabupaten Blitar, air terjun ini menjadi salah satu tujuan wisata alam yang populer.",
      fullDescription: "Air Terjun Jurug Bening merupakan destinasi wisata alam yang menawarkan keindahan air terjun dengan bebatuan hitam yang eksotis. Terletak di Desa Purworejo, Kecamatan Wates, Kabupaten Blitar, air terjun ini menjadi salah satu tujuan wisata alam yang populer. Keunikan air terjun ini adalah keindahannya bisa dinikmati dari dua sisi, baik dari atas maupun dari bawah. Air terjun ini memiliki ketinggian sekitar 15 meter dengan aliran air yang jernih dan segar. Suasana di sekitar air terjun sangat tenang dan menyejukkan, cocok untuk melepas penat dari rutinitas sehari-hari.",
      openHours: "07:00 - 17:00 (Setiap hari)",
      ticketPrice: {
        entry: "Rp 5,000 (per orang)",
        parking: "Rp 2,000 (Motor), Rp 5,000 (Mobil)"
      },
      facilities: ["Area Parkir", "Toilet", "Warung Makan", "Gazebo", "Spot Foto"],
      bookingInfo: "Tidak diperlukan pemesanan tiket, pembayaran dilakukan di loket masuk.",
      bestTime: "Pagi hari (07:00-11:00) untuk menghindari keramaian dan mendapatkan pencahayaan yang baik untuk foto",
      difficulty: "Mudah-Sedang",
      additionalInfo: "Untuk mencapai air terjun, pengunjung perlu berjalan kaki sekitar 10 menit dari area parkir melalui jalur yang cukup mudah dilalui. Air terjun ini memiliki kolam alami yang cukup dalam, sehingga pengunjung bisa berenang atau sekedar bermain air. Disarankan untuk membawa pakaian ganti jika ingin berenang. Bebatuan di sekitar air terjun bisa licin, jadi pengunjung perlu berhati-hati saat berjalan di area tersebut."
    },
    {
      id: 10,
      image: "/src/assets/images/maliran deer.webp",
      title: "Maliran Deer Conservation",
      subtitle: "Ponggok, Blitar",
      mapLocation: {
        lat: -8.0583, 
        lng: 112.1889
      },
      description: "Penangkaran Rusa Maliran merupakan tempat konservasi rusa yang menjadi salah satu destinasi wisata edukatif di Blitar. Pengunjung dapat berinteraksi langsung dengan rusa-rusa jinak dan mempelajari upaya konservasi satwa yang dilakukan.",
      fullDescription: "Penangkaran Rusa Maliran merupakan tempat konservasi rusa yang menjadi salah satu destinasi wisata edukatif di Blitar. Pengunjung dapat berinteraksi langsung dengan rusa-rusa jinak dan mempelajari upaya konservasi satwa yang dilakukan. Tempat ini memiliki luas sekitar 3,5 hektar dengan populasi rusa yang cukup banyak. Selain sebagai tempat konservasi, Penangkaran Rusa Maliran juga berfungsi sebagai tempat penelitian dan pengembangan populasi rusa di Indonesia.",
      openHours: "08:00 - 17:00 (Setiap hari)",
      ticketPrice: {
        entry: "Rp 10,000 (per orang)",
        parking: "Rp 2,000 (Motor), Rp 5,000 (Mobil)"
      },
      facilities: ["Area Parkir", "Toilet", "Warung Makan", "Area Piknik", "Taman Bermain", "Gazebo"],
      bookingInfo: "Tidak diperlukan pemesanan tiket, pembayaran dilakukan di loket masuk.",
      bestTime: "Pagi hari (08:00-11:00) saat rusa-rusa lebih aktif dan cuaca masih sejuk",
      additionalInfo: "Pengunjung dapat membeli makanan khusus untuk rusa di dalam area penangkaran dengan harga terjangkau. Aktivitas memberi makan rusa menjadi daya tarik utama, terutama bagi anak-anak. Tempat ini juga sering menjadi tujuan kunjungan edukatif dari sekolah-sekolah untuk mengenalkan siswa pada pentingnya konservasi satwa dan menjaga keseimbangan ekosistem. Area penangkaran yang luas dan rindang juga cocok untuk piknik keluarga."
    },
    {
      id: 11,
      image: "/src/assets/images/kebon rojo.jpg",
      title: "Kebon Rojo Park",
      subtitle: "Sananwetan, Blitar",
      mapLocation: {
        lat: -8.0958, 
        lng: 112.1682
      },
      description: "Taman Kebon Rojo adalah ruang terbuka hijau di jantung kota Blitar yang menjadi tempat favorit warga untuk bersantai dan berekreasi. Dengan suasana yang sejuk dan berbagai fasilitas yang tersedia, taman ini menjadi oase di tengah kesibukan kota.",
      fullDescription: "Taman Kebon Rojo adalah ruang terbuka hijau di jantung kota Blitar yang menjadi tempat favorit warga untuk bersantai dan berekreasi. Dengan suasana yang sejuk dan berbagai fasilitas yang tersedia, taman ini menjadi oase di tengah kesibukan kota. Taman ini terletak di kompleks rumah dinas walikota Blitar dan memiliki luas yang cukup besar dengan pepohonan rindang yang memberikan keteduhan. Kebon Rojo juga bisa dibilang sebagai hutan kota yang memberikan udara segar bagi lingkungan sekitar.",
      openHours: "06:00 - 17:00 (Setiap hari)",
      ticketPrice: {
        entry: "Gratis",
        parking: "Rp 2,000 (Motor), Rp 5,000 (Mobil)"
      },
      facilities: ["Area Parkir", "Toilet", "Taman Bermain Anak", "Jogging Track", "Gazebo", "Area Piknik", "Wifi Gratis"],
      bookingInfo: "Tidak diperlukan tiket masuk, taman ini terbuka untuk umum secara gratis.",
      bestTime: "Pagi hari (06:00-09:00) untuk olahraga atau sore hari (15:00-17:00) untuk bersantai",
      additionalInfo: "Taman Kebon Rojo sering menjadi tempat diselenggarakannya berbagai acara kota seperti festival, pameran, dan pertunjukan seni. Pada akhir pekan, taman ini biasanya lebih ramai dengan keluarga yang berpiknik atau anak-anak yang bermain di area taman bermain. Taman ini juga menjadi spot favorit untuk foto pre-wedding karena keindahan taman dan bangunan bersejarah di sekitarnya. Pengunjung disarankan untuk menjaga kebersihan dan tidak merusak fasilitas yang ada."
    },
    {
      id: 12,
      image: "/src/assets/images/blitar-jadoel.jpg",
      title: "Kampung Coklat",
      subtitle: "Plosorejo, Blitar",
      mapLocation: {
        lat: -8.1487, 
        lng: 112.1542
      },
      description: "Kampung Coklat (Chocolate Village) is an educational tourist destination that focuses on the introduction and processing of chocolate. Located in Plosorejo Village, Kademangan District, Blitar Regency, this place offers an interesting experience for chocolate lovers of all ages.",
      fullDescription: "Kampung Coklat (Chocolate Village) is an educational tourist destination that focuses on the introduction and processing of chocolate. Located in Plosorejo Village, Kademangan District, Blitar Regency, this place offers an interesting experience for chocolate lovers of all ages. Visitors can directly observe the chocolate processing from cocoa beans to ready-to-consume chocolate products. In addition, various interactive activities such as cooking classes and chocolate-making workshops are available for visitors to participate in.",
      openHours: "08:00 - 16:30 (Monday-Friday), 08:00 - 17:00 (Saturday-Sunday)",
      ticketPrice: {
        entry: "Rp 20,000 (per person)",
        parking: "Rp 2,000 (Motor), Rp 5,000 (Mobil)"
      },
      facilities: ["Parking Area", "Toilets", "Prayer Room", "Restaurant", "Souvenir Shop", "Children's Play Area", "Chocolate Gallery", "Cocoa Garden"],
      bookingInfo: "Tickets can be purchased directly at the entrance counter. For large group visits or special activities such as cooking classes, it is recommended to make a reservation in advance.",
      bestTime: "Morning (08:00-11:00) to avoid crowds, especially on weekends and school holidays",
      additionalInfo: "Kampung Coklat offers various chocolate products that can be purchased as souvenirs, ranging from chocolate bars, pralines, to chocolate drinks. Visitors can also join educational tour packages that include cocoa garden tours, explanations of the chocolate processing, and chocolate-making workshops for an additional fee. This place is very popular for school visits and study tours because of its high educational value. On weekends and school holidays, this place can be very crowded, so it is recommended to come early."
    }
  ];
  
  // Mengambil parameter pencarian dari localStorage saat komponen dimuat atau saat location.state berubah
  useEffect(() => {
    const storedSearchParams = localStorage.getItem('destinationSearchParams');
    if (storedSearchParams) {
      const parsedParams = JSON.parse(storedSearchParams);
      setSearchParams(parsedParams);
      setSearchTerm(parsedParams.query || '');
      
      // Filter destinations based on search parameters
      filterDestinations(parsedParams);
    } else {
      // If there are no search parameters, display all destinations
      setFilteredDestinations(destinations);
      setSearchTerm('');
    }
  }, [location.state]); // Add location.state as a dependency to trigger re-render
  
  // Function to filter destinations based on search parameters
  const filterDestinations = (params) => {
    let results = [...destinations];
    
    // Filter based on search query (destination name)
    if (params.query && params.query.trim() !== '') {
      const query = params.query.toLowerCase().trim();
      results = results.filter(dest => 
        dest.title.toLowerCase().includes(query) || 
        dest.subtitle.toLowerCase().includes(query) ||
        (dest.description && dest.description.toLowerCase().includes(query))
      );
    }
    
    // Reset page to 1 when performing a new search
    setCurrentPage(1);
    setFilteredDestinations(results);
  };
  
  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 9;
  const totalPages = Math.ceil(filteredDestinations.length / destinationsPerPage);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  // Calculate destinations displayed on the current page
  const currentDestinations = filteredDestinations.slice(
    (currentPage - 1) * destinationsPerPage,
    currentPage * destinationsPerPage
  );

  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center">Explore All Destinations in Blitar</h2>
          <p className="text-gray-500 text-center mt-2">Discover the historical and natural beauty of East Java's cultural treasure</p>
          
          {searchParams && searchParams.query && (
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm font-medium text-gray-800">Search results for:</span>
                {searchParams.query && (
                  <span className="px-2 py-1 bg-white rounded-full text-xs text-gray-800 border border-gray-200">
                    "{searchParams.query}"
                  </span>
                )}
                <button 
                  className="px-2 py-1 text-xs text-red-600 hover:text-red-800 hover:underline"
                  onClick={() => {
                    localStorage.removeItem('destinationSearchParams');
                    setSearchParams(null);
                    setFilteredDestinations(destinations);
                    setSearchTerm('');
                    // Trigger re-render with navigate
                    navigate('/destination', { replace: true, state: { refresh: Date.now() } });
                  }}
                >
                  Clear search
                </button>
              </div>
              <p className="text-sm text-center mt-2 text-gray-800">
                Found {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentDestinations.map(destination => (
              <div key={destination.id} onClick={() => handleDestinationClick(destination)}>
                <LocationCard 
                  image={destination.image}
                  title={destination.title}
                  subtitle={destination.subtitle}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No results</h3>
            <p className="mt-1 text-sm text-gray-500">No destinations match your search criteria.</p>
          </div>
        )}
        
        {/* Pagination */}
        {filteredDestinations.length > destinationsPerPage && (
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                &laquo; Prev
              </button>
              
              {[...Array(totalPages).keys()].map(number => (
                <button
                  key={number + 1}
                  onClick={() => handlePageChange(number + 1)}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === number + 1 ? 'text-[#CC1720] bg-red-50 border-red-500 z-10' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  {number + 1}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                Next &raquo;
              </button>
            </nav>
          </div>
        )}
        

      </div>
    </section>
  );
}

export default DestinationGrid;
