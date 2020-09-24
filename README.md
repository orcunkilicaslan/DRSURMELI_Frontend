# DRSURMELI Frontend

#### Web Public Area Frontend List
 - [Home_Page](https://orcunkilicaslan.github.io/DRSURMELI_Frontend/html/Home_Page.html)
 - [Content_Page](https://orcunkilicaslan.github.io/DRSURMELI_Frontend/html/Content_Page.html)
 - [Contact_Us](https://orcunkilicaslan.github.io/DRSURMELI_Frontend/html/Contact_Us.html)
   

# NodeJS Kurulumu
  
### NodeJS Kurulumu  
Öncelikle **npm** paket yöneticimizin olması lazım, yoksa [NodeJS](https://nodejs.org/) ‘in resmi sitesi olan [nodejs.org](https://nodejs.org/en/download/)’tan NodeJS’i bilgisayarımıza yüklememiz gerek.  Yüklemeyi yaptıktan sonra _terminal_ yada _command prompt’_a  
  
     npm install --global gulp-cli  

yazmamız gerekmektedir. Bu sayade Gulp’un cli(Command Line Interface)sini bilgisayarımıza yüklemiş olacağız, bu bize Gulp’u terminalimizde **gulp** komutunu (command) kullanmamızı sağlıcaktır. Bu işlemi de yaptıktan sonra Gulp görevleri yazmaya başlayalım.  
  
  
#### Projeyi PC'ye İndirme  
Komut Satırına Aşağıdaki Kodu Yazın  

     git clone https://github.com/orcunkilicaslan/DRSURMELI_Frontend.git  

#### Projeyi PC'de Çalıştırma  
Komut Satırına Aşağıdaki Kodu Yazın  

     npm install
     npm install -g npm  


Projeyi Derleyecekseniz İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp build --production

Projede Çalışacaksanız İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp devel  