## Backend Teknolojileri
Express: Sunucu tarafında kullanılan web framework'ü.
Mongoose: MongoDB ile etkileşim kurmak için kullanılan veritabanı kütüphanesi.
Method-override: HTTP metodlarını (PUT, DELETE gibi) tarayıcı tarafından desteklenmediği durumlarda kullanmaya yarar.
Express-fileupload: Dosya yükleme işlemlerini yönetmek için kullanılır.

## Frontend Teknolojileri
EJS: Sunucu taraflı HTML şablonları oluşturmak için kullanılan şablon motoru.

Routerlar ve İşlevleri
app.get('/', photoController.getAllPhotos): Ana sayfada tüm fotoğrafları listeler.
app.get('/photos/:id', photoController.getPhoto): Belirli bir fotoğrafın detayını gösterir.
app.post('/photos', photoController.createPhoto): Yeni bir fotoğraf ekler.
app.put('/photos/:id', photoController.updatePhoto): Var olan bir fotoğrafı günceller.
app.delete('/photos/:id', photoController.deletePhoto): Belirli bir fotoğrafı siler.
app.get('/about', pageController.getAboutPage): Hakkında sayfasını gösterir.
app.get('/add', pageController.getAddPage): Fotoğraf ekleme sayfasını gösterir.
app.get('/photos/edit/:id', pageController.getEditPage): Fotoğraf düzenleme sayfasını gösterir.

![pcatgif](https://github.com/user-attachments/assets/a406ee1c-3964-45d6-850c-32707aa58b33)
