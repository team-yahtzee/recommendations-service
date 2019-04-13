# recommendations-service
recommendations service component includes
1. Front-end city search bar (auto-suggestions)
2. Image carousel of recommendations
3. Modal pop-up to save favorites
4. Static footnotes


<a href="https://imgflip.com/gif/2yiis2"><img src="https://i.imgflip.com/2yiis2.gif" title="made at imgflip.com"/></a>

#Getting Started

run node SeedData.js from dbs folder

npm install all packages

If deploying on AWS server make sure to change axios request in componentDidMount in App.jsx (client/components/App.jsx)
from: 

axios.get(`/room${window.location.pathname}`) 

to:
axios.get(`http://[Insert AWS EC2 public DNS]/room${window.location.pathname}`) 

ex:
axios.get(`http://ec2-54-90-97-213.compute-1.amazonaws.com/room${window.location.pathname}`)

Setup port forwarding to port 3001
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3001

Start node process

