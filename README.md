# React + Vite

# Kullanılan Kütüphaneler

- react-router-dom (sayfalama yapısı)
- redux (state paylaşımı)
- react-redux
- redux-thunk (veriyi store'a aktarma)
- axios
- splide.js
- bootstrap
- react-icons
- millify


# Kaynaklar
API: https://developer.themoviedb.org/reference/changes-movie-lists

# Ekran Görüntüleri
![](/public/assets/netflix-screen-1.png)
![](/public/assets/netflix-screen-2.png)
![](/public/assets/netflix-screen-3.png)
![](/public/assets/netflix-screen-4.png)

# Video 
![](/public/assets/Netflix-Clone-With-Redux-Thunk.mp4)

# Road-Map

- Redux kurulumu
- Popüler filmleri API'dan çek -> store'a aktar
- Rastgele bir filmi seçip ekrana bas (Hero.jsx'de)

- Filmlerin kategori verisini çek -> store'a aktar.
- Her bir kategori için o kategoriye ait filmleri listeleyecek bir bileşen bas -> MovieList
-- listelenecek kategorinin ismini ve id'sini gönder
-- gelen id'ye göre film verisini çek ve ekrana yansıt


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
