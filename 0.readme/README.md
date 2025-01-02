# REACT ÇALIŞMALARIM

React öğrenirken yapmış olduğum çalışmaları kaynak olması adına bir repo üzerinden paylaşmak istedim. READM.me dosyasına eğitimde aldığım notları ekledim.

## React Projesi oluşturma

1- Çalışmak istediğin klasörü oluştur. Örn: React Dersleri

2- VSCode ile bu klasörü aç.

3- Terminalden -> "npm create vite@latest" yüklemeyi başlat.

4- Projene bir ad ver. Örn: Netflix-Project

5- Framework seç -> React

6- TypeScript veya JavaScript seç -> JavaScript

7- "cd Netflix-Project" ile projeye geç

8- "npm install" ile nodemodules yükle

9- "npm run dev" ile projeyi localde çalıştır.

## Proje oluşturduktan sonra içeride yapılacaklar.

1- App.css içerisini temizle

2- App.jsx içerisindeki function içerisini temizle

## Hızlı component oluşturma

1- TestComponent.jsx adında dosya oluştur.

2- "rfce" ile hazır bir component yapısı oluştur.

## React Export Mantığı

1- Bir component'i dışarı olduğu gibi export etmek istiyorsak, export default "Login"; kullanılır.

2- Bir component içerisinde 1 parça şeyi export etmek istiyorsak, export kullanılır. Örn: import { users } from "./Login"

3- Kullanılacak yerde bu component import edilmeli

- import Login from "./Login" (Burada Component in ismi "Login" yerine istediğimiz bir tanımlamayı kullanabiliriz. Örn: import Example from ".Login")

## React useState : hooks

1- Verileri tutmak için kullandığımız hooks'tur.

2- ÖRN -> const [name, setName] = useState("")

- name -> Değişkene erişirken ve içindeki değeri kullanırken ki ismi
- setName -> name içerisindeki değeri yeni bir değerle güncelleyebilmek için setName fonksiyonunun adını veriyoruz.
  \*\* useState("") -> "" burada name değişkeninin başlangıç değerini boş bir string olarak tanımlar.
- useState: Bir state'in değerini set methodunu kullanarak değiştirdiğinde component yeniden render edilir.

## React useEffect: hooks

1- Bir sayfa yüklendiğinde bir şeyler yaptırmak istediğimizde kullanmamız gereken hook'tur.

## ToDoList App

### Child'dan Parent a Props geçme çalışması

## Redux ToolKit (Section-11)
