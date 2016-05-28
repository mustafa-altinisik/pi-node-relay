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

./kur.sh

Çalıştırmak için
sudo node app.js

Başlangıçta otomatik Çalıştırmak için


