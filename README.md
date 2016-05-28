e-priz Raspbery Pi ile Bulut üzerinden priz kontrolü
=============

Bu proje aşağıdaki adresteki kodlar kullanılarak yapılmıştır.
http://www.openhomeautomation.net/control-a-relay-from-anywhere-using-the-raspberry-pi/

Kurmak için

git clone https://github.com/mustafa-altinisik/pi-node-relay
cd pi-node-relay

wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
sudo npm install rpi-gpio express

Kurulum bittikten sonra http://dashboard.arest.io/ adresine girilerek kullanıcı adı ve şifre ile bir dashboard oluşturuyoruz.
Önemli olan app.js dosyasının içindeki id ve name ile aynı id ve name değerini kullanıyoruz böylece birbirlerini tanıyorlar.

// Set unique ID
piREST.set_id('p5dgwt');
piREST.set_name('pi_cloud');


sistemi çalıştırmak için

sudo node app.js

Raspberry pi her açıldığında otomatik çalıştırmak için



